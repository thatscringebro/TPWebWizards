using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe;
using WizardRecords.Api.Data;

namespace WizardRecords.Api.Controllers
{
    [Route("payment")]
    public class PaymentController : Controller
    {
        private readonly IOptions<StripeOptions> stripeOptions;
        private readonly WizRecDbContext dbContext;

        public PaymentController(IOptions<StripeOptions> stripeOps, WizRecDbContext context)
        {
           
            stripeOptions = stripeOps;
            dbContext = context;

        }

        [HttpPost("charge/{OrderId}")]
        public IActionResult Charge(Guid OrderId, [FromBody] Payment payment)
        {
            var order = dbContext.Orders.Find(OrderId);
            if (order == null)
            {
                return NotFound();
            }

            StripeConfiguration.ApiKey = stripeOptions.Value.SecretKey;

            var paymentIntentService = new PaymentIntentService();
            var paymentIntent = paymentIntentService.Create(new PaymentIntentCreateOptions
            {
                Amount = (long?)(order.Total * 100),
                Currency = stripeOptions.Value.CurrencyCode,
                AutomaticPaymentMethods = new PaymentIntentAutomaticPaymentMethodsOptions
                {
                    Enabled = true,
                },
            }); 

            //var chargeOptions = new ChargeCreateOptions
            //{
            //    Amount = (long?)(order.Total * 100),
            //    Description = $"Order {order.OrderId} Payment",
            //    Source = payment.Token,
            //    Currency = stripeOptions.Value.CurrencyCode
            //};
            //var chargeService = new ChargeService();
            //var charge = chargeService.Create(chargeOptions);

            return Ok(paymentIntent);

        }
        [HttpGet("confirmation")]
        public IActionResult Confirmation()
        {
            return View();
        }
    }
}

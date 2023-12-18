﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Stripe;
using Stripe.Climate;
using WizardRecords.Api.Data;
using WizardRecords.Api.Interfaces;

namespace WizardRecords.Api.Controllers
{
    [ApiController]
    public class PaymentController : Controller
    {
        private readonly IOptions<StripeOptions> stripeOptions;
        private readonly ICartRepository _cartRepository;
        private readonly IConfiguration _configuration;

        public PaymentController(IOptions<StripeOptions> stripeOps, ICartRepository cartrepo, IConfiguration configuration)
        {
           _configuration = configuration;
            stripeOptions = stripeOps;
            _cartRepository = cartrepo;

        }

        [HttpPost("charge/{OrderId}")]
        public  IActionResult Charge(Guid OrderId, [FromBody] Payment payment)
        {
            var order = _cartRepository.GetOrderById(OrderId);

            if (order == null)
            {
                return NotFound();
            }

            StripeConfiguration.ApiKey = stripeOptions.Value.SecretKey;

            var chargeOptions = new ChargeCreateOptions
            {
                Amount = (long?)(order.TotalApTaxes * 100), // Prix en cent
                Description = payment.NameOnCard, // a revoir
                Source = payment.Token,
                Currency = stripeOptions.Value.CurrencyCode
            };

            var chargeService = new ChargeService();
            try
            {
                var charge = chargeService.Create(chargeOptions);

                return Ok(charge.ToJson());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            
        }

    
      
    }
}

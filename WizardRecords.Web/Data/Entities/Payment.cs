using System.ComponentModel.DataAnnotations.Schema;

namespace WizardRecords.Api.Data.Entities
{
    public class Payment
    {
        public Guid PaymentId { get; set; }
        public string NameOnCard { get; set; }
        public string BillingAddress { get; set; }
        public string PhoneNumber { get; set; }
        [NotMapped]
        public string Token { get; set; }
        public string Last4 { get; set; }
        [ForeignKey("UserId")]
        public Guid UserId { get; set; }
    }
}

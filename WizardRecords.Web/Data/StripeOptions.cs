namespace WizardRecords.Api.Data
{
    public class StripeOptions
    {
        public string PublicKey { get; set; }
        public string SecretKey { get; set; }
        public string CurrencyCode { get; set; }


        public StripeOptions() {

            SecretKey = "sk_test_51OCShKEZSxcrg8JwYSRliZKegEndbzUMWmQvZPOgzXfwMEAH1tBIIyeuu4POInjHTW2VMjI3gVzHUft7LrOGF43e00SqCSAeR1";
            CurrencyCode = "CAN";

        }
    }

}

namespace WizardRecords.Dtos {
    public class OrderDto {
        public String UserName { get; set; }
        public String UserEmail { get; set; }
        public String UserPhone { get; set; }
        public String Adress { get; set; }
        public String City { get; set; }
        public String Country { get; set; } = "Canada";
        public String Province { get; set; }
        public String ZipCode { get; set; }
    }
}

using Microsoft.AspNetCore.Identity;
using static WizardRecords.Api.Data.Constants;

namespace WizardRecords.Api.Domain.Entities
{
    public class User : IdentityUser<Guid> {
        public User(string userName) : base(userName) { }
        public string FirstName { get; set; } = "-";
        public string LastName { get; set; } = "-";
        public string FullName => $"{FirstName} {LastName}";
        public int AddressNum { get; set; }
        public string StreetName { get; set; }
        public string City { get; set; }
        public Province Province { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; } = "Canada";
    }
}

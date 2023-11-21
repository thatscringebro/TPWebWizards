using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
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

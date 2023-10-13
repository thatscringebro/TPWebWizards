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

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? FullName => $"{FirstName} {LastName}";
        public new string? UserName { get; set; }
        public new string? PhoneNumber { get; set; }
        public new string? Email { get; set; }
        public bool IsInitialPwd { get; set; } = true;
        public new string? PasswordHash { get; set; }
        public string? PasswordSalt { get; set; }
        public UserRole UserRole { get; set; }

    }
}

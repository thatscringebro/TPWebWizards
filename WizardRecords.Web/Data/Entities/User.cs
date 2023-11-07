using Microsoft.AspNetCore.Identity;

namespace WizardRecords.Api.Domain.Entities
{
    public class User : IdentityUser<Guid> {
        public User(string userName) : base(userName) { }
        public string FirstName { get; set; } = "-";
        public string LastName { get; set; } = "-";
        public string FullName => $"{FirstName} {LastName}";
        public bool IsInitialPwd { get; set; } = true;
        public string? ProfileImagePath { get; set; } = "default.webp"; // TODO: Find default image
    }
}

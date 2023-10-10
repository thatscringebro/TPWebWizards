using FluentValidation;

namespace WizardRecords.Core.Domain.Validators {
    public static class IdentityValidators {
        private const string REGEX_UPPERCASE = @"[A-Z]";
        private const string REGEX_LOWERCASE = @"[a-z]";
        private const string REGEX_DIGIT = @"[0-9]";
        private const string REGEX_NO_SPACES = @"^[^\s]*$";

        public class PasswordValidator : AbstractValidator<string> {
            public PasswordValidator() {
                RuleFor(password => password)
                    .NotEmpty()
                    .WithMessage("Password cannot be empty.")
                    .MinimumLength(6)
                    .WithMessage("Password must have at least 6 characters.")
                    .Matches(REGEX_UPPERCASE)
                    .WithMessage("Password must have at least one uppercase letter.")
                    .Matches(REGEX_LOWERCASE)
                    .WithMessage("Password must have at least one lowercase letter.")
                    .Matches(REGEX_DIGIT)
                    .WithMessage("Password must have at least one digit.")
                    .Matches(REGEX_NO_SPACES)
                    .WithMessage("Password cannot contain spaces.");
            }
        }
    }
}

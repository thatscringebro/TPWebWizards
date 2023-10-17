using MediatR;
using Microsoft.AspNetCore.Identity;
using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Core.Application.Commands {
    public record RegisterUserCommand(string Username, string Password, string Email, string FirstName, string LastName, string ProfileImagePath) : IRequest<IdentityResult>;

    public class RegisterUserCommandHandler : IRequestHandler<RegisterUserCommand, IdentityResult> {
        private readonly UserManager<User> _userManager;

        public RegisterUserCommandHandler(UserManager<User> userManager) {
            _userManager = userManager;
        }

        public async Task<IdentityResult> Handle(RegisterUserCommand request, CancellationToken cancellationToken) {
            var user = new User(request.Username) {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                ProfileImagePath = request.ProfileImagePath
            };

            return await _userManager.CreateAsync(user, request.Password);
        }
    }
}

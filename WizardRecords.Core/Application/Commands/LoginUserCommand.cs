using MediatR;
using Microsoft.AspNetCore.Identity;
using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Core.Application.Commands {
    public record LoginUserCommand(string Username, string Password) : IRequest<string>;

    public class LoginUserCommandHandler : IRequestHandler<LoginUserCommand, string> {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public LoginUserCommandHandler(UserManager<User> userManager, SignInManager<User> signInManager) {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<string> Handle(LoginUserCommand request, CancellationToken cancellationToken) {
            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null) {
                return "Invalid credentials";
            }

            var signInResult = await _signInManager.CheckPasswordSignInAsync(user, request.Password, false);
            if (signInResult.Succeeded) {
                return "GeneratedToken"; 
            }
            else {
                return "Invalid credentials";
            }
        }
    }
}

// TODO: Add specific error messages for username and password
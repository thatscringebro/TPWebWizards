using MediatR;
using Microsoft.AspNetCore.Identity;
using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Core.Application.Commands {
    public record UpdateUserProfileCommand(string Username, string FirstName, string LastName, string Email, string ProfileImagePath) : IRequest<IdentityResult>;
    public class UpdateUserProfileCommandHandler : IRequestHandler<UpdateUserProfileCommand, IdentityResult> {
        private readonly UserManager<User> _userManager;

        public UpdateUserProfileCommandHandler(UserManager<User> userManager) {
            _userManager = userManager;
        }

        public async Task<IdentityResult> Handle(UpdateUserProfileCommand request, CancellationToken cancellationToken) {
            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null) {
                return IdentityResult.Failed(new IdentityError { Description = "User not found" });
            }
            user.FirstName = request.FirstName;
            user.LastName = request.LastName;
            user.Email = request.Email;
            user.ProfileImagePath = request.ProfileImagePath;

            return await _userManager.UpdateAsync(user);
        }
    }
}

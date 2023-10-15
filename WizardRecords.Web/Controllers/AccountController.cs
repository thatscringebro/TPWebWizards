﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WizardRecords.Core;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Dtos;

namespace WizardRecords.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole<Guid>> _roleManager;
        private readonly WizRecDbContext _context;

        public AccountController(SignInManager<User> signInManager,
            UserManager<User> userManager, RoleManager<IdentityRole<Guid>>
            roleManager, WizRecDbContext context)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
        }

        //TODO : POST /ACCOUT/LOGIN (LogInVM)
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> LogIn(Account vm)
        {
            if (!ModelState.IsValid)
            {
                return Redirect("/");
            }

            try
            {
                var result = await _signInManager.PasswordSignInAsync(vm.Username, vm.Password, false, false);

                if (!result.Succeeded)
                {
                    ModelState.AddModelError(string.Empty, "check your email/password");
                    return Redirect("/");
                }
            }
            catch (Exception)
            {
                return RedirectToAction("Error", "Home");
            }

            return RedirectToAction("Manage");
        }
    }
}
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using WizardRecords.Core;

public void ConfigureServices(IServiceCollection services)
{
    // ...
    services.AddDbContext<WizRecDbContext>(options =>
        options.UseSqlServer(System.Configuration.GetConnectionString("DefaultConnection")));

    services.AddIdentity<IdentityUser>(options =>
    {
        options.SignIn.RequireConfirmedAccount = true;
        options.Password.RequiredLength = 8; // Configurez les exigences de mot de passe
    })
    .AddEntityFrameworkStores<WizRecDbContext>();
    // ...
}


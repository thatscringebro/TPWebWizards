using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WizardRecords.Core;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;
using WizardRecords.Web.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Database context
builder.Services.AddDbContext<WizRecDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Identity services
builder.Services.AddIdentity<User, IdentityRole<Guid>>()
    .AddEntityFrameworkStores<WizRecDbContext>()
    .AddSignInManager()
    .AddDefaultTokenProviders();

builder.Services.AddScoped<IAlbumRepository, AlbumRepository>();

// CORS
builder.Services.AddCors(options => {
	options.AddPolicy(name: "AllowReactApp",
		builder => {
			builder.WithOrigins("http://localhost:3000")
				.AllowAnyHeader()
				.AllowAnyMethod()
                .AllowCredentials();
	});
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("AllowReactApp");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using WizardRecords.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using WizardRecords.Core.Data;

namespace WizardRecords.Core {
    public class WizRecDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid> {
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Label> Labels { get; set; }
        public DbSet<Album> Albums { get; set; }
        public WizRecDbContext(DbContextOptions<WizRecDbContext> options) :
            base(options) { }

        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);
            builder.LoadSeed();
        }
    }
}

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


            builder.Entity<Album>().HasIndex(x => x.ArtistId);
            builder.Entity<Album>().HasIndex(x => x.LabelId);
            builder.Entity<Album>().HasIndex(x => x.AlbumGenre);
            builder.Entity<Album>().HasIndex(x => x.Media);
            builder.Entity<Album>().HasIndex(x => x.Category);
            builder.Entity<Album>().HasIndex(x => x.Title);
            base.OnModelCreating(builder);
            builder.LoadSeed();
        }
    }
}

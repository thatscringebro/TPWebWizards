using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WizardRecords.Core;
using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly WizRecDbContext _context;

        public DefaultArtistRepository(WizRecDbContext context) {
            _context = context;
        }

        public async Task<IEnumerable<Artist>> GetAllArtistsAsync() => await _context.Artists.ToListAsync();

        public async Task<IEnumerable<Artist>> GetArtistsByGenreAsync(ArtistGenre artistGenre) {
            return await _context.Artists.Where(a => a.ArtistGenre == artistGenre).ToListAsync();
        }

        public async Task<Artist?> GetArtistByIdAsync(Guid artistId) {
            return await _context.Artists.FirstOrDefaultAsync(a => a.Id == artistId);
        }
    }
}

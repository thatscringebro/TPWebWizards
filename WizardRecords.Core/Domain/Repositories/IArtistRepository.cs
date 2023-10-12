using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public interface IArtistRepository {
        Task<IEnumerable<Artist>> GetAllArtistsAsync();
        Task<IEnumerable<Artist>> GetArtistsByGenreAsync(ArtistGenre artistGenre);
        Task<Artist?> GetArtistByIdAsync(Guid artistId);
    }
}

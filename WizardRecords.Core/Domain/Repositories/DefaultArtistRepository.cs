using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly List<Artist> _artists = new List<Artist>();
        
        public IEnumerable<Artist> GetAllArtists() => _artists;

        public IEnumerable<Artist> GetArtistsByGenre(ArtistGenre artistGenre) {
            var artistsByGenre = _artists.Where(a => a.ArtistGenre == artistGenre).ToList();
            if (artistsByGenre.Count() == 0) {
                throw new ArgumentException("No artists found for the specified genre");
            }
            return artistsByGenre.AsEnumerable();   
        }

        public Artist GetArtistById(Guid artistId) {
            var artistById = _artists.Find(a => a.ArtistId == artistId);
            if (artistById == null) {
                throw new ArgumentException($"No artist found for id {artistId}");
            }
            return artistById;
        }
    }
}

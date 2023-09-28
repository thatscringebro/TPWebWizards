using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface IArtistRepository {
        Artist GetArtistById(int artistId);
        Artist GetArtistByName(string artistName);
        IEnumerable<Album> GetAlbumsByArtist(int artistId);
    }
}

using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface IArtistRepository {
        Artist GetArtistById(int albumId);
        Artist GetArtistByName(string title);
        IEnumerable<Album> GetAlbumsByArtist(int artistId);
    }
}

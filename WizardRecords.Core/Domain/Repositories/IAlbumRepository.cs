using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public interface IAlbumRepository {
        IEnumerable<Album> GetAllAlbums();
        IEnumerable<Album> GetAlbumsByArtistId(int artistId);
        IEnumerable<Album> GetAlbumsByGenre(AlbumGenre albumGenre);
        IEnumerable<Album> GetAlbumsByMediaType(MediaType albumMediaType);
        IEnumerable<Album> GetAlbumsByCategory(Category albumCategory);
        Album GetAlbumById(int albumId);
        Album GetAlbumByTitle(string title);
    }
}
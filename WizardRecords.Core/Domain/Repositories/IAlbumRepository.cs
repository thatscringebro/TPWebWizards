using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public interface IAlbumRepository {
        IEnumerable<Album> GetAllAlbums();
        IEnumerable<Album> GetAlbumsByArtistId(Guid artistId);
        IEnumerable<Album> GetAlbumsByGenre(AlbumGenre albumGenre);
        IEnumerable<Album> GetAlbumsByMediaType(MediaType albumMediaType);
        IEnumerable<Album> GetAlbumsByCategory(Category albumCategory);
        Album GetAlbumById(Guid albumId);
        Album GetAlbumByTitle(string title);
        Album GetRandomAlbum(MediaType? mediaType = null);
    }
}
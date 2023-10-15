using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public interface IAlbumRepository {
        Task<IEnumerable<Album>> GetAllAlbumsAsync();
        Task<IEnumerable<Album>> GetAlbumsByArtistIdAsync(Guid artistId);
        Task<IEnumerable<Album>> GetAlbumsByLabelIdAsync(Guid labelId);
        Task<IEnumerable<Album>> GetAlbumsByGenreAsync(AlbumGenre albumGenre);
        Task<IEnumerable<Album>> GetAlbumsByMediaTypeAsync(MediaType mediaType);
        Task<IEnumerable<Album>> GetAlbumsByCategoryAsync(Category albumCategory);
        Task<IEnumerable<Album>> GetSearchAlbumsAsync(string query);
        Task<Album?> GetAlbumByIdAsync(Guid albumId);
        Task<Album?> GetAlbumByTitleAsync(string title);
        Task<Album?> GetRandomAlbumAsync(MediaType mediaType);
    }
}

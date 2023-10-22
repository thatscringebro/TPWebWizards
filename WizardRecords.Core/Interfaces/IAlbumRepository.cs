using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public interface IAlbumRepository {
        Task<IEnumerable<Album>> GetAllAlbumsAsync();
        Task<IEnumerable<Album>> GetAlbumsByArtistNameAsync(string artistName);
        Task<IEnumerable<Album>> GetAlbumsByLabelNameAsync(string labelName);
        Task<IEnumerable<Album>> GetAlbumsByMediaAsync(Media mediaType);
        Task<IEnumerable<Album>> GetAlbumsByUsedOrNewAsync(bool isUsed);
        Task<IEnumerable<Album>> GetAlbumsByGenreAsync(ArtistGenre artistGenre);
        Task<IEnumerable<Album>> GetSearchAlbumsAsync(string query);

        Task<Album?> GetAlbumByIdAsync(Guid albumId);
        Task<Album?> GetAlbumByArtistNameAndTitleAsync(string artistName, string title);
        Task<Album?> GetAlbumByTitleAsync(string title);
        Task<Album?> GetRandomAlbumAsync(Media? media = null, bool? isUsed = null);

        // CRUD
        Task<Album?> UpdateAlbumAsync(Guid albumId, Album updateData);
        Task<Album?> DeleteAlbumAsync(Guid albumId);
        Task CreateAlbumAsync(Album album);
    }
}

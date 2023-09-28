using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface IAlbumRepository {
        Album GetAlbumById(int albumId);
        Album GetAlbumByTitle(string title);
        IEnumerable<Album> GetAllAlbums();
    }
}
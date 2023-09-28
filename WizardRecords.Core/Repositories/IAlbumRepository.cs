using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface IAlbumRepository {
        IEnumerable<Album> GetAlbums();
        Album GetAlbumById(int albumId);
        Album GetAlbumByTitle(string title);
    }
}
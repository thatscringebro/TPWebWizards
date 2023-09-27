using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public class DefaultAlbumRepository : IAlbumRepository {

        private readonly List<Album> _albums = new() {
            new Album(1, 1, 5, 24.99f, "After Dark"),
            new Album(2, 2, 3, 19.99f, "Tyrant"),
            new Album(3, 3, 2, 29.99f, "How To Survive A Funeral"),
            new Album(4, 4, 1, 39.99f, "L\'Enfant Sauvage"),
            new Album(5, 5, 1, 19.99f, "In Utero"),
            new Album(6, 6, 1, 24.99f, "All Hail"),
            new Album(7, 7, 1, 29.99f, "Californication"),
            new Album(8, 8, 1, 19.99f, "Master Of Puppets"),
            new Album(9, 9, 1, 24.99f, "Hot Fuss"),
            new Album(10, 10, 1, 29.99f, "131"),
            new Album(11, 11, 1, 19.99f, "Finding God Before God Finds Me"),
            new Album(12, 12, 1, 34.99f, "Sempiternal"),
            new Album(13, 13, 1, 99.99f, "Fushitsusha"),
            new Album(14, 14, 1, 19.99f, "One-X"),
            new Album(15, 15, 1, 24.99f, "From Under The Cork Tree"),
        };

        public Album GetAlbumById(int albumId) {
            throw new NotImplementedException();
        }

        public Album GetAlbumByTitle(string title) {
            throw new NotImplementedException();
        }

        public IEnumerable<Album> GetAlbums() {
            throw new NotImplementedException();
        }
    }
}

using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultAlbumRepository : IAlbumRepository {
        private readonly List<Album> _albums = new List<Album>();
        public IEnumerable<Album> GetAllAlbums() => _albums.AsEnumerable();

        public IEnumerable<Album> GetAlbumsByArtistId(Guid artistId) {
            var albumsByArtist = _albums.Where(a => a.ArtistId == artistId).ToList();
            if (albumsByArtist.Count() == 0) {
                throw new ArgumentException($"No albums found for artist {artistId}");
            }
            return albumsByArtist.AsEnumerable();
        }

        public IEnumerable<Album> GetAlbumsByGenre(AlbumGenre albumGenre) {
            var albumsByGenre = _albums.Where(a => a.AlbumGenre == albumGenre);
            if (albumsByGenre.Count() == 0) {
                throw new ArgumentException($"No albums found for genre {albumGenre}");
            }
            return albumsByGenre.AsEnumerable();
        }

        public IEnumerable<Album> GetAlbumsByMediaType(MediaType albumMediaType) {
            var albumsByMediaType = _albums.Where(a => a.Media == albumMediaType);
            if (albumsByMediaType.Count() == 0) {
                throw new ArgumentException($"No albums found for media type {albumMediaType}");
            }
            return albumsByMediaType.AsEnumerable();
        }

        public IEnumerable<Album> GetAlbumsByCategory(Category albumCategory) {
            var albumsByCategory = _albums.Where(a => a.Category == albumCategory);
            if (albumsByCategory.Count() == 0) {
                throw new ArgumentException($"No albums found for category {albumCategory}");
            }
            return albumsByCategory.AsEnumerable();
        }

        public Album GetAlbumById(Guid albumId) {
            var albumById = _albums.Find(a => a.AlbumId == albumId);
            if (albumById == null) {
                throw new ArgumentException($"Album with id {albumId} not found");
            }
            return albumById;
        }

        public Album GetAlbumByTitle(string title) {
            var albumByTitle = _albums.Find(a => a.Title == title);
            if (albumByTitle == null) {
                throw new ArgumentException($"Album with title {title} not found");
            }
            return albumByTitle;
        }

        public Album GetRandomAlbum(MediaType? mediaType = null) {
            IEnumerable<Album> albumsByMediaType = _albums;

            if (mediaType.HasValue) {
                albumsByMediaType = _albums.Where(a => a.Media == mediaType.Value);
            }

            Random rdm = new Random();
            int rdmAlbumId = rdm.Next(1, albumsByMediaType.Count());

            return albumsByMediaType.ElementAt(rdmAlbumId - 1);
        }

        // TODO: Sort by price, sort alphabetically, etc.
    }
}

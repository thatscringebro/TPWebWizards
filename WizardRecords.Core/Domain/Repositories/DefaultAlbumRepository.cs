using Microsoft.EntityFrameworkCore;
using WizardRecords.Core;
using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultAlbumRepository : IAlbumRepository {
        private readonly WizRecDbContext _context;

        public DefaultAlbumRepository(WizRecDbContext context) {
            _context = context;
        }
        public async Task<IEnumerable<Album>> GetAllAlbumsAsync() => await _context.Albums.ToListAsync();

        public async Task<IEnumerable<Album>> GetAlbumsByArtistIdAsync(Guid artistId) {
            var albumsByArtist = await _context.Albums.Where(a => a.ArtistId == artistId).ToListAsync();
            if (albumsByArtist.Count() == 0) {
                throw new ArgumentException($"No albums found for artist {artistId}");
            }
            return albumsByArtist.AsEnumerable();
        }

        public async Task<IEnumerable<Album>> GetAlbumsByGenreAsync(AlbumGenre albumGenre) {
            var albumsByGenre = await _context.Albums.Where(a => a.AlbumGenre == albumGenre).ToListAsync();
            if (albumsByGenre.Count() == 0) {
                throw new ArgumentException($"No albums found for genre {albumGenre}");
            }
            return albumsByGenre.AsEnumerable();
        }

        public async Task<IEnumerable<Album>> GetAlbumsByMediaTypeAsync(MediaType albumMediaType) {
            var albumsByMediaType = await _context.Albums.Where(a => a.Media == albumMediaType).ToListAsync();
            if (albumsByMediaType.Count() == 0) {
                throw new ArgumentException($"No albums found for media type {albumMediaType}");
            }
            return albumsByMediaType.AsEnumerable();
        }

        public async Task<IEnumerable<Album>> GetAlbumsByCategoryAsync(Category albumCategory) {
            var albumsByCategory = await _context.Albums.Where(a => a.Category == albumCategory).ToListAsync(); ;
            if (albumsByCategory.Count() == 0) {
                throw new ArgumentException($"No albums found for category {albumCategory}");
            }
            return albumsByCategory.AsEnumerable();
        }

        public async Task<Album> GetAlbumByIdAsync(Guid albumId) {
            var albumById = await _context.Albums.FirstOrDefaultAsync(a => a.Id == albumId);
            if (albumById == null) {
                throw new ArgumentException($"Album with id {albumId} not found");
            }
            return albumById;
        }

        public async Task<Album> GetAlbumByTitleAsync(string title) {
            var albumByTitle = await _context.Albums.FirstOrDefaultAsync(a => a.Title == title);
            if (albumByTitle == null) {
                throw new ArgumentException($"Album with title {title} not found");
            }
            return albumByTitle;
        }

        public async Task<Album> GetRandomAlbumAsync(MediaType mediaType) {
            var query = _context.Albums
                .Where(a => a.Media == mediaType);

            int count = await query.CountAsync();
            if (count == 0) {
                throw new InvalidOperationException("Album not found.");
            }

            Random rdm = new Random();
            return await query.Skip(rdm.Next(0, count)).Take(1).FirstAsync();
        }
    }
}

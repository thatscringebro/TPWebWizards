using Microsoft.EntityFrameworkCore;
using WizardRecords.Core;
using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultAlbumRepository : IAlbumRepository {
        private readonly WizRecDbContext _context;

        private readonly Random _random = new Random();

        public DefaultAlbumRepository(WizRecDbContext context) {
            _context = context;
        }
        public async Task<IEnumerable<Album>> GetAllAlbumsAsync() => await _context.Albums.ToListAsync();

        public async Task<IEnumerable<Album>> GetAlbumsByArtistIdAsync(Guid artistId) {
            return await _context.Albums.Where(a => a.ArtistId == artistId).ToListAsync();
        }

        public async Task<IEnumerable<Album>> GetAlbumsByLabelIdAsync(Guid labelId) {
            return await _context.Albums.Where(a => a.ArtistId == labelId).ToListAsync();
        }

        public async Task<IEnumerable<Album>> GetAlbumsByGenreAsync(AlbumGenre albumGenre) {
            return await _context.Albums.Where(a => a.AlbumGenre == albumGenre).ToListAsync();
        }

        public async Task<Album> GetAlbumsByMediaTypeAsync(MediaType albumMediaType) {
           
            var albums = await _context.Albums.Where(a => a.Media == albumMediaType).Select(a => a.Id).ToListAsync();

            return await _context.Albums.FindAsync(albums);
        }

        public async Task<IEnumerable<Album>> GetAlbumsByCategoryAsync(Category albumCategory) {
            return await _context.Albums.Where(a => a.Category == albumCategory).ToListAsync();
        }

        public async Task<Album?> GetAlbumByIdAsync(Guid albumId) {
            return await _context.Albums.FirstOrDefaultAsync(a => a.Id == albumId);
        }

        public async Task<Album?> GetAlbumByTitleAsync(string title) {
            return await _context.Albums.FirstOrDefaultAsync(a => a.Title == title);
        }

        public async Task<Album?> GetRandomAlbumAsync(MediaType mediaType) {
            var albumIds = await _context.Albums
                .Where(a => a.Media == mediaType)
                .Select(a => a.Id)
                .ToListAsync();

            var randomAlbumId = albumIds[_random.Next(albumIds.Count)];

            return await _context.Albums.FindAsync(randomAlbumId);
        }
    }
}

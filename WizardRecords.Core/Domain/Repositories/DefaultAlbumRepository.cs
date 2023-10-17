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

        public async Task<IEnumerable<Album>> GetAlbumsByMediaTypeAsync(MediaType mediaType)
        {
            return await _context.Albums.Where(a => a.Media == mediaType).ToListAsync();
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

        public async Task<IEnumerable<Album>> GetSearchAlbumsAsync(string query) {
            return await _context.Albums.Include(x => x.Artist)
                                        .Include(x => x.Label)
                                        .Where(x => x.Title.ToLower().Contains(query.ToLower()) || x.Artist.ArtistName.ToLower().Contains(query.ToLower()) || x.Label.LabelName.ToLower().Contains(query.ToLower()))
                                        .ToListAsync();
        }

        public async Task<Album?> GetRandomAlbumAsync(MediaType mediaType) {
            var albumIds = await _context.Albums
                .Where(a => a.Media == mediaType)
                .Select(a => a.Id)
                .ToListAsync();

            var randomAlbumId = albumIds[_random.Next(albumIds.Count)];

            return await _context.Albums.FindAsync(randomAlbumId);
        }

        public async Task<Album?> DeleteAlbumAsync(string title)
        {
            var album = await _context.Albums.Where(a => a.Title == title).FirstOrDefaultAsync();
            if (album != null)
            {
                _context.Albums.Remove(album);
                await _context.SaveChangesAsync(); 
                return album;
            }
            else
            {
                return null;
            }
        }
        public void CreateAlbumAsync(Album album)
        {
            try
            {
                
                _context.Albums.Add(album);
                _context.SaveChangesAsync();

            }
            catch (Exception)
            {
            
            }

        }
        public async Task<Album?> UpdateAlbumAsync(Guid albumId, Album updateData)
        {
            try
            {
                var album = await _context.Albums.FirstOrDefaultAsync(a => a.Id == albumId);

                if (album != null)
                {
                    // Update the album properties with the new values from the AlbumUpdate record.
                    album.Title = updateData.Title;
                    album.StockQuantity = updateData.StockQuantity;
                    album.Price = updateData.Price;
                    album.ImageFilePath = updateData.ImageFilePath;
                    album.Comments = updateData.Comments;

                    // Save the changes to the database.
                    await _context.SaveChangesAsync();

                    return album; // Return the updated album.
                }

                return null; // Return null if the album with the specified ID was not found.
            }
            catch (Exception)
            {
                // Handle any exceptions that may occur during the database operation.
                return null;
            }
        }
    }
}

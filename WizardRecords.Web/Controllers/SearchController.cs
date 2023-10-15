using Microsoft.AspNetCore.Mvc;
using WizardRecords.Dtos;
using WizardRecords.Repositories;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class SearchController : ControllerBase {
        private readonly IAlbumRepository _albumRepository;

        public SearchController(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AlbumDetails>>> Search(string query)
        {
            try
            {
                // Simulate a search by filtering products based on the query parameter
                var searchResults = (await _albumRepository.GetAllAlbumsAsync())
                .Select(a => new AlbumDetails(
                a.Id,
                a.ArtistId,
                a.LabelId,
                a.Title,
                a.StockQuantity,
                a.Price,
                a.Category,
                a.Media,
                a.Format,
                a.AlbumGenre,
                a.MediaGrade,
                a.SleeveGrade,
                a.CatalogNumber,
                a.MatrixNumber,
                a.Comments,
                a.ImageFilePath
            ))
                .Where(x => x.Title.Contains(query))
                .ToList();

                foreach(AlbumDetails ad in searchResults) {
                    Console.WriteLine($"{ad.AlbumId}, {ad.Title}");
                }

                return Ok(searchResults);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}

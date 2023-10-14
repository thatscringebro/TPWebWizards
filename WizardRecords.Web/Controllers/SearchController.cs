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
        public IActionResult Search(string query)
        {
            try
            {
                // Simulate a search by filtering products based on the query parameter
                var searchResults = _albumRepository.GetAllAlbums()
                .Select(a => new AlbumDetails(a.AlbumId, a.ArtistId, a.StockQuantity, a.Price, a.Title!, (Core.Data.Constants.MediaType)a.Media!, a.ImageFilePath!))
                .Where(x => x.Title.Contains(query));

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
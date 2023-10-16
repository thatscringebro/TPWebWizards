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
        public async Task<ActionResult<IEnumerable<AlbumDto>>> Search(string query)
        {
            try
            {
                var searchResults = (await _albumRepository.GetSearchAlbumsAsync(query))
                                    .Select(a => new AlbumDto(
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
                                    .ToList();

                return Ok(searchResults);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred: {ex.Message}");
            }
        }
    }
}

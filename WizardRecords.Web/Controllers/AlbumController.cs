using Microsoft.AspNetCore.Mvc;
using WizardRecords.Dtos;
using WizardRecords.Repositories;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase {
        private readonly IAlbumRepository _albumRepository;

        public AlbumController(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AlbumDetails>>> GetAllAlbums() {
            var albums = (await _albumRepository.GetAllAlbumsAsync()).Select(a => new AlbumDetails(a.AlbumId, a.ArtistId, a.LabelId, a.Title, a.StockQuantity, a.Price, (Core.Data.Constants.Category)a.Category!, (Core.Data.Constants.MediaType)a.Media!, (Core.Data.Constants.FormatType)a.Format!, (Core.Data.Constants.AlbumGenre)a.AlbumGenre!, (Core.Data.Constants.Grade)a.MediaGrade!, (Core.Data.Constants.Grade)a.SleeveGrade!, a.CatalogNumber!, a.MatrixNumber!, a.Comments!, a.ImageFilePath!));
            return Ok(albums);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AlbumDetails>> GetAlbumById(Guid id) {
            try {
                var album = await _albumRepository.GetAlbumByIdAsync(id);

                if (album != null) {
                    return Ok(new AlbumDetails(album.AlbumId, album.ArtistId, album.LabelId!, album.Title, album.StockQuantity, album.Price, (Core.Data.Constants.Category)album.Category!, (Core.Data.Constants.MediaType)album.Media!, (Core.Data.Constants.FormatType)album.Format!, (Core.Data.Constants.AlbumGenre)album.AlbumGenre!, (Core.Data.Constants.Grade)album.MediaGrade!, (Core.Data.Constants.Grade)album.SleeveGrade!, album.CatalogNumber!, album.MatrixNumber!, album.Comments!, album.ImageFilePath!));
                }
                else {
                    return NotFound($"Album with ID {id} not found.");
                }
            }
            catch (Exception ex) {
                return Problem($"An error occurred while fetching the album: {ex.Message}");
            }
        }

        [HttpGet("random")]
        public async Task<ActionResult<AlbumDetails>> GetRandomAlbum([FromQuery] MediaType? mediaType) {
            try {
                var album = await _albumRepository.GetRandomAlbumAsync(mediaType);
                if (album != null) {
                    return Ok(new AlbumDetails(album.AlbumId, album.ArtistId, album.LabelId, album.Title, album.StockQuantity, album.Price, (Core.Data.Constants.Category)album.Category!, (Core.Data.Constants.MediaType)album.Media!, (Core.Data.Constants.FormatType)album.Format!, (Core.Data.Constants.AlbumGenre)album.AlbumGenre!, (Core.Data.Constants.Grade)album.MediaGrade!, (Core.Data.Constants.Grade)album.SleeveGrade!, album.CatalogNumber!, album.MatrixNumber!, album.Comments!, album.ImageFilePath!));
                }
                else {
                    return NotFound("No albums found.");
                }
            }
            catch (Exception ex) {
                return Problem($"An error occurred while fetching a random album: {ex.Message}");
            }
        }
    }
}
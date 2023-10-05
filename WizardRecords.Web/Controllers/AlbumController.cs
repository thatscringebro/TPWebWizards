using Microsoft.AspNetCore.Mvc;
using WizardRecords.Dtos;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase {
        private readonly IAlbumRepository _albumRepository;

        public AlbumController(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<AlbumDetails>> GetAllAlbums() {
            var albums = _albumRepository.GetAllAlbums().Select(a => new AlbumDetails(a.AlbumId, a.ArtistId, a.StockQuantity, a.Price, a.Title!, (Core.Data.Constants.MediaType)a.Media!, a.ImageFilePath!));
            return Ok(albums);
        }

        [HttpGet("{id}")]
        public ActionResult<AlbumDetails> GetAlbumById(int id) {
            try {
                var album = _albumRepository.GetAlbumById(id);

                if (album != null) {
                    return Ok(new AlbumDetails(album.AlbumId, album.ArtistId, album.StockQuantity, album.Price, album.Title!, (Core.Data.Constants.MediaType)album.Media!, album.ImageFilePath!));
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
        public ActionResult<AlbumDetails> GetRandomAlbum() {
            try {
                var album = _albumRepository.GetRandomAlbum();
                if (album != null) {
                    return Ok(new AlbumDetails(album.AlbumId, album.ArtistId, album.StockQuantity, album.Price, album.Title!, (Core.Data.Constants.MediaType)album.Media!, album.ImageFilePath!));
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
using Microsoft.AspNetCore.Mvc;
using WizardRecords.Dtos;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class ArtistController : ControllerBase {
        private readonly IArtistRepository _artistRepository;

        public ArtistController(IArtistRepository artistRepository) {
            _artistRepository = artistRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArtistDto>>> GetAllArtists() {
            var artists = (await _artistRepository
                .GetAllArtistsAsync())
                .Select(a => new ArtistDto(
                    a.Id,
                    a.ArtistName,
                    a.ArtistGenre
                ));
            return Ok(artists);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ArtistDto>> GetAlbumById(Guid id) {
            try {
                var artist = await _artistRepository.GetArtistByIdAsync(id);
                return Ok(new ArtistDto(
                    artist!.Id,
                    artist.ArtistName,
                    artist.ArtistGenre
                ));
            }
            catch (Exception) {
                return Problem();
            }
        }
    }
}

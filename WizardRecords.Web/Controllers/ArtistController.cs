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
        public ActionResult<IEnumerable<ArtistDetails>> GetAllArtists() {
            var artists = _artistRepository.GetAllArtists().Select(a => new ArtistDetails(a.ArtistId, a.FirstName!, a.LastName!, a.DisplayName, (Core.Data.Constants.ArtistType)a.ArtistType!, (Core.Data.Constants.ArtistGenre)a.ArtistGenre!));
            return Ok(artists);
        }

        [HttpGet("{id}")]
        public ActionResult<ArtistDetails> GetAlbumById(Guid id) {
            try {
                var artist = _artistRepository.GetArtistById(id);
                return Ok(new ArtistDetails(artist.ArtistId, artist.FirstName!, artist.LastName!, artist.DisplayName, (Core.Data.Constants.ArtistType)artist.ArtistType!, (Core.Data.Constants.ArtistGenre)artist.ArtistGenre!));
            }
            catch (Exception) {
                return Problem();
            }
        }
    }
}

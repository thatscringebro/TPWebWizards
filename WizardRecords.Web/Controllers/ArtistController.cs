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
            var artists = _artistRepository.GetAllArtists().Select(a => new ArtistDetails(a.ArtistId, a.ArtistName, a.IsBandOrSingleName, (Core.Data.Constants.ArtistGenre)a.ArtistGenre!));
            return Ok(artists);
        }

        [HttpGet("{id}")]
        public ActionResult<ArtistDetails> GetAlbumById(int id) {
            try {
                var artist = _artistRepository.GetArtistById(id);
                return Ok(new ArtistDetails(artist.ArtistId, artist.ArtistName, artist.IsBandOrSingleName, (Core.Data.Constants.ArtistGenre)artist.ArtistGenre!));
            }
            catch (Exception) {
                return Problem();
            }
        }
    }
}

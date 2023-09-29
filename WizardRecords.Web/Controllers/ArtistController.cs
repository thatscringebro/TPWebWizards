using Microsoft.AspNetCore.Mvc;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers
{
    [ApiController]
    [Route("api/artist")]
    public class ArtistController : ControllerBase {
        private readonly IArtistRepository _artistRepository;

        public ArtistController(IArtistRepository artistRepository) {
            _artistRepository = artistRepository;
        }

        [HttpGet("all")]
        public IEnumerable<Artist> GetArtists() {
            return _artistRepository.GetAllArtists();
        }
    }
}

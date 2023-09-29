using Microsoft.AspNetCore.Mvc;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers
{
    [ApiController]
    [Route("api/album")]
    public class AlbumController : ControllerBase {
        private readonly IAlbumRepository _albumRepository;

        public AlbumController(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        [HttpGet("all")]
        public IEnumerable<Album> GetAlbums() {
            return _albumRepository.GetAllAlbums();
        }
    }
}

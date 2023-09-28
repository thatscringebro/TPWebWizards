using Microsoft.AspNetCore.Mvc;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlbumController : ControllerBase {
        private readonly IAlbumRepository _repository;

        public AlbumController(IAlbumRepository repository) {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Album> GetAlbums() {
            return _repository.GetAllAlbums();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers {
    [Route("wizard/[controller]")]
    [ApiController]
    public class AlbumController : ControllerBase {
        private readonly IAlbumRepository _repository;

        public AlbumController(IAlbumRepository repository) {
            _repository = repository;
        }
    }
}

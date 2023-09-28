using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Collections.Generic;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class ArtistController : ControllerBase {
        private readonly IArtistRepository _repository;

        public ArtistController(IArtistRepository repository) {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<Album> GetAlbumsByArtist(int artistId) {
            return _repository.GetAlbumsByArtist(artistId);
        }
    }
}

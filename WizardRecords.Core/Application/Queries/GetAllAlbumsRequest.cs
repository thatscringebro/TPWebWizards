using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllAlbumsRequest : IRequest<IEnumerable<Album>>;
    public class GetAllAlbumsHandler : IRequestHandler<GetAllAlbumsRequest, IEnumerable<Album>> {
        public readonly IAlbumRepository _repository;
        public GetAllAlbumsHandler(IAlbumRepository repository) {
            _repository = repository;
        }

        public Task<IEnumerable<Album>> Handle(GetAllAlbumsRequest request, CancellationToken cancellationToken) { 
            var albums = _repository.GetAllAlbums();
            return Task.FromResult(albums);
        }
    }
}

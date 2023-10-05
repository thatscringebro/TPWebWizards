using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllAlbumsRequest : IRequest<IEnumerable<Album>>;
    public class GetAllAlbumsHandler : IRequestHandler<GetAllAlbumsRequest, IEnumerable<Album>> {
        private readonly IAlbumRepository _repository;

        public GetAllAlbumsHandler(IAlbumRepository repository) {
            _repository = repository;
        }

        public Task<IEnumerable<Album>> Handle(GetAllAlbumsRequest request, CancellationToken cancellationToken) {
            return Task.FromResult<IEnumerable<Album>>(_repository.GetAllAlbums());
        }
    }
}
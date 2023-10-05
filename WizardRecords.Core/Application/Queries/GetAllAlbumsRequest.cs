using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllAlbumsRequest : IRequest<IEnumerable<Album>>;

    public class GetAllAlbumsHandler : IRequestHandler<GetAllAlbumsRequest, IEnumerable<Album>> {
        private readonly IAlbumRepository _albumRepository;

        public GetAllAlbumsHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public Task<IEnumerable<Album>> Handle(GetAllAlbumsRequest request, CancellationToken cancellationToken) {
            var albums = _albumRepository.GetAllAlbums();
            return Task.FromResult(albums);
        }
    }
}
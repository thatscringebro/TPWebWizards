using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAlbumByIdRequest(int albumId) : IRequest<Album>;

    public class GetAlbumByIdHandler : IRequestHandler<GetAlbumByIdRequest, Album> {
        private readonly IAlbumRepository _albumRepository;

        public GetAlbumByIdHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public Task<Album> Handle(GetAlbumByIdRequest request, CancellationToken cancellationToken) {
            var album = _albumRepository.GetAlbumById(request.albumId);
            return Task.FromResult(album);
        }
    }
}
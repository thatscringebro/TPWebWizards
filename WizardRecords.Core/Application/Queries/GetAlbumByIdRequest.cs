using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAlbumByIdRequest(Guid albumId) : IRequest<Album>;

    public class GetAlbumByIdHandler : IRequestHandler<GetAlbumByIdRequest, Album> {
        private readonly IAlbumRepository _albumRepository;

        public GetAlbumByIdHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public Task<Album> Handle(GetAlbumByIdRequest request, CancellationToken cancellationToken) {
            var albumById = _albumRepository.GetAlbumByIdAsync(request.albumId);
            if (albumById == null) {
                throw new InvalidOperationException($"No album found for id {request.albumId}");
            }
            return albumById;
        }
    }
}
using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetRandomAlbumRequest : IRequest<Album>;

    public class GetRandomAlbumHandler : IRequestHandler<GetRandomAlbumRequest, Album> {
        private readonly IAlbumRepository _albumRepository;

        public GetRandomAlbumHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public async Task<Album> Handle(GetRandomAlbumRequest request, CancellationToken cancellationToken) {
            var randomAlbum = await _albumRepository.GetRandomAlbumAsync();
            if (randomAlbum == null) {
                throw new InvalidOperationException("Album not found.");
            }
            return randomAlbum;
        }
    }
}

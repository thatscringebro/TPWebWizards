using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Application.Queries {
    public record GetRandomAlbumRequest(MediaType MediaType, Category Category) : IRequest<Album?>;

    public class GetRandomAlbumHandler : IRequestHandler<GetRandomAlbumRequest, Album?> {
        private readonly IAlbumRepository _albumRepository;

        public GetRandomAlbumHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public async Task<Album?> Handle(GetRandomAlbumRequest request, CancellationToken cancellationToken) {
            return await _albumRepository.GetRandomAlbumAsync(request.MediaType);
        }
    }
}
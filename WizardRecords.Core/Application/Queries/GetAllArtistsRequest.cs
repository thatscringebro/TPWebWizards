using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllArtistsRequest : IRequest<IEnumerable<Artist>>;

    public class GetAllArtistsHandler : IRequestHandler<GetAllArtistsRequest, IEnumerable<Artist>> {
        public readonly IArtistRepository _artistRepository;

        public GetAllArtistsHandler(IArtistRepository artistRepository) {
            _artistRepository = artistRepository;
        }

        public Task<IEnumerable<Artist>> Handle(GetAllArtistsRequest request, CancellationToken cancellationToken) {
            var artists = _artistRepository.GetAllArtists();
            return Task.FromResult(artists);
        }
    }
}

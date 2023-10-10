using MediatR;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllArtistsRequest : IRequest<IEnumerable<Artist>>;

    public class GetAllArtistsHandler : IRequestHandler<GetAllArtistsRequest, IEnumerable<Artist>> {
        private readonly IArtistRepository _artistRepository;

        public GetAllArtistsHandler(IArtistRepository artistRepository) {
            _artistRepository = artistRepository;
        }

        public async Task<IEnumerable<Artist>> Handle(GetAllArtistsRequest request, CancellationToken cancellationToken) {
            var allArtists = await _artistRepository.GetAllArtistsAsync();
            if (!allArtists.Any()) {
                throw new InvalidOperationException("No artists found.");
            }
            return allArtists;
        }
    }
}
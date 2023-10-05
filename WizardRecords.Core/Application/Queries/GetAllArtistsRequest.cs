using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllArtistsRequest : IRequest<IEnumerable<Artist>>;

    public class GetAllArtistsHandler : IRequestHandler<GetAllArtistsRequest, IEnumerable<Artist>> {
        public readonly IArtistRepository _repository;
        public GetAllArtistsHandler(IArtistRepository repository) {
            _repository = repository;
        }

        public Task<IEnumerable<Artist>> Handle(GetAllArtistsRequest request, CancellationToken cancellationToken) {
            var artists = _repository.GetAllArtists();
            return Task.FromResult(artists);
        }
    }
}

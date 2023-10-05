using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetArtistByIdRequest(int artistId) : IRequest<Artist>;
    
    public class GetArtistByIdHandler : IRequestHandler<GetArtistByIdRequest, Artist> {
        private readonly IArtistRepository _repository;

        public GetArtistByIdHandler(IArtistRepository repository) {
            _repository = repository;
        }

        public Task<Artist> Handle(GetArtistByIdRequest request, CancellationToken cancellationToken) {
            var artist = _repository.GetArtistById(request.artistId);
            return Task.FromResult(artist);
        }
    }
}

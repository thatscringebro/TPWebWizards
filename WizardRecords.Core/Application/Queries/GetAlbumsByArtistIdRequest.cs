using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAlbumsByArtistIdRequest(Guid artistId) : IRequest<IEnumerable<Album>>;
    public class GetAlbumsByArtistIdHandler : IRequestHandler<GetAlbumsByArtistIdRequest, IEnumerable<Album>> {
        private readonly IAlbumRepository _albumRepository;

        public GetAlbumsByArtistIdHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public async Task<IEnumerable<Album>> Handle(GetAlbumsByArtistIdRequest request, CancellationToken cancellationToken) {
            return await _albumRepository.GetAlbumsByArtistIdAsync(request.artistId);
        }
    }
}

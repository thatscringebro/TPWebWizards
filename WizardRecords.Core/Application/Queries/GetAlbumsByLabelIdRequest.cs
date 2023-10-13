using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAlbumsByLabelIdRequest(Guid labelId) : IRequest<IEnumerable<Album>>;
    public class GetAlbumsByLabelIdHandler : IRequestHandler<GetAlbumsByLabelIdRequest, IEnumerable<Album>> {
        private readonly IAlbumRepository _albumRepository;

        public GetAlbumsByLabelIdHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public async Task<IEnumerable<Album>> Handle(GetAlbumsByLabelIdRequest request, CancellationToken cancellationToken) {
            return await _albumRepository.GetAlbumsByLabelIdAsync(request.labelId);
        }
    }
}

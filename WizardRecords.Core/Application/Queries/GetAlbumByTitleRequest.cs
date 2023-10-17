using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries
{
    public record GetAlbumByTitleRequest(string Title) : IRequest<Album?>;
    public class GetAlbumByTitleHandler : IRequestHandler<GetAlbumByTitleRequest, Album?>
    {
        private readonly IAlbumRepository _albumRepository;
        public GetAlbumByTitleHandler(IAlbumRepository albumRepository)
        {
            _albumRepository = albumRepository;
        }

        public async Task<Album?> Handle(GetAlbumByTitleRequest request, CancellationToken cancellationToken)
        {
            return await _albumRepository.GetAlbumByTitleAsync(request.Title);
        }
    }
    
    
}

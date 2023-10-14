using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Application.Queries
{
    public record GetAlbumsByMediaTypeRequest(MediaType MediaType) : IRequest<Album?>;

    public class GetAlbumsByMediaTypeHandler : IRequestHandler<GetAlbumsByMediaTypeRequest, Album?>
    {
        private readonly IAlbumRepository _albumRepository;

        public GetAlbumsByMediaTypeHandler(IAlbumRepository albumRepository)
        {
            _albumRepository = albumRepository;
        }

        public async Task<Album?> Handle(GetAlbumsByMediaTypeRequest request, CancellationToken cancellationToken)
        {
            return await _albumRepository.GetRandomAlbumAsync(request.MediaType);
        }
    }
}

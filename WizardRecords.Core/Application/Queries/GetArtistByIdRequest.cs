﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetArtistByIdRequest(Guid artistId) : IRequest<Artist?>;
    
    public class GetArtistByIdHandler : IRequestHandler<GetArtistByIdRequest, Artist?> {
        private readonly IArtistRepository _repository;

        public GetArtistByIdHandler(IArtistRepository repository) {
            _repository = repository;
        }

        public async Task<Artist?> Handle(GetArtistByIdRequest request, CancellationToken cancellationToken) {
            return await _repository.GetArtistByIdAsync(request.artistId);
        }
    }
}

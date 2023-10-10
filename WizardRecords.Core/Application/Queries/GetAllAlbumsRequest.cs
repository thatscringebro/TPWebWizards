﻿using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllAlbumsRequest : IRequest<IEnumerable<Album>>;

    public class GetAllAlbumsHandler : IRequestHandler<GetAllAlbumsRequest, IEnumerable<Album>> {
        private readonly IAlbumRepository _albumRepository;

        public GetAllAlbumsHandler(IAlbumRepository albumRepository) {
            _albumRepository = albumRepository;
        }

        public async Task<IEnumerable<Album>> Handle(GetAllAlbumsRequest request, CancellationToken cancellationToken) {
            var allAlbums = await _albumRepository.GetAllAlbumsAsync();
            if (!allAlbums.Any()) {
                throw new InvalidOperationException("No albums found.");
            }
            return allAlbums;
        }
    }
}
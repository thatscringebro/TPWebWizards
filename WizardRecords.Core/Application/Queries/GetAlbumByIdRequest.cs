using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAlbumByIdRequest(int albumId) : IRequest<Album>;

    public class GetAlbumByIdHandler : IRequestHandler<GetAlbumByIdRequest, Album> {
        private readonly IAlbumRepository _repository;

        public GetAlbumByIdHandler(IAlbumRepository repository) {
            _repository = repository;
        }

        public Task<Album> Handle(GetAlbumByIdRequest request, CancellationToken cancellationToken) {
            var album = _repository.GetAlbumById(request.albumId);
            return Task.FromResult(album);
        }
    }
}
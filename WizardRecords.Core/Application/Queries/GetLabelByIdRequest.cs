using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetLabelByIdRequest(Guid labelId) : IRequest<Label?>;

    public class GetLabelByIdHandler : IRequestHandler<GetLabelByIdRequest, Label?> {
        private readonly ILabelRepository _labelRepository;

        public GetLabelByIdHandler(ILabelRepository labelRepository) {
            _labelRepository = labelRepository;
        }

        public Task<Label?> Handle(GetLabelByIdRequest request, CancellationToken cancellationToken) {
            var label = _labelRepository.GetLabelById(request.labelId);
            return Task.FromResult(label);
        }
    }
}

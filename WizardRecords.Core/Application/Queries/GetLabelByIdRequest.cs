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

        public async Task<Label?> Handle(GetLabelByIdRequest request, CancellationToken cancellationToken) {
            return await _labelRepository.GetLabelByIdAsync(request.labelId);
        }
    }
}

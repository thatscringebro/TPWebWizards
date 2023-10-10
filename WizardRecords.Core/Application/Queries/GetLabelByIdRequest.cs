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
            var labelById = await _labelRepository.GetLabelByIdAsync(request.labelId);
            if (labelById == null) {
                throw new InvalidOperationException($"No label found for id {request.labelId}");
            }
            return labelById;
        }
    }
}

using MediatR;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Core.Application.Queries {
    public record GetAllLabelsRequest : IRequest<IEnumerable<Label>>;

    public class GetAllLabelsHandler : IRequestHandler<GetAllLabelsRequest, IEnumerable<Label>> {
        public readonly ILabelRepository _labelRepository;

        public GetAllLabelsHandler(ILabelRepository labelRepository) {
            _labelRepository = labelRepository;
        }

        public async Task<IEnumerable<Label>> Handle(GetAllLabelsRequest request, CancellationToken cancellationToken) {
            return await _labelRepository.GetAllLabelsAsync();
        }
    }
}

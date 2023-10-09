using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Repositories {
    public class DefaultLabelRepository : ILabelRepository {
        private readonly List<Label> _labels = new List<Label>();

        public IEnumerable<Label> GetAllLabels() => _labels;

        public Label? GetLabelById(Guid labelId) {
            var label = _labels?.Find(l => l.LabelId == labelId);
            return label;
        }
    }
}

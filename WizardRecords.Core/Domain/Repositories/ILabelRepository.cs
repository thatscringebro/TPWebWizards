using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface ILabelRepository {
        IEnumerable<Label> GetAllLabels();
        Label? GetLabelById(Guid labelId);
    }
}

using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface ILabelRepository {
        Task<IEnumerable<Label>> GetAllLabelsAsync();
        Task<Label?> GetLabelByIdAsync(Guid labelId);
    }
}

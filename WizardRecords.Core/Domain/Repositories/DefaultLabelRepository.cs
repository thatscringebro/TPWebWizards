using Microsoft.EntityFrameworkCore;
using WizardRecords.Core;
using WizardRecords.Core.Domain.Entities;
using WizardRecords.Repositories;

namespace WizardRecords.Repositories {
    public class DefaultLabelRepository : ILabelRepository {
        private readonly WizRecDbContext _context;

        public DefaultLabelRepository(WizRecDbContext context) {
            _context = context;
        }

        public async Task<IEnumerable<Label>> GetAllLabelsAsync() => await _context.Labels.ToListAsync();

        public async Task<Label?> GetLabelByIdAsync(Guid labelId) {
            return await _context.Labels.FirstOrDefaultAsync(l => l.Id == labelId);
        }
    }
}

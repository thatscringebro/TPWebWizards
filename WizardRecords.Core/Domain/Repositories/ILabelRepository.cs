using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WizardRecords.Core.Domain.Entities;

namespace WizardRecords.Repositories {
    public interface ILabelRepository {
        IEnumerable<Label> GetAllLabels();
        Label GetLabelById(Guid labelId);
        string GetCountryByLabelId(Guid labelId);
    }
}

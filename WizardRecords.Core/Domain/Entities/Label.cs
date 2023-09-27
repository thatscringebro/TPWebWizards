using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WizardRecords.Core.Domain.Entities {
    public class Label {
        public int LabelId { get; set; }
        public string? Name { get; set; } // TODO: Remove nullability
    }
}

namespace WizardRecords.Core.Domain.Entities {
    public class Label {
        public Guid Id { get; set; }
        public Guid LabelId { get; set; }
        public string? Name { get; set; } // TODO: Remove nullability
        public string? Country { get; set; }
    }
}

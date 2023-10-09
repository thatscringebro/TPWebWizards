namespace WizardRecords.Core.Domain.Entities {
    public class Label {
        public Guid Id { get; set; }
        public Guid LabelId { get; set; }
        public string Name { get; set; } = "Unknown";
        public string Country { get; set; } = "Unknown";

        internal Label() {}

        public Label(Guid labelId, string name, string country) {
            LabelId = labelId;
            Name = name;
            Country = country;
        }
    }
}

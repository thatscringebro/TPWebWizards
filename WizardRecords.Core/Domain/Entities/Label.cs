namespace WizardRecords.Core.Domain.Entities {
    public class Label {
        public Guid Id { get; set; }
        public string LabelName { get; set; } = "-";
        public string Country { get; set; } = "-";

        internal Label() {}

        public Label(Guid labelId, string name, string country) {
            Id = labelId;
            LabelName = name;
            Country = country;
        }
    }
}

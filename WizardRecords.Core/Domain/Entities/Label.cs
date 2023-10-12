namespace WizardRecords.Core.Domain.Entities {
    public class Label {
        public Guid Id { get; set; }

        // Navigation properties
        public ICollection<Album> Albums { get; set; } = new List<Album>();

        // Properties
        public string LabelName { get; set; } = "-";
        public string Country { get; set; } = "-";

        // Constructors
        internal Label() {}

        public Label(Guid labelId, string name, string country) {
            Id = labelId;
            LabelName = name;
            Country = country;
        }
    }
}

using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public int ArtistId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? FirstName { get; set; }
        public ArtistGenre? ArtistGenre { get; set; } // The "section" of the artist in the store
        public bool IsBandOrSingleName { get; set; }
        public string ArtistName {
            get {
                if (IsBandOrSingleName) {
                    return Name;
                }
                return FirstName != null ? $"{FirstName} {Name}" : Name;
            }
        }

        internal Artist() { }

        public Artist(int artistId, string? firstName, string name, bool isBandOrSingleName, ArtistGenre artistGenre) {
            ArtistId = artistId;
            FirstName = firstName;
            Name = name ?? throw new ArgumentNullException(nameof(name));
            IsBandOrSingleName = isBandOrSingleName;
            ArtistGenre = artistGenre;
        }
    }
}

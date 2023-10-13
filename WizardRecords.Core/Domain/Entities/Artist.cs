using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public Guid Id { get; set; }

        // Navigation properties
        public ICollection<Album> Albums { get; set; } = new List<Album>();

        // Properties
        public string ArtistName { get; set; } = "-";
        public ArtistGenre ArtistGenre { get; set; } = ArtistGenre.UNDETERMINED;

        // Constructors
        internal Artist() { }

        public Artist(Guid artistId, string artistName, ArtistGenre artistGenre) {
            Id = artistId;
            ArtistName = artistName;
            ArtistGenre = artistGenre;
        }
    }
}

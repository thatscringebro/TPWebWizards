using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public Guid Id { get; set; }
        public string LastName { get; set; } = "";
        public string FirstName { get; set; } = "";
        public string DisplayName { get; set; } = "";
        public ArtistType ArtistType { get; set; } = ArtistType.UNDETERMINED;
        public ArtistGenre ArtistGenre { get; set; } = ArtistGenre.UNDETERMINED;

        internal Artist() { }

        public Artist(Guid artistId, string firstName, string lastName, string displayName, ArtistType artistType, ArtistGenre artistGenre) {
            Id = artistId;
            FirstName = firstName;
            LastName = lastName;
            DisplayName = displayName;
            ArtistType = artistType;
            ArtistGenre = artistGenre;
        }
    }
}

using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public Guid Id { get; set; }
        public Guid ArtistId { get; set; }
        public string? LastName { get; set; } = string.Empty;
        public string? FirstName { get; set; } 
        public string? DisplayName { get; set; }
        public ArtistType? ArtistType { get; set; }
        public ArtistGenre? ArtistGenre { get; set; } 

        internal Artist() { }

        public Artist(Guid artistId, string? firstName, string? lastName, string? displayName, ArtistType artistType, ArtistGenre artistGenre) {
            ArtistId = artistId;
            FirstName = firstName;
            LastName = lastName;
            DisplayName = displayName;
            ArtistType = artistType;
            ArtistGenre = artistGenre;
        }
    }
}

using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public int ArtistId { get; set; }
        public string Name { get; set; } = string.Empty; // Serviront plus pour l'entré de données
        public string? FirstName { get; set; } // Serviront plus pour l'entré de données
        public ArtistGenre? ArtistGenre { get; set; } // The "section" of the artist in the store
        public bool IsBandOrSingleName { get; set; } // Serviront plus pour l'entré de données
        public string? ArtistName { get; set; }

        internal Artist() { }

        public Artist(int artistId, string artistName, bool isBandOrSingleName, ArtistGenre artistGenre) {
            ArtistId = artistId;
            ArtistName = artistName;
            IsBandOrSingleName = isBandOrSingleName;
            ArtistGenre = artistGenre;
        }
    }
}

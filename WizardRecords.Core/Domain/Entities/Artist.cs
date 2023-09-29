using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public int ArtistId { get; set; }
        public string? Name { get; set; }
        public string? FirstName { get; set; }
        public ArtistGenre? ArtistGenre { get; set; }
        public string ArtistName {
            get {
                if (FirstName != null) {
                    return $"{Name}, {FirstName}";
                }
                else if (FirstName == null) {
                    return $"{Name}";
                }
                else {
                    throw new Exception("Invalid artist name");
                }
            }
        }

        internal Artist() { }

        public Artist(int artistId, string artistName, ArtistGenre artistGenre) {
            ArtistId = artistId;
            Name = artistName;
            ArtistGenre = artistGenre;
        }
    }
}

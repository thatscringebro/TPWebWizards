using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Artist {
        public int ArtistId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? BandName { get; set; }
        public ArtistType ArtistType { get; set; }
        public ArtistGenre? Section { get; set; }
        public string ArtistName {
            get {
                if (ArtistType == ArtistType.FULL_NAME) {
                    return $"{LastName}, {FirstName}";
                }
                else if (ArtistType == ArtistType.SINGLE_NAME) {
                    return $"{BandName}";
                }
                else {
                    throw new Exception("Invalid artist type");
                }
            }
        }

        internal Artist() { }

        public Artist(int artistId, string artistName, ArtistType artistType, ArtistGenre section) {
            ArtistId = artistId;
            ArtistType = artistType;
            Section = section;
            if (artistType == ArtistType.FULL_NAME) {
                var names = artistName.Split(',');
                LastName = names[0].Trim();
                FirstName = names[1].Trim();
            }
            else if (artistType == ArtistType.SINGLE_NAME) {
                BandName = artistName;
            }
            else {
                throw new Exception("Invalid artist type");
            }
        }
    }
}

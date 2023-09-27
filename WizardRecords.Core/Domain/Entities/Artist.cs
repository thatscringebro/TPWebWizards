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
        public string BandName { get; set; }
        public ArtistType Type { get; set; }
        public ArtistGenre Section { get; set; }
        public string ArtistName {
            get {
                if (Type == ArtistType.SOLO) {
                    return $"{LastName}, {FirstName}";
                }
                else if (Type == ArtistType.BAND) {
                    return $"{BandName}";
                }
                else {
                    throw new Exception("Invalid artist type");
                }
            }
        }

    }
}

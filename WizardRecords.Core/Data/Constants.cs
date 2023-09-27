using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WizardRecords.Core.Data {
    public class Constants {
        public enum ArtistType {
            SINGLE_NAME,
            FULL_NAME
        }

        public enum ArtistGenre {
            ROCK,
            POP,
            JAZZ,
            HIPHOP,
            ALTERNATIVE,
            CLASSICAL,
            METAL,
            PUNK,
            BLUES,
            WORLD,
            FOLK,
            COUNTRY,
            SOUL,
            FUNK,
            ELECTRONICA,
            SOUNDTRACK
        }

        public enum MediaType {
            VINYL,
            CD
        }

        public enum Category {
            NEW,
            USED
        }

        public enum AlbumGenre {
            ROCK,
            POP,
            JAZZ,
            HIPHOP,
            CLASSICAL,
            METAL,
            PUNK,
            BLUES,
            WORLD,
            COUNTRY,
            SOUL,
            FUNK,
            ELECTRONICA,
            SOUNDTRACK,
            HARD,
            FUSION,
            PROG,
            ALTERNATIVE,
            PSYCH,
            GARAGE,
            ROCKABILLY,
            EXPERIMENTAL,
            INSTRUMENTAL,
            INDUSTRIAL,
            KITSCH,
            REGGAE,
            NEWWAVE,
            NEWAGE,
            OPERA,
            HARDCORE,
            HOUSE,
            DANCE,
            AMBIENT,
            VARIETY,
            FRANCOPHONE,
            HISTORICAL,
            MUSICAL,
            DISCO,
            COMEDY,
            SOUNDEFFECTS,
            KIDS,
            CHRISTMAS
        }

        public enum FormatType {
            RPM_33,
            RPM_45,
            RPM_78,
            LP,
            EP,
            SINGLE,
            DOUBLE,
            FLEXIDISC,
            PICTUREDISC,
            SHELLAC,
            DIGIPAK,
            INCH_12,
            INCH_10,
            INCH_7,
            INCH_5,
            INCH_3
        }

        public enum Grade {
            M,
            NM,
            VG_PLUS,
            VG,
            G_PLUS,
            G,
            F,
            P
        }
    }
}

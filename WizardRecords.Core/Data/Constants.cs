namespace WizardRecords.Core.Data {
    public class Constants {
        public enum MediaType {
            VINYL,
            CD
        }

        public enum Category {
            NEW,
            USED
        }

        // Représente les section de la boutique, c'est à dire les genres principaux
        public enum ArtistGenre {
            ROCK,
            POP,
            JAZZ,
            HIPHOP,
            ALTERNATIVE,
            CLASSICAL,
            FRANCOPHONE,
            METAL,
            PUNK,
            BLUES,
            WORLD,
            FOLK,
            COUNTRY,
            SOUL,
            FUNK,
            ELECTRONICA,
            SOUNDTRACK,
            UNDETERMINED // Remplace "null"
        }

        // Représente le genre de musique de l'album (un artiste peut avoir plusieurs genres selon l'album)
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
            MODAL,
            FREEJAZZ,
            INDIE,
            POSTBOP,
            ALTERNATIVE,
            MINIMALIST,
            PSYCH,
            HARDROCK,
            FOLK,
            RAP,
            GARAGE,
            VAPORWAVE,
            ROCKABILLY,
            EXPERIMENTAL,
            INSTRUMENTAL,
            INDUSTRIAL,
            SYNTHWAVE,
            KITSCH,
            REGGAE,
            NEWWAVE,
            DOWNTEMPO,
            ACOUSTIC,
            NEWAGE,
            OPERA,
            STONER,
            DOOM,
            IDM,
            TRIPHOP,
            DEATHCORE,
            DEATHMETAL,
            METALCORE,
            HARDCORE,
            MODERN,
            HOUSE,
            BAROQUE,
            ROMANTIC,
            AFROBEAT,
            DANCE,
            NOISE,
            AMBIENT,
            VARIETY,
            GRUNGE,
            FRANCOPHONE,
            HISTORICAL,
            MUSICAL,
            DISCO,
            COMEDY,
            SOUNDEFFECTS,
            KIDS,
            CHRISTMAS
            // Ajouter des genres ici au besoin
        }

        // Représente des précisions sur le format de l'album (vinyl 7", 12"?)
        public enum FormatType {
            RPM_33,
            RPM_45,
            RPM_78,
            LP,
            EP,
            ALBUM,
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
            INCH_3,
            UNDETERMINED // Remplace "null"
        }

        // Sert à donner une note à l'état de l'album et de la pochette (USAGÉ SEULEMENT)
        public enum Grade {
            M,
            NM,
            VG_PLUS,
            VG,
            G_PLUS,
            G,
            F,
            P,
            NONE // Remplace "null"
        }
    }
}

using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Album {
        public Guid Id { get; set; }

        // Foreign Keys
        public Guid ArtistId { get; set; }
        public Guid LabelId { get; set; }

        // Navigation Properties
        public Artist Artist { get; set; } = null!;
        public Label Label { get; set; } = null!;

        // Properties
        public string Title { get; set; } = "-";
        public int StockQuantity { get; set; }
        public float Price { get; set; }
        public Category Category { get; set; } // NEW ? USED
        public MediaType Media { get; set; } // CD ? LP 
        public FormatType Format { get; set; } // Précision sur le format de base de l'album (LP 12", LP 10", LP 7", CD, etc.)
        public AlbumGenre AlbumGenre { get; set; } // Précise le genre particulier de l'album
        public Grade MediaGrade { get; set; } = Grade.NONE; // Category == USED only!
        public Grade SleeveGrade { get; set; } = Grade.NONE; // Category == USED only!
        public string CatalogNumber { get; set; } = "-"; // Category == USED only!
        public string MatrixNumber { get; set; } = "-"; // Category == USED only!
        public string Comments { get; set; } = "-";
        public string ImageFilePath { get; set; } = "-";

        // Constructors
        internal Album() { }

        public Album(Guid albumId,
                     Guid artistId,
                     Guid labelId,
                     string title,
                     int stockQty,
                     float price,
                     Category category,
                     MediaType mediaType,
                     FormatType formatType,
                     AlbumGenre albumGenre,
                     Grade mediaGrade,
                     Grade sleeveGrade,
                     string catalogNumber,
                     string matrixNumber,
                     string comments,
                     string imgFilePath) {

            Id = albumId;
            ArtistId = artistId;
            LabelId = labelId;
            Title = title;
            StockQuantity = stockQty;
            Price = price;
            Category = category;
            Media = mediaType;
            Format = formatType;
            AlbumGenre = albumGenre;
            MediaGrade = mediaGrade;
            SleeveGrade = sleeveGrade;
            CatalogNumber = catalogNumber;
            MatrixNumber = matrixNumber;
            Comments = comments;
            ImageFilePath = imgFilePath;
        }

    }
}

using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Album {
        public Guid Id { get; set; }
        public Guid AlbumId { get; set; }
        public Guid ArtistId { get; set; }
        public Guid? LabelId { get; set; }
        public string Title { get; set; } = "";
        public int StockQuantity { get; set; }
        public float Price { get; set; }
        public Category? Category { get; set; } // NEW ? USED
        public MediaType? Media { get; set; } // CD ? LP 
        public FormatType? Format { get; set; } // Media type precisions (Single, EP, 7", 10", 12", etc.)
        public AlbumGenre? AlbumGenre { get; set; } // Album genre precisions (Fusion, Ambient, Reggae, etc.)
        public Grade? MediaGrade { get; set; } // Category == USED only!
        public Grade? SleeveGrade { get; set; } // Category == USED only!
        public string? CatalogNumber { get; set; } // TODO: Remove nullability
        public string? MatrixNumber { get; set; }
        public string? Comments { get; set; }
        public string ImageFilePath { get; set; } = "";

        internal Album() {}

        public Album(Guid albumId, 
                     Guid artistId, 
                     Guid? labelId, 
                     string title, 
                     int stockQty, 
                     float price, 
                     Category? category, 
                     MediaType? mediaType, 
                     FormatType? formatType, 
                     AlbumGenre? albumGenre, 
                     Grade? mediaGrade, 
                     Grade? sleeveGrade, 
                     string? catalogNumber, 
                     string? matrixNumber, 
                     string? comments, 
                     string imgFilePath) {
            AlbumId = albumId;
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

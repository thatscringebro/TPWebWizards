using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Album {
        public Guid AlbumId { get; set; }
        public string ArtistName { get; set; } = "-";
        public string Title { get; set; } = "-";
        public string LabelName { get; set; } = "-";
        public int Quantity { get; set; } = 0;
        public float Price { get; set; } = 0.0f;
        public bool IsUsed { get; set; } = false;
        public Media Media { get; set; } = Media.UNSPECIFIED;
        public ArtistGenre ArtistGenre { get; set; } = ArtistGenre.UNSPECIFIED;
        public AlbumGenre AlbumGenre { get; set; } = AlbumGenre.UNSPECIFIED;
        public Grade? MediaGrade { get; set; } = Grade.NONE; // USED only!
        public Grade? SleeveGrade { get; set; } = Grade.NONE; // USED only!
        public string? CatalogNumber { get; set; } = "-"; // USED only!
        public string? MatrixNumber { get; set; } = "-"; // USED only!
        public string? Comments { get; set; } = "-";
        public string ImageFilePath { get; set; } = "-"; // TODO: Find default image 

        // Constructors
        internal Album() { }

        public Album(
             Guid albumId,
             string artistName,
             string title,
             string labelName,
             int quantity,
             float price,
             bool isUsed,
             Media media,
             ArtistGenre artistGenre,
             AlbumGenre albumGenre,
             Grade? mediaCondition,
             Grade? sleeveCondition,
             string? catalogNumber,
             string? matrixNumber,
             string? comments,
             string imageFilePath) {
            AlbumId = albumId;
            ArtistName = artistName;
            Title = title;
            LabelName = labelName;
            Quantity = quantity;
            Price = price;
            IsUsed = isUsed;
            Media = media;
            ArtistGenre = artistGenre;
            AlbumGenre = albumGenre;
            MediaGrade = mediaCondition;
            SleeveGrade = sleeveCondition;
            CatalogNumber = catalogNumber;
            MatrixNumber = matrixNumber;
            Comments = comments;
            ImageFilePath = imageFilePath;
        }
    }
}

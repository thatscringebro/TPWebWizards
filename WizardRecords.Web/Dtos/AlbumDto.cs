using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Web.Dtos {
    public record AlbumDto(
         Guid AlbumId,
         string ArtistName,
         string Title,
         string LabelName,
         int Quantity,
         float Price,
         bool IsUsed,
         Media Media,
         ArtistGenre ArtistGenre,
         AlbumGenre AlbumGenre,
         Grade? MediaGrade,
         Grade? SleeveGrade,
         string? CatalogNumber,
         string? MatrixNumber,
         string? Comments,
         string ImageFilePath
     );

    // CRUD
    public record AlbumUpdate(
        string Title, 
        int Quantity, 
        float Price,
        string Comments, 
        string ImageFilePath
    );

    public record AlbumCreate(
        Guid AlbumId,
        string ArtistName,
        string Title,
        string LabelName,
        int Quantity,
        float Price,
        bool IsUsed,
        Media Media,
        ArtistGenre ArtistGenre,
        AlbumGenre AlbumGenre,
        Grade? MediaGrade,
        Grade? SleeveGrade,
        string? CatalogNumber,
        string? MatrixNumber,
        string? Comments,
        string ImageFilePath
    );

    public record AlbumDelete(string Title);
}

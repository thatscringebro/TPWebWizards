using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record AlbumDto(
        Guid AlbumId,
        Guid ArtistId,
        Guid LabelId,
        string Title,
        int StockQuantity,
        float Price,
        Category Category,
        MediaType Media,
        FormatType Format,
        AlbumGenre AlbumGenre,
        Grade? MediaGrade,
        Grade? SleeveGrade,
        string? CatalogNumber,
        string? MatrixNumber,
        string? Comments,
        string ImageFilePath
    );
}
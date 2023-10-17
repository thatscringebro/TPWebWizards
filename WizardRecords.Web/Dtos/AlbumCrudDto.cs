
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos
{
    public record AlbumUpdate(string Title, int StockQuantity, float Price, string ImageFilePath, string Comments);
    public record AlbumCreate(string Title, int StockQuantity, float Price, string ImageFilePath, string Comments);
    public record AlbumDelete(string Title);

}

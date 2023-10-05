using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record AlbumDetails(int AlbumId, int ArtistId, int Qty, float Price, string Title, MediaType MediaType, string ImgPath);
}

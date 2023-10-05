using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record ArtistDetails(int ArtistId, string ArtistName, bool IsBandOrSingleName, ArtistGenre ArtistGenre);
}

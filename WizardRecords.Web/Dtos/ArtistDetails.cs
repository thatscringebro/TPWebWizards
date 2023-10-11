using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record ArtistDetails (
        Guid ArtistId,
        string ArtistName,
        ArtistGenre ArtistGenre
    );
}

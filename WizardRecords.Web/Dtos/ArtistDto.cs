using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record ArtistDto(
        Guid ArtistId,
        string ArtistName,
        ArtistGenre ArtistGenre
    );
}

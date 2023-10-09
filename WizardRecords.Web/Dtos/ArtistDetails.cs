using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Dtos {
    public record ArtistDetails (
        Guid ArtistId,
        string? FirstName,
        string? LastName,
        string? DisplayName,
        ArtistType ArtistType,
        ArtistGenre ArtistGenre
    );
}

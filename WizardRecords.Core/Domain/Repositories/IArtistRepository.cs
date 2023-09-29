﻿using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public interface IArtistRepository {
        IEnumerable<Artist> GetAllArtists();
        IEnumerable<Artist> GetArtistsByGenre(ArtistGenre artistGenre);
        string? GetArtistNameByAlbumId(int albumId);
        string? GetArtistNameById(int artistId);
    }
}
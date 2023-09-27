using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly List<Artist> _artists = new() { 
            new Artist(1, "Essenger", ArtistType.SINGLE_NAME, ArtistGenre.ELECTRONICA),
            new Artist(2, "Aversions Crown", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(3, "Make Them Suffer", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(4, "Gojira", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(5, "Nirvana", ArtistType.SINGLE_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(6, "Norma Jean", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(7, "Red Hot Chili Peppers", ArtistType.SINGLE_NAME, ArtistGenre.FUNK),
            new Artist(8, "Metallica", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(9, "The Killers", ArtistType.SINGLE_NAME, ArtistGenre.ROCK),
            new Artist(10, "Emarosa", ArtistType.SINGLE_NAME, ArtistGenre.ROCK),
            new Artist(11, "Bad Omens", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(12, "Bring Me The Horizon", ArtistType.SINGLE_NAME, ArtistGenre.METAL),
            new Artist(13, "Fushitsusha", ArtistType.SINGLE_NAME, ArtistGenre.ROCK),
            new Artist(14, "Three Days Grace", ArtistType.SINGLE_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(15, "Fall Out Boy", ArtistType.SINGLE_NAME, ArtistGenre.PUNK)
        };

        public Artist GetArtistById(int albumId) {
            throw new NotImplementedException();
        }

        public Artist GetArtistByName(string title) {
            throw new NotImplementedException();
        }

        public IEnumerable<Album> GetAlbumsByArtist(int artistId) {
            throw new NotImplementedException();
        }
    }

}

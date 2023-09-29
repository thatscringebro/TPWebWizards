using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly List<Artist> _artists = new() { 
            // TODO: Transferer les données à la BD une fois l'implémentation faite
            new Artist(1, "Essenger", ArtistGenre.ELECTRONICA),
            new Artist(2, "Aversions Crown",  ArtistGenre.METAL),
            new Artist(3, "Make Them Suffer", ArtistGenre.METAL),
            new Artist(4, "Gojira", ArtistGenre.METAL),
            new Artist(5, "Nirvana", ArtistGenre.ALTERNATIVE),
            new Artist(6, "Norma Jean", ArtistGenre.METAL),
            new Artist(7, "Red Hot Chili Peppers", ArtistGenre.FUNK),
            new Artist(8, "Metallica", ArtistGenre.METAL),
            new Artist(9, "The Killers", ArtistGenre.ROCK),
            new Artist(10, "Emarosa", ArtistGenre.ROCK),
            new Artist(11, "Bad Omens", ArtistGenre.METAL),
            new Artist(12, "Bring Me The Horizon", ArtistGenre.METAL),
            new Artist(13, "Fushitsusha", ArtistGenre.ROCK),
            new Artist(14, "Three Days Grace", ArtistGenre.ALTERNATIVE),
            new Artist(15, "Fall Out Boy", ArtistGenre.PUNK),
            new Artist(16, "2 Live Crew", ArtistGenre.HIPHOP),
            new Artist(17, "Death Grips", ArtistGenre.HIPHOP),
            new Artist(18, "West, Kanye", ArtistGenre.HIPHOP),
            new Artist(19, "Drake, Nick", ArtistGenre.FOLK),
            new Artist(20, "Boards Of Canada", ArtistGenre.ELECTRONICA),
            new Artist(21, "Summer, Donna", ArtistGenre.POP),
            new Artist(22, "Bee Gees", ArtistGenre.POP),
            new Artist(23, "ABBA", ArtistGenre.POP),
            new Artist(24, "Jackson, Michael", ArtistGenre.POP),
            new Artist(25, "Numan, Gary", ArtistGenre.POP),
            new Artist(26, "Davis, Miles", ArtistGenre.JAZZ),
            new Artist(27, "Coltrane, John", ArtistGenre.JAZZ),
            new Artist(28, "Brötzmann, Peter", ArtistGenre.JAZZ),
            new Artist(29, "Mingus, Charles", ArtistGenre.JAZZ),
            new Artist(30, "The Art Ensemble Of Chicago", ArtistGenre.JAZZ),
            new Artist(31, "Naked City", ArtistGenre.JAZZ),
            new Artist(32, "The Beatles", ArtistGenre.ROCK),
            new Artist(33, "The Soundtrack Of Our Lives", ArtistGenre.ROCK),
            new Artist(34, "Young, La Monte", ArtistGenre.CLASSICAL),
            new Artist(35, "Soundtrack (OST)", ArtistGenre.SOUNDTRACK), // TODO: Déterminer quoi écrire pour le nom de l'artiste en cas de trame sonore
            new Artist(36, "Soundtrack (OST)", ArtistGenre.SOUNDTRACK),
            new Artist(37, "Soundtrack (OST)", ArtistGenre.SOUNDTRACK),
            new Artist(38, "Janacek, Leos", ArtistGenre.CLASSICAL),
            new Artist(39, "Scarlatti, Domenico", ArtistGenre.CLASSICAL),
            new Artist(40, "Beethoven, Ludwig Van", ArtistGenre.CLASSICAL),
            new Artist(41, "Bach, Johann Sebastian", ArtistGenre.CLASSICAL),
            new Artist(42, "Funkadelic", ArtistGenre.FUNK),
            new Artist(43, "The Budos Band", ArtistGenre.FUNK),
            new Artist(44, "Kuti, Fela", ArtistGenre.WORLD),
            new Artist(45, "Sumac, Yma", ArtistGenre.WORLD),
            new Artist(46, "Marley, Bob", ArtistGenre.WORLD),
            new Artist(47, "Pye Corner Audio", ArtistGenre.ELECTRONICA),
            new Artist(48, "Autechre", ArtistGenre.ELECTRONICA),
            new Artist(49, "Aphex Twin", ArtistGenre.ELECTRONICA),
            new Artist(50, "Howlin' Wolf", ArtistGenre.BLUES),
            new Artist(51, "Hooker, John Lee", ArtistGenre.BLUES),
            new Artist(52, "Johnson, Robert", ArtistGenre.BLUES),
            new Artist(53, "Leadbelly", ArtistGenre.BLUES),
            new Artist(54, "Stereolab", ArtistGenre.ALTERNATIVE),
            new Artist(55, "Pixies", ArtistGenre.ALTERNATIVE),
            new Artist(56, "Black Moth Super Rainbow", ArtistGenre.ALTERNATIVE),
            new Artist(57, "The Cure", ArtistGenre.ALTERNATIVE),
            new Artist(58, "Mayfield, Curtis", ArtistGenre.SOUL),
            new Artist(59, "Cooke, Sam", ArtistGenre.SOUL),
            new Artist(60, "Franklin, Aretha", ArtistGenre.SOUL),
            new Artist(61, "The Supremes", ArtistGenre.SOUL),
            new Artist(62, "Idles", ArtistGenre.PUNK),
            new Artist(63, "The Ramones", ArtistGenre.PUNK),
            new Artist(64, "Gas", ArtistGenre.ELECTRONICA),
            new Artist(65, "The Stooges", ArtistGenre.PUNK),
            new Artist(66, "King Gizzard And The Lizzard Wizard", ArtistGenre.ROCK),
            new Artist(67, "Thee Oh Sees", ArtistGenre.ROCK),
            new Artist(68, "The White Stripes", ArtistGenre.ROCK),
            new Artist(69, "Mitchell, Joni", ArtistGenre.FOLK),
            new Artist(70, "Comus", ArtistGenre.FOLK),
            new Artist(71, "The Incredible String Band", ArtistGenre.FOLK),
            new Artist(72, "Young, Neil", ArtistGenre.ROCK),
            new Artist(73, "Hancock, Herbie", ArtistGenre.JAZZ),
            new Artist(74, "Led Zeppelin", ArtistGenre.ROCK),
            new Artist(75, "Budgie", ArtistGenre.ROCK),
            new Artist(76, "The Doors", ArtistGenre.ROCK),
            new Artist(77, "Gambino, Childish", ArtistGenre.HIPHOP),
            new Artist(78, "Lamar, Kendrick", ArtistGenre.HIPHOP),
            new Artist(79, "Casino, Clams", ArtistGenre.HIPHOP),
            new Artist(80, "Melvins", ArtistGenre.PUNK),
            new Artist(81, "The Residents", ArtistGenre.PUNK),
            new Artist(82, "Les Rita Mitsouko", ArtistGenre.FRANCOPHONE),
            new Artist(83, "Gignac, Fernand", ArtistGenre.FRANCOPHONE),
            new Artist(84, "Dion, Celine", ArtistGenre.POP),
            new Artist(85, "Reno, Ginette", ArtistGenre.FRANCOPHONE),
            new Artist(86, "Leloup, Jean", ArtistGenre.FRANCOPHONE),
            new Artist(87, "Lapointe, Eric", ArtistGenre.FRANCOPHONE),
            new Artist(88, "Cash, Johnny", ArtistGenre.COUNTRY),
            new Artist(89, "Parton, Dolly", ArtistGenre.COUNTRY),
            new Artist(90, "The Rolling Stones", ArtistGenre.ROCK),
            new Artist(91, "Kristofferson, Kris", ArtistGenre.COUNTRY),
            new Artist(92, "Nelson, Willie", ArtistGenre.COUNTRY),
            new Artist(93, "Fahey, John", ArtistGenre.FOLK),
            new Artist(94, "Harris, Emmylou", ArtistGenre.COUNTRY),
            new Artist(95, "Eilish, Billie", ArtistGenre.POP),
            new Artist(96, "FKA Twigs", ArtistGenre.POP),
            new Artist(97, "Bjork", ArtistGenre.POP),
            new Artist(98, "Beyonce", ArtistGenre.POP),
            new Artist(99, "Lana Del Rey", ArtistGenre.POP),
            new Artist(100, "L\'Amour, Normand", ArtistGenre.FRANCOPHONE),
            new Artist(101, "Various", ArtistGenre.ELECTRONICA),
            new Artist(102, "Various", ArtistGenre.ALTERNATIVE),
            new Artist(103, "Various", ArtistGenre.WORLD)
        };

        public IEnumerable<Artist> GetAllArtists() => _artists;

        public IEnumerable<Artist> GetArtistsByGenre(ArtistGenre artistGenre) {
            var artistsByGenre = _artists.Where(a => a.ArtistGenre == artistGenre);
            if (artistsByGenre == null) {
                throw new ArgumentException($"No artists found for genre {artistGenre}");
            }
            return artistsByGenre;
        }

        public string GetArtistNameByAlbumId(int albumId) {
            var artist = _artists.FirstOrDefault(a => a.ArtistId == albumId);
            if (artist == null) {
                throw new ArgumentException($"Artist for album id {albumId} not found");
            }
            return artist.ArtistName;
        }

        public string GetArtistNameById(int artistId) {
            var artist = _artists.FirstOrDefault(a => a.ArtistId == artistId);
            if (artist == null) {
                throw new ArgumentException($"Artist with id {artistId} not found");
            }
            return artist.ArtistName;
        }
    }
}

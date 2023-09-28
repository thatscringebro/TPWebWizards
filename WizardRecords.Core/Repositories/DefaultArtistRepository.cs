using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly List<Artist> _artists = new() { 
            // TODO: Transferer les données à la BD une fois l'implémentation faite
            new Artist(1, "Essenger", ArtistType.BAND_NAME, ArtistGenre.ELECTRONICA),
            new Artist(2, "Aversions Crown", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(3, "Make Them Suffer", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(4, "Gojira", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(5, "Nirvana", ArtistType.BAND_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(6, "Norma Jean", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(7, "Red Hot Chili Peppers", ArtistType.BAND_NAME, ArtistGenre.FUNK),
            new Artist(8, "Metallica", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(9, "The Killers", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(10, "Emarosa", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(11, "Bad Omens", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(12, "Bring Me The Horizon", ArtistType.BAND_NAME, ArtistGenre.METAL),
            new Artist(13, "Fushitsusha", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(14, "Three Days Grace", ArtistType.BAND_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(15, "Fall Out Boy", ArtistType.BAND_NAME, ArtistGenre.PUNK),
            new Artist(16, "2 Live Crew", ArtistType.BAND_NAME, ArtistGenre.HIPHOP),
            new Artist(17, "Death Grips", ArtistType.BAND_NAME, ArtistGenre.HIPHOP),
            new Artist(18, "West, Kanye", ArtistType.PERSON_NAME, ArtistGenre.HIPHOP),
            new Artist(19, "Drake, Nick", ArtistType.PERSON_NAME, ArtistGenre.FOLK),
            new Artist(20, "Boards Of Canada", ArtistType.BAND_NAME, ArtistGenre.ELECTRONICA),
            new Artist(21, "Summer, Donna", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(22, "Bee Gees", ArtistType.BAND_NAME, ArtistGenre.POP),
            new Artist(23, "ABBA", ArtistType.BAND_NAME, ArtistGenre.POP),
            new Artist(24, "Jackson, Michael", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(25, "Numan, Gary", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(26, "Davis, Miles", ArtistType.PERSON_NAME, ArtistGenre.JAZZ),
            new Artist(27, "Coltrane, John", ArtistType.PERSON_NAME, ArtistGenre.JAZZ),
            new Artist(28, "Brötzmann, Peter", ArtistType.PERSON_NAME, ArtistGenre.JAZZ),
            new Artist(29, "Mingus, Charles", ArtistType.PERSON_NAME, ArtistGenre.JAZZ),
            new Artist(30, "The Art Ensemble Of Chicago", ArtistType.BAND_NAME, ArtistGenre.JAZZ),
            new Artist(31, "Naked City", ArtistType.BAND_NAME, ArtistGenre.JAZZ),
            new Artist(32, "The Beatles", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(33, "The Soundtrack Of Our Lives", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(34, "Young, La Monte", ArtistType.PERSON_NAME, ArtistGenre.CLASSICAL),
            new Artist(35, "Soundtrack (OST)", ArtistType.BAND_NAME, ArtistGenre.SOUNDTRACK), // TODO: Déterminer quoi écrire pour le nom de l'artiste en cas de trame sonore
            new Artist(36, "Soundtrack (OST)", ArtistType.BAND_NAME, ArtistGenre.SOUNDTRACK),
            new Artist(37, "Soundtrack (OST)", ArtistType.BAND_NAME, ArtistGenre.SOUNDTRACK),
            new Artist(38, "Janacek, Leos", ArtistType.PERSON_NAME, ArtistGenre.CLASSICAL),
            new Artist(39, "Scarlatti, Domenico", ArtistType.PERSON_NAME, ArtistGenre.CLASSICAL),
            new Artist(40, "Beethoven, Ludwig Van", ArtistType.PERSON_NAME, ArtistGenre.CLASSICAL),
            new Artist(41, "Bach, Johann Sebastian", ArtistType.PERSON_NAME, ArtistGenre.CLASSICAL),
            new Artist(42, "Funkadelic", ArtistType.BAND_NAME, ArtistGenre.FUNK),
            new Artist(43, "The Budos Band", ArtistType.BAND_NAME, ArtistGenre.FUNK),
            new Artist(44, "Kuti, Fela", ArtistType.PERSON_NAME, ArtistGenre.WORLD),
            new Artist(45, "Sumac, Yma", ArtistType.PERSON_NAME, ArtistGenre.WORLD),
            new Artist(46, "Marley, Bob", ArtistType.PERSON_NAME, ArtistGenre.WORLD),
            new Artist(47, "Pye Corner Audio", ArtistType.BAND_NAME, ArtistGenre.ELECTRONICA),
            new Artist(48, "Autechre", ArtistType.BAND_NAME, ArtistGenre.ELECTRONICA),
            new Artist(49, "Aphex Twin", ArtistType.BAND_NAME, ArtistGenre.ELECTRONICA),
            new Artist(50, "Howlin' Wolf", ArtistType.BAND_NAME, ArtistGenre.BLUES),
            new Artist(51, "Hooker, John Lee", ArtistType.PERSON_NAME, ArtistGenre.BLUES),
            new Artist(52, "Johnson, Robert", ArtistType.PERSON_NAME, ArtistGenre.BLUES),
            new Artist(53, "Leadbelly", ArtistType.BAND_NAME, ArtistGenre.BLUES),
            new Artist(54, "Stereolab", ArtistType.PERSON_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(55, "Pixies", ArtistType.BAND_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(56, "Black Moth Super Rainbow", ArtistType.BAND_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(57, "The Cure", ArtistType.BAND_NAME, ArtistGenre.ALTERNATIVE),
            new Artist(58, "Mayfield, Curtis", ArtistType.BAND_NAME, ArtistGenre.SOUL),
            new Artist(59, "Cooke, Sam", ArtistType.PERSON_NAME, ArtistGenre.SOUL),
            new Artist(60, "Franklin, Aretha", ArtistType.PERSON_NAME, ArtistGenre.SOUL),
            new Artist(61, "The Supremes", ArtistType.BAND_NAME, ArtistGenre.SOUL),
            new Artist(62, "Idles", ArtistType.BAND_NAME, ArtistGenre.PUNK),
            new Artist(63, "The Ramones", ArtistType.BAND_NAME, ArtistGenre.PUNK),
            new Artist(64, "Gas", ArtistType.BAND_NAME, ArtistGenre.ELECTRONICA),
            new Artist(65, "The Stooges", ArtistType.BAND_NAME, ArtistGenre.PUNK),
            new Artist(66, "King Gizzard And The Lizzard Wizard", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(67, "Thee Oh Sees", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(68, "The White Stripes", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(69, "Mitchell, Joni", ArtistType.PERSON_NAME, ArtistGenre.FOLK),
            new Artist(70, "Comus", ArtistType.PERSON_NAME, ArtistGenre.FOLK),
            new Artist(71, "The Incredible String Band", ArtistType.BAND_NAME, ArtistGenre.FOLK),
            new Artist(72, "Young, Neil", ArtistType.PERSON_NAME, ArtistGenre.ROCK),
            new Artist(73, "Hancock, Herbie", ArtistType.PERSON_NAME, ArtistGenre.JAZZ),
            new Artist(74, "Led Zeppelin", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(75, "Budgie", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(76, "The Doors", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(77, "Gambino, Childish", ArtistType.PERSON_NAME, ArtistGenre.HIPHOP),
            new Artist(78, "Lamar, Kendrick", ArtistType.PERSON_NAME, ArtistGenre.HIPHOP),
            new Artist(79, "Casino, Clams", ArtistType.PERSON_NAME, ArtistGenre.HIPHOP),
            new Artist(80, "Melvins", ArtistType.BAND_NAME, ArtistGenre.PUNK),
            new Artist(81, "The Residents", ArtistType.BAND_NAME, ArtistGenre.PUNK),
            new Artist(82, "Les Rita Mitsouko", ArtistType.BAND_NAME, ArtistGenre.FRANCOPHONE),
            new Artist(83, "Gignac, Fernand", ArtistType.PERSON_NAME, ArtistGenre.FRANCOPHONE),
            new Artist(84, "Dion, Celine", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(85, "Reno, Ginette", ArtistType.PERSON_NAME, ArtistGenre.FRANCOPHONE),
            new Artist(86, "Leloup, Jean", ArtistType.PERSON_NAME, ArtistGenre.FRANCOPHONE),
            new Artist(87, "Lapointe, Eric", ArtistType.PERSON_NAME, ArtistGenre.FRANCOPHONE),
            new Artist(88, "Cash, Johnny", ArtistType.PERSON_NAME, ArtistGenre.COUNTRY),
            new Artist(89, "Parton, Dolly", ArtistType.PERSON_NAME, ArtistGenre.COUNTRY),
            new Artist(90, "The Rolling Stones", ArtistType.BAND_NAME, ArtistGenre.ROCK),
            new Artist(91, "Kristofferson, Kris", ArtistType.PERSON_NAME, ArtistGenre.COUNTRY),
            new Artist(92, "Nelson, Willie", ArtistType.PERSON_NAME, ArtistGenre.COUNTRY),
            new Artist(93, "Fahey, John", ArtistType.PERSON_NAME, ArtistGenre.FOLK),
            new Artist(94, "Harris, Emmylou", ArtistType.PERSON_NAME, ArtistGenre.COUNTRY),
            new Artist(95, "Eilish, Billie", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(96, "FKA Twigs", ArtistType.BAND_NAME, ArtistGenre.POP),
            new Artist(97, "Bjork", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(98, "Beyonce", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(99, "Lana Del Rey", ArtistType.PERSON_NAME, ArtistGenre.POP),
            new Artist(100, "L\'Amour, Normand", ArtistType.PERSON_NAME, ArtistGenre.FRANCOPHONE),
            new Artist(101, "Various", ArtistType.COMPILATION, ArtistGenre.ELECTRONICA),
            new Artist(102, "Various", ArtistType.COMPILATION, ArtistGenre.ALTERNATIVE),
            new Artist(103, "Various", ArtistType.COMPILATION, ArtistGenre.WORLD),

        };

        public IEnumerable<Album> GetAlbumsByArtist(int artistId) {
            throw new NotImplementedException();
        }

        public Artist GetArtistById(int artistId) {
            var artist = _artists.FirstOrDefault(a => a.ArtistId == artistId);

            if (artist == null) {
                throw new Exception("Artist not found");
            }

            return artist;
        }

        public Artist GetArtistByName(string artistName) {
            var artist = _artists.FirstOrDefault(a => a.ArtistName == artistName);

            if (artist == null) {
                throw new Exception("Artist not found");
            }

            return artist;
        }

       
    }

}

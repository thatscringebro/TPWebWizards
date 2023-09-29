using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly List<Artist> _artists = new() { 
            // TODO: Transferer les données à la BD une fois l'implémentation faite
            new Artist(1, null, "Essenger", true, ArtistGenre.ELECTRONICA),
            new Artist(2, null, "Aversions Crown", true,  ArtistGenre.METAL),
            new Artist(3, null, "Make Them Suffer", true, ArtistGenre.METAL),
            new Artist(4, null, "Gojira", true, ArtistGenre.METAL),
            new Artist(5, null, "Nirvana", true, ArtistGenre.ALTERNATIVE),
            new Artist(6, null, "Norma Jean", true, ArtistGenre.METAL),
            new Artist(7, null, "Red Hot Chili Peppers", true, ArtistGenre.FUNK),
            new Artist(8, null, "Metallica", true, ArtistGenre.METAL),
            new Artist(9, null, "The Killers", true, ArtistGenre.ROCK),
            new Artist(10, null, "Emarosa", true, ArtistGenre.ROCK),
            new Artist(11, null, "Bad Omens", true, ArtistGenre.METAL),
            new Artist(12, null, "Bring Me The Horizon", true, ArtistGenre.METAL),
            new Artist(13, null, "Fushitsusha", true, ArtistGenre.ROCK),
            new Artist(14, null, "Three Days Grace", true, ArtistGenre.ALTERNATIVE),
            new Artist(15, null, "Fall Out Boy", true, ArtistGenre.PUNK),
            new Artist(16, null, "2 Live Crew", true, ArtistGenre.HIPHOP),
            new Artist(17, null, "Death Grips", true, ArtistGenre.HIPHOP),
            new Artist(18, "Kanye", "West", false, ArtistGenre.HIPHOP),
            new Artist(19, "Nick", "Drake", false, ArtistGenre.FOLK),
            new Artist(20, null, "Boards Of Canada", true, ArtistGenre.ELECTRONICA),
            new Artist(21, "Donna", "Summer", false, ArtistGenre.POP),
            new Artist(22, null, "Bee Gees", true, ArtistGenre.POP),
            new Artist(23, null, "ABBA", true, ArtistGenre.POP),
            new Artist(24, "Michael", "Jackson", false, ArtistGenre.POP),
            new Artist(25, "Gary", "Numan", false, ArtistGenre.POP),
            new Artist(26, "Miles", "Davis", false, ArtistGenre.JAZZ),
            new Artist(27, "John", "Coltrane", false, ArtistGenre.JAZZ),
            new Artist(28, "Peter", "Brötzmann", false, ArtistGenre.JAZZ),
            new Artist(29, "Charles", "Mingus", false, ArtistGenre.JAZZ),
            new Artist(30, null, "The Art Ensemble Of Chicago", true, ArtistGenre.JAZZ),
            new Artist(31, null, "Naked City", true, ArtistGenre.JAZZ),
            new Artist(32, null, "The Beatles", true, ArtistGenre.ROCK),
            new Artist(33, null, "The Soundtrack Of Our Lives", true, ArtistGenre.ROCK),
            new Artist(34, "La Monte", "Young", false, ArtistGenre.CLASSICAL),
            new Artist(35, null, "Soundtrack (OST)", true, ArtistGenre.SOUNDTRACK), // TODO: Determine how to deal with artist name for OSTs
            new Artist(36, null, "Soundtrack (OST)", true, ArtistGenre.SOUNDTRACK),
            new Artist(37, null, "Soundtrack (OST)", true, ArtistGenre.SOUNDTRACK),
            new Artist(38, "Leos", "Janacek", false, ArtistGenre.CLASSICAL),
            new Artist(39, "Domenico", "Scarlatti", false, ArtistGenre.CLASSICAL),
            new Artist(40, "Ludwig Van", "Beethoven", false, ArtistGenre.CLASSICAL),
            new Artist(41, "Johann Sebastian", "Bach", false, ArtistGenre.CLASSICAL),
            new Artist(42, null, "Funkadelic", true, ArtistGenre.FUNK),
            new Artist(43, null, "The Budos Band", true, ArtistGenre.FUNK),
            new Artist(44, "Fela", "Kuti", false, ArtistGenre.WORLD),
            new Artist(45, "Yma", "Sumac", false, ArtistGenre.WORLD),
            new Artist(46, "Bob", "Marley", false, ArtistGenre.WORLD),
            new Artist(47, null, "Pye Corner Audio", true, ArtistGenre.ELECTRONICA),
            new Artist(48, null, "Autechre", true, ArtistGenre.ELECTRONICA),
            new Artist(49, null, "Aphex Twin", true, ArtistGenre.ELECTRONICA),
            new Artist(50, null, "Howlin' Wolf", true, ArtistGenre.BLUES),
            new Artist(51, "John Lee", "Hooker", false, ArtistGenre.BLUES),
            new Artist(52, "Robert", "Johnson", false, ArtistGenre.BLUES),
            new Artist(53, null, "Leadbelly", true, ArtistGenre.BLUES),
            new Artist(54, null, "Stereolab", true, ArtistGenre.ALTERNATIVE),
            new Artist(55, null, "Pixies", true, ArtistGenre.ALTERNATIVE),
            new Artist(56, null, "Black Moth Super Rainbow", true, ArtistGenre.ALTERNATIVE),
            new Artist(57, null, "The Cure", true, ArtistGenre.ALTERNATIVE),
            new Artist(58, "Curtis", "Mayfield", false, ArtistGenre.SOUL),
            new Artist(59, "Sam", "Cooke", false, ArtistGenre.SOUL),
            new Artist(60, "Aretha", "Franklin", false, ArtistGenre.SOUL),
            new Artist(61, null, "The Supremes", true, ArtistGenre.SOUL),
            new Artist(62, null, "Idles", true, ArtistGenre.PUNK),
            new Artist(63, null, "The Ramones", true, ArtistGenre.PUNK),
            new Artist(64, null, "Gas", true, ArtistGenre.ELECTRONICA),
            new Artist(65, null, "The Stooges", true, ArtistGenre.PUNK),
            new Artist(66, null, "King Gizzard And The Lizzard Wizard", true, ArtistGenre.ROCK),
            new Artist(67, null, "Thee Oh Sees", true, ArtistGenre.ROCK),
            new Artist(68, null, "The White Stripes", true, ArtistGenre.ROCK),
            new Artist(69, "Joni", "Mitchell", false, ArtistGenre.FOLK),
            new Artist(70,  null,"Comus", true, ArtistGenre.FOLK),
            new Artist(71,  null,"The Incredible String Band", true, ArtistGenre.FOLK),
            new Artist(72, "Neil", "Young", false, ArtistGenre.ROCK),
            new Artist(73, "Herbie", "Hancock", false, ArtistGenre.JAZZ),
            new Artist(74, null, "Led Zeppelin", true, ArtistGenre.ROCK),
            new Artist(75, null, "Budgie", true, ArtistGenre.ROCK),
            new Artist(76, null, "The Doors", true, ArtistGenre.ROCK),
            new Artist(77, null, "Childish Gambino", false, ArtistGenre.HIPHOP),
            new Artist(78, "Kendrick", "Lamar", false, ArtistGenre.HIPHOP),
            new Artist(79, null, "Clams Casino", false, ArtistGenre.HIPHOP),
            new Artist(80, null, "Melvins", true, ArtistGenre.PUNK),
            new Artist(81, null, "The Residents", true, ArtistGenre.PUNK),
            new Artist(82, null, "Les Rita Mitsouko", true, ArtistGenre.FRANCOPHONE),
            new Artist(83, "Fernand", "Gignac", false, ArtistGenre.FRANCOPHONE),
            new Artist(84, "Celine", "Dion", false, ArtistGenre.POP),
            new Artist(85, "Ginette", "Reno", false, ArtistGenre.FRANCOPHONE),
            new Artist(86, "Jean", "Leloup", false, ArtistGenre.FRANCOPHONE),
            new Artist(87, "Eric", "Lapointe", false, ArtistGenre.FRANCOPHONE),
            new Artist(88, "Johnny", "Cash", false, ArtistGenre.COUNTRY),
            new Artist(89, "Dolly", "Parton", false, ArtistGenre.COUNTRY),
            new Artist(90, null, "The Rolling Stones", true, ArtistGenre.ROCK),
            new Artist(91, "Kris", "Kristofferson", false, ArtistGenre.COUNTRY),
            new Artist(92, "Willie", "Nelson", false, ArtistGenre.COUNTRY),
            new Artist(93, "John", "Fahey", false, ArtistGenre.FOLK),
            new Artist(94, "Emmylou", "Harris", false, ArtistGenre.COUNTRY),
            new Artist(95, "Billie", "Eilish", false, ArtistGenre.POP),
            new Artist(96, null, "FKA Twigs", true, ArtistGenre.POP),
            new Artist(97, null, "Bjork", true, ArtistGenre.POP),
            new Artist(98, null, "Beyonce", true, ArtistGenre.POP),
            new Artist(99, "Lana", "Del Rey", false, ArtistGenre.POP),
            new Artist(100, "Normand", "L\'Amour", false, ArtistGenre.FRANCOPHONE),
            new Artist(101, null, "Various", true, ArtistGenre.ELECTRONICA), // TODO: Determine how to deal with artist name for compilations
            new Artist(102, null, "Various", true, ArtistGenre.ALTERNATIVE),
            new Artist(103, null, "Various", true, ArtistGenre.WORLD)
        };

        public IEnumerable<Artist> GetAllArtists() => _artists;

        public IEnumerable<Artist> GetArtistsByGenre(ArtistGenre artistGenre) {
            return _artists.Where(a => a.ArtistGenre == artistGenre);
        }

        public string? GetArtistNameByAlbumId(int albumId) {
            var artist = _artists.FirstOrDefault(a => a.ArtistId == albumId);
            return artist?.ArtistName;
        }

        public string? GetArtistNameById(int artistId) {
            var artist = _artists.FirstOrDefault(a => a.ArtistId == artistId);
            return artist?.ArtistName;
        }
    }
}

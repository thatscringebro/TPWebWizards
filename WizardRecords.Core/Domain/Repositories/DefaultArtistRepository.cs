using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultArtistRepository : IArtistRepository {
        private readonly List<Artist> _artists = new() { 
            // TODO: Transferer les données à la BD une fois l'implémentation faite
            new Artist(1, "Essenger", true, ArtistGenre.ELECTRONICA),
            new Artist(2, "Aversions Crown", true,  ArtistGenre.METAL),
            new Artist(3, "Make Them Suffer", true, ArtistGenre.METAL),
            new Artist(4, "Gojira", true, ArtistGenre.METAL),
            new Artist(5, "Nirvana", true, ArtistGenre.ALTERNATIVE),
            new Artist(6, "Norma Jean", true, ArtistGenre.METAL),
            new Artist(7, "Red Hot Chili Peppers", true, ArtistGenre.FUNK),
            new Artist(8, "Metallica", true, ArtistGenre.METAL),
            new Artist(9, "The Killers", true, ArtistGenre.ROCK),
            new Artist(10, "Emarosa", true, ArtistGenre.ROCK),
            new Artist(11, "Bad Omens", true, ArtistGenre.METAL),
            new Artist(12, "Bring Me The Horizon", true, ArtistGenre.METAL),
            new Artist(13, "Fushitsusha", true, ArtistGenre.ROCK),
            new Artist(14, "Three Days Grace", true, ArtistGenre.ALTERNATIVE),
            new Artist(15, "Fall Out Boy", true, ArtistGenre.PUNK),
            new Artist(16, "2 Live Crew", true, ArtistGenre.HIPHOP),
            new Artist(17, "Death Grips", true, ArtistGenre.HIPHOP),
            new Artist(18, "Kanye West", false, ArtistGenre.HIPHOP),
            new Artist(19, "Nick Drake", false, ArtistGenre.FOLK),
            new Artist(20, "Boards Of Canada", true, ArtistGenre.ELECTRONICA),
            new Artist(21, "Donna Summer", false, ArtistGenre.POP),
            new Artist(22, "Bee Gees", true, ArtistGenre.POP),
            new Artist(23, "ABBA", true, ArtistGenre.POP),
            new Artist(24, "Michael Jackson", false, ArtistGenre.POP),
            new Artist(25, "Gary Numan", false, ArtistGenre.POP),
            new Artist(26, "Miles Davis", false, ArtistGenre.JAZZ),
            new Artist(27, "John Coltrane", false, ArtistGenre.JAZZ),
            new Artist(28, "Peter Brötzmann", false, ArtistGenre.JAZZ),
            new Artist(29, "Charles Mingus", false, ArtistGenre.JAZZ),
            new Artist(30, "The Art Ensemble Of Chicago", true, ArtistGenre.JAZZ),
            new Artist(31, "Naked City", true, ArtistGenre.JAZZ),
            new Artist(32, "The Beatles", true, ArtistGenre.ROCK),
            new Artist(33, "The Soundtrack Of Our Lives", true, ArtistGenre.ROCK),
            new Artist(34, "La Monte Young", false, ArtistGenre.CLASSICAL),
            new Artist(35, "Soundtrack (OST)", true, ArtistGenre.SOUNDTRACK), // TODO: Determine how to deal with artist name for OSTs
            new Artist(36, "Soundtrack (OST)", true, ArtistGenre.SOUNDTRACK),
            new Artist(37, "Soundtrack (OST)", true, ArtistGenre.SOUNDTRACK),
            new Artist(38, "Leos Janacek", false, ArtistGenre.CLASSICAL),
            new Artist(39, "Domenico Scarlatti", false, ArtistGenre.CLASSICAL),
            new Artist(40, "Ludwig Van Beethoven", false, ArtistGenre.CLASSICAL),
            new Artist(41, "Johann Sebastian Bach", false, ArtistGenre.CLASSICAL),
            new Artist(42, "Funkadelic", true, ArtistGenre.FUNK),
            new Artist(43, "The Budos Band", true, ArtistGenre.FUNK),
            new Artist(44, "Fela Kuti", false, ArtistGenre.WORLD),
            new Artist(45, "Yma Sumac", false, ArtistGenre.WORLD),
            new Artist(46, "Bob Marley", false, ArtistGenre.WORLD),
            new Artist(47, "Pye Corner Audio", true, ArtistGenre.ELECTRONICA),
            new Artist(48, "Autechre", true, ArtistGenre.ELECTRONICA),
            new Artist(49, "Aphex Twin", true, ArtistGenre.ELECTRONICA),
            new Artist(50, "Howlin' Wolf", true, ArtistGenre.BLUES),
            new Artist(51, "John Lee Hooker", false, ArtistGenre.BLUES),
            new Artist(52, "Robert Johnson", false, ArtistGenre.BLUES),
            new Artist(53, "Leadbelly", true, ArtistGenre.BLUES),
            new Artist(54, "Stereolab", true, ArtistGenre.ALTERNATIVE),
            new Artist(55, "Pixies", true, ArtistGenre.ALTERNATIVE),
            new Artist(56, "Black Moth Super Rainbow", true, ArtistGenre.ALTERNATIVE),
            new Artist(57, "The Cure", true, ArtistGenre.ALTERNATIVE),
            new Artist(58, "Curtis Mayfield", false, ArtistGenre.SOUL),
            new Artist(59, "Sam Cooke", false, ArtistGenre.SOUL),
            new Artist(60, "Aretha Franklin", false, ArtistGenre.SOUL),
            new Artist(61, "The Supremes", true, ArtistGenre.SOUL),
            new Artist(62, "Idles", true, ArtistGenre.PUNK),
            new Artist(63, "The Ramones", true, ArtistGenre.PUNK),
            new Artist(64, "Gas", true, ArtistGenre.ELECTRONICA),
            new Artist(65, "The Stooges", true, ArtistGenre.PUNK),
            new Artist(66, "King Gizzard And The Lizzard Wizard", true, ArtistGenre.ROCK),
            new Artist(67, "Thee Oh Sees", true, ArtistGenre.ROCK),
            new Artist(68, "The White Stripes", true, ArtistGenre.ROCK),
            new Artist(69, "Joni Mitchell", false, ArtistGenre.FOLK),
            new Artist(70, "Comus", true, ArtistGenre.FOLK),
            new Artist(71, "The Incredible String Band", true, ArtistGenre.FOLK),
            new Artist(72, "Neil Young", false, ArtistGenre.ROCK),
            new Artist(73, "Herbie Hancock", false, ArtistGenre.JAZZ),
            new Artist(74, "Led Zeppelin", true, ArtistGenre.ROCK),
            new Artist(75, "Budgie", true, ArtistGenre.ROCK),
            new Artist(76, "The Doors", true, ArtistGenre.ROCK),
            new Artist(77, "Childish Gambino", false, ArtistGenre.HIPHOP),
            new Artist(78, "Kendrick Lamar", false, ArtistGenre.HIPHOP),
            new Artist(79, "Clams Casino", false, ArtistGenre.HIPHOP),
            new Artist(80, "Melvins", true, ArtistGenre.PUNK),
            new Artist(81, "The Residents", true, ArtistGenre.PUNK),
            new Artist(82, "Les Rita Mitsouko", true, ArtistGenre.FRANCOPHONE),
            new Artist(83, "Fernand Gignac", false, ArtistGenre.FRANCOPHONE),
            new Artist(84, "Celine Dion", false, ArtistGenre.POP),
            new Artist(85, "Ginette Reno", false, ArtistGenre.FRANCOPHONE),
            new Artist(86, "Jean Leloup", false, ArtistGenre.FRANCOPHONE),
            new Artist(87, "Eric Lapointe", false, ArtistGenre.FRANCOPHONE),
            new Artist(88, "Johnny Cash", false, ArtistGenre.COUNTRY),
            new Artist(89, "Dolly Parton", false, ArtistGenre.COUNTRY),
            new Artist(90, "The Rolling Stones", true, ArtistGenre.ROCK),
            new Artist(91, "Kris Kristofferson", false, ArtistGenre.COUNTRY),
            new Artist(92, "Willie Nelson", false, ArtistGenre.COUNTRY),
            new Artist(93, "John Fahey", false, ArtistGenre.FOLK),
            new Artist(94, "Emmylou Harris", false, ArtistGenre.COUNTRY),
            new Artist(95, "Billie Eilish", false, ArtistGenre.POP),
            new Artist(96, "FKA Twigs", true, ArtistGenre.POP),
            new Artist(97, "Bjork", true, ArtistGenre.POP),
            new Artist(98, "Beyonce", true, ArtistGenre.POP),
            new Artist(99, "Lana Del Rey", false, ArtistGenre.POP),
            new Artist(100, "Normand L\'Amour", false, ArtistGenre.FRANCOPHONE),
            new Artist(101, "Various", true, ArtistGenre.ELECTRONICA), // TODO: Determine how to deal with artist name for compilations
            new Artist(102, "Various", true, ArtistGenre.ALTERNATIVE),
            new Artist(103, "Various", true, ArtistGenre.WORLD)
        };

        public IEnumerable<Artist> GetAllArtists() => _artists;

        public IEnumerable<Artist> GetArtistsByGenre(ArtistGenre artistGenre) {
            var artistsByGenre = _artists.Where(a => a.ArtistGenre == artistGenre).ToList();
            if (artistsByGenre.Count() == 0) {
                throw new ArgumentException("No artists found for the specified genre");
            }
            return artistsByGenre.AsEnumerable();   
        }

        public Artist GetArtistById(int artistId) {
            var artistById = _artists.Find(a => a.ArtistId == artistId);
            if (artistById == null) {
                throw new ArgumentException($"No artist found for id {artistId}");
            }
            return artistById;
        }
    }
}

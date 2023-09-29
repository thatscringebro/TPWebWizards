using WizardRecords.Core.Domain.Entities;
using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Repositories {
    public class DefaultAlbumRepository : IAlbumRepository {

        private readonly List<Album> _albums = new() {
            // AlbumId, ArtistId, Qty, Price, Title
            // TODO: Transferer les données à la BD une fois l'implémentation faite
            new Album(1, 1, 5, 24.99f, "After Dark", MediaType.CD),
            new Album(2, 2, 3, 19.99f, "Tyrant", MediaType.CD),
            new Album(3, 3, 2, 29.99f, "How To Survive A Funeral", MediaType.VINYL),
            new Album(4, 4, 1, 39.99f, "L\'Enfant Sauvage", MediaType.VINYL),
            new Album(5, 5, 2, 19.99f, "In Utero", MediaType.CD),
            new Album(6, 6, 1, 24.99f, "All Hail", MediaType.CD),
            new Album(7, 7, 3, 29.99f, "Californication", MediaType.CD),
            new Album(8, 8, 4, 79.99f, "Master Of Puppets", MediaType.VINYL),
            new Album(9, 9, 3, 24.99f, "Hot Fuss", MediaType.CD),
            new Album(10, 10, 1, 29.99f, "131", MediaType.CD),
            new Album(11, 11, 1, 19.99f, "Finding God Before God Finds Me", MediaType.VINYL),
            new Album(12, 12, 1, 34.99f, "Sempiternal", MediaType.VINYL),
            new Album(13, 13, 1, 99.99f, "1st", MediaType.CD),
            new Album(14, 14, 1, 19.99f, "One-X", MediaType.VINYL),
            new Album(15, 15, 1, 24.99f, "From Under The Cork Tree", MediaType.VINYL),
            new Album(16, 5, 3, 29.99f, "Bleach", MediaType.CD),
            new Album(17, 5, 2, 29.99f, "MTV Unplugged", MediaType.VINYL),
            new Album(18, 5, 4, 29.99f, "Nevermind", MediaType.VINYL),
            new Album(19, 7, 1, 29.99f, "Mother\'s Milk", MediaType.VINYL),
            new Album(20, 13, 1, 119.99f, "2nd", MediaType.CD),
            new Album(21, 16, 1, 19.99f, "As Nasty As They Wanna Be", MediaType.CD),
            new Album(22, 17, 1, 39.99f, "The Money Store", MediaType.VINYL),
            new Album(23, 17, 1, 999.99f, "Ex-Military", MediaType.VINYL),
            new Album(24, 18, 1, 49.99f, "The College Dropout", MediaType.CD),
            new Album(25, 19, 1, 29.99f, "Pink Moon", MediaType.VINYL),
            new Album(26, 20, 1, 34.99f, "Music Has The Right To Children", MediaType.VINYL),
            new Album(27, 20, 1, 39.99f, "Geogaddi", MediaType.VINYL),
            new Album(28, 21, 1, 4.99f, "I Remember Yesterday", MediaType.CD),
            new Album(29, 22, 1, 2.99f, "Saturday Night Fever", MediaType.VINYL),
            new Album(30, 23, 1, 19.99f, "Arrival", MediaType.CD),
            new Album(31, 23, 1, 19.99f, "ABBA", MediaType.VINYL),
            new Album(32, 24, 2, 34.99f, "Thriller", MediaType.VINYL),
            new Album(33, 24, 2, 34.99f, "Bad", MediaType.VINYL),
            new Album(34, 25, 1, 19.99f, "The Pleasure Principle", MediaType.CD),
            new Album(35, 26, 1, 39.99f, "Bitches Brew", MediaType.VINYL),
            new Album(36, 26, 1, 39.99f, "Filles De Kilimanjaro", MediaType.VINYL),
            new Album(37, 26, 1, 39.99f, "Miles In The Sky", MediaType.VINYL),
            new Album(38, 26, 1, 39.99f, "On The Corner", MediaType.VINYL),
            new Album(38, 26, 1, 39.99f, "Big Fun", MediaType.VINYL),
            new Album(38, 26, 1, 39.99f, "Black Beauty (Miles Davis At Fillmore West)", MediaType.VINYL),
            new Album(39, 27, 1, 29.99f, "A Love Supreme", MediaType.CD),
            new Album(40, 27, 1, 49.99f, "Ascension", MediaType.VINYL),
            new Album(41, 28, 1, 29.99f, "Machine Gun", MediaType.VINYL),
            new Album(42, 29, 1, 29.99f, "Mingus Mingus Mingus Mingus Mingus", MediaType.VINYL),
            new Album(43, 30, 1, 149.99f, "Les Stances A Sophie", MediaType.VINYL),
            new Album(44, 31, 1, 29.99f, "Naked City", MediaType.VINYL),
            new Album(45, 32, 2, 29.99f, "Abbey Road", MediaType.VINYL),
            new Album(46, 32, 1, 199.99f, "Magical Mystery Tour", MediaType.VINYL),
            new Album(47, 32, 1, 29.99f, "Revolver", MediaType.CD),
            new Album(48, 32, 2, 29.99f, "Rubber Soul", MediaType.CD),
            new Album(49, 32, 3, 49.99f, "Sgt. Pepper\'s Lonely Hearts Club Band", MediaType.VINYL),
            new Album(50, 32, 1, 29.99f, "The Beatles (White Album)", MediaType.VINYL),
            new Album(51, 33, 1, 29.99f, "Behind The Music", MediaType.VINYL),
            new Album(52, 34, 1, 1499.99f, "The Well-Tuned Piano", MediaType.VINYL),
            new Album(53, 35, 1, 199.99f, "Koyaanisqatsi", MediaType.VINYL),
            new Album(54, 36, 1, 29.99f, "Undertale", MediaType.VINYL),
            new Album(55, 37, 1, 99.99f, "Après Ski", MediaType.VINYL),
            new Album(56, 38, 1, 29.99f, "The Glagolitic Mass", MediaType.VINYL),
            new Album(57, 39, 1, 9.99f, "Sonatas", MediaType.VINYL),
            new Album(58, 40, 1, 4.99f, "Symphony No. 9", MediaType.CD),
            new Album(59, 41, 1, 9.99f, "The Well-Tempered Clavier", MediaType.VINYL),
            new Album(59, 41, 1, 29.99f, "The Brandenburg Concertos", MediaType.VINYL),
            new Album(60, 42, 1, 79.99f, "Maggot Brain", MediaType.VINYL),
            new Album(61, 43, 1, 29.99f, "The Budos Band III", MediaType.VINYL),
            new Album(62, 44, 1, 39.99f, "Expensive Shit", MediaType.VINYL),
            new Album(63, 45, 1, 19.99f, "Mambo", MediaType.CD),
            new Album(64, 45, 1, 19.99f, "Voice Of The Xtabay", MediaType.VINYL),
            new Album(65, 46, 2, 29.99f, "Legend - The Best Of Bob Marley", MediaType.CD),
            new Album(66, 47, 1, 44.99f, "Black Mill Tapes Volumes 1 & 2", MediaType.VINYL),
            new Album(67, 48, 1, 39.99f, "Amber", MediaType.VINYL),
            new Album(68, 48, 1, 89.99f, "Oversteps", MediaType.VINYL),
            new Album(69, 49, 1, 24.99f, "Windowlicker", MediaType.VINYL),
            new Album(70, 49, 1, 599.99f, "Selected Ambient Works Volume II", MediaType.VINYL),
            new Album(71, 50, 1, 19.99f, "The Real Folk Blues", MediaType.VINYL),
            new Album(72, 51, 1, 24.99f, "Burnin\'", MediaType.CD),
            new Album(73, 52, 1, 19.99f, "King Of The Delta Blues", MediaType.VINYL),
            new Album(74, 53, 1, 24.99f, "Leadbelly", MediaType.VINYL),
            new Album(75, 54, 1, 29.99f, "Peng!", MediaType.VINYL),
            new Album(76, 54, 1, 29.99f, "Transient Noise Bursts With Announcements", MediaType.VINYL),
            new Album(77, 54, 1, 29.99f, "Emperor Tomato Ketchup", MediaType.VINYL),
            new Album(78, 55, 1, 34.99f, "Surfer Rosa", MediaType.VINYL),
            new Album(79, 55, 1, 34.99f, "Doolitlle", MediaType.VINYL),
            new Album(80, 55, 1, 34.99f, "Bossanova", MediaType.VINYL),
            new Album(81, 55, 1, 34.99f, "Trompe Le Monde", MediaType.CD),
            new Album(82, 56, 1, 29.99f, "Dandelion Gum", MediaType.VINYL),
            new Album(83, 57, 1, 29.99f, "The Head On The Door", MediaType.VINYL),
            new Album(84, 57, 1, 39.99f, "Disintegration", MediaType.VINYL),
            new Album(85, 57, 1, 29.99f, "Kiss Me, Kiss Me, Kiss Me", MediaType.VINYL),
            new Album(86, 58, 2, 24.99f, "Curtis", MediaType.VINYL),
            new Album(87, 58, 1, 24.99f, "Roots", MediaType.CD),
            new Album(88, 59, 1, 29.99f, "Night Beat", MediaType.CD),
            new Album(89, 60, 1, 24.99f, "Lady Soul", MediaType.CD),
            new Album(90, 61, 1, 24.99f, "Where Did Our Love Go", MediaType.VINYL),
            new Album(91, 62, 2, 24.99f, "Joy As An Act Of Resistance", MediaType.VINYL),
            new Album(92, 63, 1, 24.99f, "Ramones", MediaType.VINYL),
            new Album(93, 63, 1, 24.99f, "Rocket To Russia", MediaType.VINYL),
            new Album(94, 63, 1, 24.99f, "It\'s Alive", MediaType.CD),
            new Album(95, 64, 1, 49.99f, "Gas", MediaType.VINYL),
            new Album(96, 64, 1, 49.99f, "Zauberberg", MediaType.VINYL),
            new Album(97, 64, 1, 49.99f, "Konigsforst", MediaType.VINYL),
            new Album(98, 64, 1, 49.99f, "Pop", MediaType.VINYL),
            new Album(99, 65, 1, 24.99f, "The Stooges", MediaType.VINYL),
            new Album(100, 65, 1, 24.99f, "Fun House", MediaType.VINYL),
            new Album(101, 65, 1, 24.99f, "Raw Power", MediaType.VINYL),
            new Album(102, 66, 1, 24.99f, "Nonagon Infinity", MediaType.VINYL),
            new Album(103, 66, 1, 24.99f, "I\'m In Your Mind Fuzz", MediaType.VINYL),
            new Album(104, 66, 1, 24.99f, "Infest The Rats\' Nest", MediaType.VINYL),
            new Album(105, 66, 1, 24.99f, "Petrodragonic Apocalypse; Or, Dawn Of Eternal Night: An Annihilation Of Planet Earth And The Beginning Of Merciless Damnation", MediaType.VINYL),
            new Album(106, 66, 1, 29.99f, "Float Along - Fill Your Lungs", MediaType.VINYL),
            new Album(107, 67, 1, 44.99f, "Face Stabber", MediaType.VINYL),
            new Album(108, 68, 2, 29.99f, "Elephant", MediaType.VINYL),
            new Album(109, 68, 1, 29.99f, "De Stijl", MediaType.VINYL),
            new Album(110, 68, 1, 29.99f, "The White Stripes", MediaType.VINYL),
            new Album(111, 68, 3, 29.99f, "White Blood Cells", MediaType.VINYL),
            new Album(112, 69, 1, 69.99f, "Blue", MediaType.VINYL),
            new Album(113, 69, 1, 49.99f, "Clouds", MediaType.VINYL),
            new Album(114, 70, 1, 49.99f, "First Utterance", MediaType.VINYL),
            new Album(115, 71, 1, 34.99f, "The Hangman\'s Beautiful Daughter", MediaType.VINYL),
            new Album(116, 71, 1, 34.99f, "The 5000 Spirits Or The Layers Of The Onion", MediaType.VINYL),
            new Album(117, 72, 1, 39.99f, "Everybody Knows This Is Nowhere", MediaType.CD),
            new Album(118, 72, 1, 39.99f, "After The Gold Rush", MediaType.VINYL),
            new Album(119, 73, 1, 24.99f, "Head Hunters", MediaType.CD),
            new Album(120, 73, 1, 29.99f, "Future Shock", MediaType.VINYL),
            new Album(121, 74, 1, 39.99f, "Led Zeppelin", MediaType.VINYL),
            new Album(122, 74, 1, 39.99f, "Led Zeppelin II", MediaType.VINYL),
            new Album(123, 74, 1, 39.99f, "Led Zeppelin III", MediaType.VINYL),
            new Album(124, 74, 2, 39.99f, "Untitled", MediaType.CD),
            new Album(125, 75, 1, 39.99f, "Squawk", MediaType.VINYL),
            new Album(126, 76, 1, 39.99f, "L.A. Woman", MediaType.VINYL),
            new Album(126, 76, 1, 39.99f, "Strange Days", MediaType.VINYL),
            new Album(127, 76, 1, 39.99f, "Waiting For The Sun", MediaType.VINYL),
            new Album(128, 77, 2, 29.99f, "Awaken, My Love!", MediaType.VINYL),
            new Album(129, 78, 2, 29.99f, "To Pimp A Butterfly", MediaType.VINYL),
            new Album(130, 79, 1, 29.99f, "Rainforest", MediaType.CD),
            new Album(131, 80, 1, 34.99f, "Houdini", MediaType.VINYL),
            new Album(132, 80, 1, 39.99f, "Bullhead", MediaType.VINYL),
            new Album(133, 80, 1, 39.99f, "Ozma", MediaType.VINYL),
            new Album(134, 81, 1, 34.99f, "Not Available", MediaType.VINYL),
            new Album(135, 81, 1, 34.99f, "Duck Stab / Buster & Glen", MediaType.VINYL),
            new Album(136, 81, 1, 34.99f, "Eskimo", MediaType.VINYL),
            new Album(137, 82, 1, 24.99f, "The No Comprendo", MediaType.VINYL),
            new Album(138, 83, 1, 1.99f, "Vous Souvenez-Vous De...", MediaType.CD),
            new Album(139, 84, 1, 49.99f, "D\'Eux", MediaType.CD),
            new Album(140, 84, 1, 49.99f, "Unison", MediaType.VINYL),
            new Album(141, 84, 1, 29.99f, "Des Mots Qui Sonnent", MediaType.VINYL),
            new Album(142, 85, 1, 4.99f, "Noël Avec Ginette Reno", MediaType.VINYL),
            new Album(142, 85, 1, 4.99f, "Ginette En Amour", MediaType.VINYL),
            new Album(143, 86, 1, 39.99f, "L\'Amour Est Sans Pitié", MediaType.VINYL),
            new Album(144, 87, 1, 2.99f, "Obsession", MediaType.CD),
            new Album(145, 88, 1, 29.99f, "At Folsom Prison", MediaType.VINYL),
            new Album(146, 88, 1, 29.99f, "At San Quentin", MediaType.VINYL),
            new Album(147, 88, 1, 29.99f, "American Recordings", MediaType.VINYL),
            new Album(148, 89, 1, 24.99f, "Jolene", MediaType.VINYL),
            new Album(149, 90, 1, 39.99f, "Let It Bleed", MediaType.VINYL),
            new Album(150, 90, 1, 34.99f, "Aftermath", MediaType.VINYL),
            new Album(151, 91, 1, 29.99f, "Me And Bobby McGee", MediaType.VINYL),
            new Album(152, 92, 1, 29.99f, "Red Headed Stranger", MediaType.CD),
            new Album(153, 93, 1, 34.99f, "The Transfiguration Of Blind Joe Death", MediaType.VINYL),
            new Album(154, 93, 1, 34.99f, "The Yellow Princess", MediaType.CD),
            new Album(155, 94, 1, 24.99f, "Elite Hotel", MediaType.VINYL),
            new Album(156, 95, 1, 29.99f, "When We All Fall Asleep, Where Do We Go?", MediaType.VINYL),
            new Album(157, 96, 2, 34.99f, "Magdalene", MediaType.VINYL),
            new Album(158, 96, 1, 34.99f, "LP1", MediaType.VINYL),
            new Album(159, 97, 1, 29.99f, "Debut", MediaType.CD),
            new Album(160, 97, 1, 29.99f, "Post", MediaType.CD),
            new Album(161, 97, 1, 29.99f, "Homogenic", MediaType.CD),
            new Album(162, 97, 1, 29.99f, "Vespertine", MediaType.CD),
            new Album(163, 98, 3, 29.99f, "Lemonade", MediaType.VINYL),
            new Album(164, 99, 1, 29.99f, "Born To Die", MediaType.VINYL),
            new Album(165, 99, 1, 29.99f, "Ultraviolence", MediaType.VINYL),
            new Album(166, 100, 1, 39.99f, "C\'est Pas Possible!", MediaType.CD),
            new Album(167, 101, 1, 34.99f, "Total 7", MediaType.CD),
            new Album(168, 102, 1, 29.99f, "No Alternative", MediaType.CD),
            new Album(169, 103, 1, 19.99f, "THe Music Of Islam", MediaType.CD),
            new Album(170, 74, 1, 19.99f, "Untitled", MediaType.VINYL),
            new Album(171, 98, 3, 29.99f, "Lemonade", MediaType.CD),
        };

        public IEnumerable<Album> GetAllAlbums() => _albums;

        public IEnumerable<Album> GetAlbumsByArtistId(int artistId) {
            var albumsByArtist = _albums.Where(a => a.ArtistId == artistId);
            if (albumsByArtist.Count() == 0) {
                throw new ArgumentException($"No albums found for artist {artistId}");
            }
            return _albums.Where(a => a.ArtistId == artistId);
        }

        public IEnumerable<Album> GetAlbumsByGenre(AlbumGenre albumGenre) {
            var albumsByGenre = _albums.Where(a => a.AlbumGenre == albumGenre);
            if (albumsByGenre.Count() == 0) {
                throw new ArgumentException($"No albums found for genre {albumGenre}");
            }
            return albumsByGenre;
        }

        public IEnumerable<Album> GetAlbumsByCategory(Category albumCategory) {
            var albumsByCategory = _albums.Where(a => a.Category == albumCategory);
            if (albumsByCategory.Count() == 0) {
                throw new ArgumentException($"No albums found for category {albumCategory}");
            }
            return albumsByCategory;
        }

        public IEnumerable<Album> GetAlbumsByMediaType(MediaType albumMediaType) {
            var albumsByMediaType = _albums.Where(a => a.Media == albumMediaType);
            if (albumsByMediaType.Count() == 0) {
                throw new ArgumentException($"No albums found for media type {albumMediaType}");
            }
            return albumsByMediaType;
        }

        public Album GetAlbumById(int albumId) {
            var album = _albums.Find(a => a.AlbumId == albumId);
            if (album == null) {
                throw new ArgumentException($"Album with id {albumId} not found");
            }
            return album;
        }

        public Album GetAlbumByTitle(string title) {
            var album = _albums.Find(a => a.Title== title);
            if (album == null) {
                throw new ArgumentException($"Album with id {title} not found");
            }
            return album;
        }

        // TODO: Sort by price, sort alphabetically, etc.
    }
}

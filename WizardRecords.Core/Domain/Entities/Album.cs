using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using static WizardRecords.Core.Data.Constants;

namespace WizardRecords.Core.Domain.Entities {
    public class Album {
        public int AlbumId { get; set; }
        public int ArtistId { get; set; }
        public int? LabelId { get; set; }
        public int StockQuantity { get; set; }
        public float Price { get; set; }
        public string? Title { get; set; } // TODO: Remove nullability
        public string? CatalogNumber { get; set; } // TODO: Remove nullability
        public Category? Category { get; set; } // NEW ? USED
        public MediaType? Media { get; set; } // CD ? LP 
        public FormatType? Format { get; set; } // Media type precisions (Single, EP, 7", 10", 12", etc.)
        public AlbumGenre? AlbumGenre { get; set; } // Album genre precisions (Fusion, Ambient, Reggae, etc.)
        public Grade? MediaGrade { get; set; } // Category == USED only!
        public Grade? SleeveGrade { get; set; } // Category == USED only!
        public string? Comments { get; set; }
        public string ImageFilePath { get; set; }

        internal Album() { }

        public Album(int albumId, int artistId, int qty, float price, string title, MediaType mediaType, string imgPath) {
            AlbumId = albumId;
            ArtistId = artistId;
            StockQuantity = qty;
            Price = price;
            Title = title;
            Media = mediaType;
            ImageFilePath = imgPath;
        }

    }
}

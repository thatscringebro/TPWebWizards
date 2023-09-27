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
        public Category? Category { get; set; }
        public MediaType? Media { get; set; }
        public FormatType? Format { get; set; }
        public AlbumGenre? Genre { get; set; }
        public Grade? MediaGrade { get; set; } // Category == USED only!
        public Grade? SleeveGrade { get; set; } // Category == USED only!
        public string? Comments { get; set; }

        internal Album() { }

        public Album(int albumId, int artistId, int qty, float price, string title) {
            AlbumId = albumId;
            ArtistId = artistId;
            StockQuantity = qty;
            Price = price;
            Title = title;
        }

    }
}


using WizardRecords.Api.Domain.Entities;

namespace WizardRecords.Api.Data.Entities
{
    public class Cart
    {
        public Guid CartId { get; set; }
        public Guid UserId { get; set; }

        public List<Album> Albums { get; set; } = new List<Album>();

        public int Quantity { get; set; } = 0;
        public int SousTotal { get; set; } = 0;

        internal Cart() { }

        public Cart(Guid cartId, List<Album> albums, int quantity, int sousTotal, Guid user)
        {
            CartId = cartId;
            Albums = albums;
            Quantity = quantity;
            SousTotal = sousTotal;
            UserId = user;
        }
    }
}

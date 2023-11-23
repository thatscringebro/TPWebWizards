
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WizardRecords.Api.Domain.Entities;

namespace WizardRecords.Api.Data.Entities
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public Guid UserId { get; set; }
        public OrderState State { get; set; }    

        public List<CartItem> CartItems { get; set; } = new List<CartItem>();

        public Order() {}

         public Order(Cart cart) {
            CartItems = cart.CartItems;
            UserId = cart.UserId;
            State = OrderState.Confirmée;
         }
    }

   public enum OrderState{
      Confirmée,
      Annulée,
      EnPrep,
      EnLivraison,
      Livrée,
      Retournée
   }
}


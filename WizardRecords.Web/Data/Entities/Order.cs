
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WizardRecords.Api.Domain.Entities;
using WizardRecords.Dtos;

namespace WizardRecords.Api.Data.Entities
{
    public class Order
    {
        public Guid OrderId { get; set; }
        public Guid UserId { get; set; }
        public OrderState State { get; set; }  

        public String UserName { get; set; }
        public String UserEmail { get; set; }
        public String UserPhone { get; set; }
        public String Adress { get; set; }
        public String City { get; set; }
        public String Country { get; set; } = "Canada";
        public String Province { get; set; }
        public String ZipCode { get; set; } 

        public List<CartItem> CartItems { get; set; } = new List<CartItem>();

        public Order() {}

         public Order(Cart cart) {
            CartItems = cart.CartItems;
            UserId = cart.UserId;
            State = OrderState.Confirmée;
         }

         public void UpdateFromDto(OrderDto dto){
            UserName = dto.UserName;
            UserEmail = dto.UserEmail;
            UserPhone = dto.UserPhone;
            Adress = dto.Adress;
            City = dto.City;
            Country = dto.Country;
            Province = dto.Province;
            ZipCode =  dto.ZipCode;
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


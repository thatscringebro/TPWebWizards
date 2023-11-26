using WizardRecords.Api.Data.Entities;
using WizardRecords.Api.Domain.Entities;

namespace WizardRecords.Api.Interfaces
{
    public interface ICartRepository
    {
        Task<IEnumerable<Cart>> GetAllItemAsync();

        Task<IEnumerable<Cart>> GetCartByIdAsync(Guid cartId);

        //CRUD
        Task<Cart?> DeleteItemByIdAsync(Guid cartId, Guid AlbumId);
        Task<Cart?> UpdateItemByIdAsync(Guid cartId, Guid AlbumId, int qty);
        Task<Cart?> AddItemByIdAsync(Guid cartId, Guid AlbumId);


        Task<Cart> CreateCartAsync(Guid userId);
        Task<Cart?> GetUserCartAsync(Guid userId);

        Task<User> GetUserByIdAsync(Guid userId);
        Task<User> CreateUserGuest();
        Task<User> DeleteUserGuest(Guid userId);

        Task<List<Order>> GetUserOrdersAsync(Guid userId);
        Task<Order> GetOrderByIdAsync(Guid orderId);
        Task UpdateOrderAsync(Order order);
        Task CancelOrderAsync(Order order);
    }
}

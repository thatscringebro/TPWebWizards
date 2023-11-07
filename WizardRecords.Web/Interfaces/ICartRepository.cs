using WizardRecords.Api.Data.Entities;
using WizardRecords.Api.Domain.Entities;

namespace WizardRecords.Api.Interfaces
{
    public interface ICartRepository
    {
        Task<IEnumerable<Cart>> GetAllItemAsync(); 

        //CRUD
        Task<Cart?> DeleteItemByIdAsync(Guid cartId, Guid AlbumId);
        Task<Cart?> UpdateItemByIdAsync(Guid cartId, Guid AlbumId, int qty);
        Task<Cart?> AddItemByIdAsync(Guid cartId, Guid AlbumId);


        Task<Cart> CreateCartAsync(Guid userId);
        Task<Cart?> GetUserCartAsync(Guid userId);

        Task<User> GetUserByNameAsync(string username);
    }
}

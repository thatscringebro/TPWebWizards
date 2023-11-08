using WizardRecords.Api.Data.Entities;
using WizardRecords.Api.Interfaces;
using Microsoft.EntityFrameworkCore;
using WizardRecords.Api.Domain.Entities;

namespace WizardRecords.Api.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly WizRecDbContext _dbContext;

        public CartRepository(WizRecDbContext context)
        {
            _dbContext = context;
        }

            public async Task<Cart?> AddItemByIdAsync(Guid cartId, Guid AlbumId)
            {
            try
            {
                var cart = await _dbContext.Carts.Where(c => c.CartId == cartId).FirstOrDefaultAsync();
                var album = await _dbContext.Albums.Where(a => a.AlbumId == AlbumId).FirstOrDefaultAsync();
                if (cart != null && album != null)
                {
                    cart.Albums.Add(album);
                    cart.Quantity++;
                    await _dbContext.SaveChangesAsync();
                    return cart;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<Cart> CreateCartAsync(Guid userId)
        {
            try
            {
                var user = await _dbContext.Client.Where(u => u.Id == userId).FirstOrDefaultAsync();
                Cart cart;

                if (user == null)
                {
                    await _dbContext.Carts.AddAsync(new Cart());
                    await _dbContext.SaveChangesAsync();
                    cart = await _dbContext.Carts.Where(c => c.UserId == userId).FirstOrDefaultAsync();
                }
                else
                {
                    cart = await _dbContext.Carts.Where(c => c.UserId == user.Id).FirstOrDefaultAsync();

                    if (cart == null)
                    {
                        await _dbContext.Carts.AddAsync(new Cart { UserId = user.Id });
                        await _dbContext.SaveChangesAsync();
                        cart = await _dbContext.Carts.Where(c => c.UserId == user.Id).FirstOrDefaultAsync();
                    }
                }

                return cart;
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Faire en sorte que quand l'item est acheter il disparait de la bd !!!
        //Ca va se faire dans le formulaire de commande

    

        public async Task<Cart?> DeleteItemByIdAsync(Guid cartId, Guid AlbumId)
        {
            try
            {
                var cart = await _dbContext.Carts.Where(c => c.CartId == cartId).FirstOrDefaultAsync();
                var album = await _dbContext.Albums.Where(a => a.AlbumId == AlbumId).FirstOrDefaultAsync();
                if (cart != null && album != null)
                {
                    cart.Albums.Remove(album);
                    cart.Quantity--;
                    await _dbContext.SaveChangesAsync();
                    return cart;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }
        

        }

        public async Task<IEnumerable<Cart>> GetAllItemAsync()
        {
            return await _dbContext.Carts.ToListAsync();
        }

        public async Task<IEnumerable<Cart>> GetCartByIdAsync(Guid cartId)
        {
            return await _dbContext.Carts.Include(c => c.Albums).Where(a => a.CartId == cartId).ToListAsync();
        }

        public async Task<User> GetUserByNameAsync(string username)
        {
            return await _dbContext.Client.Where(u => u.UserName == username).FirstOrDefaultAsync();
        }

        public async Task<Cart?> GetUserCartAsync(Guid userId)
        {
            try
            {
                var cart = await _dbContext.Carts
            .Include(c => c.Albums) // Inclure les albums associés au panier
            .Where(c => c.UserId == userId)
            .FirstOrDefaultAsync();

               
                if (cart == null)
                {
                    return null;
                }
                else
                {
                   
                    return cart;
                }
            }
            catch (Exception)
            {

                throw;
            }
          

        }

        public async Task<Cart?> UpdateItemByIdAsync(Guid cartId, Guid AlbumId, int qty)
        {
            try
            {
                var cart = await _dbContext.Carts.Where(c => c.CartId == cartId).FirstOrDefaultAsync();
                var album = await _dbContext.Albums.Where(a => a.AlbumId == AlbumId).FirstOrDefaultAsync();
                if (cart != null && album != null)
                {

                    cart.Quantity = qty;
                    await _dbContext.SaveChangesAsync();
                    return cart;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {
                return null;
            }
            
        }
    }
}

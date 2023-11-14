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

        public async Task<Cart?> AddItemByIdAsync(Guid cartId, Guid albumId)
        {
            try
            {
                var cart = await _dbContext.Carts
                    .Include(c => c.CartItems).ThenInclude(ci => ci.Album)
                    .Where(c => c.CartId == cartId)
                    .FirstOrDefaultAsync();

                var album = await _dbContext.Albums.Where(a => a.AlbumId == albumId).FirstOrDefaultAsync();

                if (cart != null && album != null)
                {
                    var cartItem = cart.CartItems.FirstOrDefault(ci => ci.Album.AlbumId == albumId);

                    if (cartItem == null)
                    {
                        cartItem = new CartItem();
                        cartItem.CartId = cart.CartId;
                        cartItem.Album = album;
                        cartItem.Quantity = 1;
                        cart.CartItems.Add(cartItem);
                    }
                    else
                    {
                        cartItem.Quantity++;
                    }

                    await _dbContext.SaveChangesAsync();
                    return cart;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Une erreur s'est produite dans AddItemByIdAsync : {ex.Message}");
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

        public async Task<User> CreateUserGuest()
        {
            try
            {
                User guest = new(userName: "Guest")
                {
                    Id = Guid.NewGuid(),
                    UserName = "Guest",
                    Email = ""
                };

                await _dbContext.Client.AddAsync(guest);
                await _dbContext.SaveChangesAsync();

                // Créer une session pour cet utilisateur guest
                //  HttpContext.Session.SetString("GuestUserId", guest.Id.ToString());

                return guest;
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Faire en sorte que quand l'item est acheter il disparait de la bd !!!
        //Ca va se faire dans le formulaire de commande



        public async Task<Cart?> DeleteItemByIdAsync(Guid cartId, Guid albumId)
        {
            try
            {
                var cart = await _dbContext.Carts
                  .Include(c => c.CartItems).ThenInclude(ci => ci.Album)
                  .Where(c => c.CartId == cartId)
                  .FirstOrDefaultAsync();

                var album = await _dbContext.Albums.Where(a => a.AlbumId == albumId).FirstOrDefaultAsync();

                var cartItem = cart.CartItems.FirstOrDefault(c => c.Album.AlbumId == album.AlbumId);

                if (cartItem != null)
                {
                    if (cartItem.Quantity > 1)
                    {
                        cartItem.Quantity--;
                    }
                    else
                    {
                        cart.CartItems.Remove(cartItem);
                    }

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

        public async Task<User> DeleteUserGuest(Guid userId)
        {
            var use = await _dbContext.Client.Where(u => u.Id == userId).FirstOrDefaultAsync();
            if (use != null)
            {
                _dbContext.Client.Remove(use);
                await _dbContext.SaveChangesAsync();
                return use;
            }
            else
            {
                return null;
            }
        }

        public Task<string> GenerateJwtTokenAsync(User user)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Cart>> GetAllItemAsync()
        {
            return await _dbContext.Carts.ToListAsync();
        }

        public async Task<IEnumerable<Cart>> GetCartByIdAsync(Guid cartId)
        {
            return await _dbContext.Carts.Include(c => c.CartItems).ThenInclude(ci => ci.Album).Where(a => a.CartId == cartId).ToListAsync();
        }

        public async Task<User> GetUserByIdAsync(Guid userId)
        {
            return await _dbContext.Client.Where(u => u.Id == userId).FirstOrDefaultAsync();
        }

        public async Task<Cart?> GetUserCartAsync(Guid userId)
        {
            try
            {
                var cart = await _dbContext.Carts
     .Include(c => c.CartItems) // Inclure les cart items
         .ThenInclude(ci => ci.Album) // Inclure les albums pour chaque cart item
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

        public async Task<Cart?> UpdateItemByIdAsync(Guid cartId, Guid albumId, int qty)
        {
            try
            {
                var cart = await _dbContext.Carts
                    .Include(c => c.CartItems)
                    .Where(c => c.CartId == cartId)
                    .FirstOrDefaultAsync();

                if (cart != null)
                {
                    var cartItem = cart.CartItems.FirstOrDefault(ci => ci.AlbumId == albumId);

                    if (cartItem != null)
                    {
                        cartItem.Quantity = qty;

                        await _dbContext.SaveChangesAsync();
                    }

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

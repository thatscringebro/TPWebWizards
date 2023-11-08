using Microsoft.AspNetCore.Mvc;
using WizardRecords.Api.Data.Entities;
using WizardRecords.Api.Domain.Entities;
using WizardRecords.Api.Interfaces;
using WizardRecords.Dtos;
using WizardRecords.Repositories;

namespace WizardRecords.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        //pas sur pour l'album.. 
        private readonly IAlbumRepository _albumRepository;
        private readonly ICartRepository _cartRepository;
      

        public CartController(IAlbumRepository albumRepository, ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
            _albumRepository = albumRepository;
        }

        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Cart>>> GetAllItem()
        {

            var cart = await _cartRepository.GetAllItemAsync();
            return Ok(cart);
        }

        [HttpPut("update/{cartId}/{AlbumId}/{quanity}")]
        public async Task<ActionResult<Cart>> UpdateItem(Guid cartId, Guid AlbumId, int quantity)
        {
            try
            {
                var cart = await _cartRepository.GetCartByIdAsync(cartId);
                if (cart != null)
                {
                    await _cartRepository.UpdateItemByIdAsync(cartId, AlbumId, quantity);
                    return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpDelete("delete/{cartId}/{AlbumId}")]
        public async Task<ActionResult<Cart>> DeleteItem(Guid cartId, Guid AlbumId)
        {
            try
            {
                var cart = await _cartRepository.GetCartByIdAsync(cartId);
                if (cart != null)
                {
                    await _cartRepository.DeleteItemByIdAsync(cartId, AlbumId);
                    return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpPost("add/{cartId}/{AlbumId}")]
        public async Task<ActionResult<Cart>> AddItem(Guid cartId, Guid AlbumId)
        {
            try
            {

                var cart = await _cartRepository.GetCartByIdAsync(cartId);
                if (cart != null)
                {
                    await _cartRepository.AddItemByIdAsync(cartId, AlbumId);
                    return Ok();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }


        //create cart A REVOIR AVEC LE USER
        [HttpPost("create")]
        public async Task<ActionResult<Cart>> CreateCart(int userId)
        {
            try
            {
                if (userId == 0)
                {
                    //modifier quand on aura le login
                    var use = await _cartRepository.GetUserByNameAsync("UserUndefined");
                    var panier = await _cartRepository.CreateCartAsync(use.Id);

                    if (panier != null)
                        return Ok(panier);
                    else
                        return StatusCode(StatusCodes.Status500InternalServerError, "Failed to create a cart.");

                }
                else
                {
                    var user = await _cartRepository.GetUserByNameAsync("UserUndefined");
                    var panier =await _cartRepository.GetUserCartAsync(user.Id);
                    //var panier = await _cartRepository.CreateCartAsync(userId);
                    return Ok(panier);
                   
                }

            
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

        [HttpGet("user/{username}")]
        public async Task<ActionResult<Cart>> GetUserCart(string username)
        {
            try
            {
                // a modifier quand on aura le login, changer le string par un guid pour le id du user
                // plus faire le repo et modifier le repo pour qu'il prenne un guid en parametre
                // plus changer le code de la page cart pour qu'il prennent un id au lieu du nom 
                var user = await _cartRepository.GetUserByNameAsync(username);


                // Récupérez le panier de l'utilisateur en fonction de userId
                var cart = await _cartRepository.GetUserCartAsync(user.Id);

                if (cart != null)
                {
                    return Ok(cart);
                }
                else
                {
                    return NotFound(); // Ajustez ce comportement en fonction de vos besoins
                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }
    }
}

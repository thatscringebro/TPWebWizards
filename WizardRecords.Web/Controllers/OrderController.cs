﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WizardRecords.Api.Data.Entities;
using WizardRecords.Api.Domain.Entities;
using WizardRecords.Api.Interfaces;
using WizardRecords.Dtos;
using WizardRecords.Repositories;

namespace WizardRecords.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class OrderController : ControllerBase
   {
      private readonly IAlbumRepository _albumRepository;
      private readonly ICartRepository _cartRepository;
      private readonly UserManager<User> _userManager;

      public OrderController(IAlbumRepository albumRepository, ICartRepository cartRepository, UserManager<User> userManager)
      {
         _cartRepository = cartRepository;
         _albumRepository = albumRepository;
         _userManager = userManager;
      }

      [HttpPost("Order/")]
      public async Task<ActionResult> CreateOrder([FromBody] OrderDto orderDto)
      {
         try
         {
            var cart = await _cartRepository.GetCartByUserIdAsync(orderDto.userId);
            if (cart == null)
            {
               throw new Exception("User not found");
            }
            else
            {
               Order order = _cartRepository.CreateOrder(cart);
               
               if (order != null)
               {
                  order.UpdateFromDto(orderDto);
                  _cartRepository.UpdateOrder(order);
                  return Ok();
               }
               else
               {
                  return NotFound();
               }
            }               
         }
         catch (Exception)
         {
            return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
         }
      }

        [HttpGet("OrderInfo/{userId}")]
        public async Task<IActionResult> GetOrderInfo(Guid userId)
        {
            try
            {
                var cart = await _cartRepository.GetCartByUserIdAsync(userId);
                
                if (cart == null)
                    throw new Exception("Cart not found");

                float totalAvTaxes = 0;
                float totalTaxes = 0;
                float totalApTaxes = 0;

                foreach (var item in cart.CartItems)
                {
                    totalAvTaxes += item.Quantity * item.Album.Price;
                }
                totalTaxes = totalAvTaxes * 0.15f;
                totalApTaxes = totalAvTaxes + totalTaxes;

                return new OkObjectResult(new { totalAvTaxes = totalAvTaxes, totalTaxes = totalTaxes, totalApTaxes = totalApTaxes, items = cart.CartItems });
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            }
        }

      [HttpGet("orders/user/{userId}")]
      public async Task<ActionResult<List<Order>>> GetUserOrders(Guid userId)
      {
         try
         {
            var user = await _cartRepository.GetUserByIdAsync(userId);
            if (user == null)
            {
               throw new Exception("User not found");
            }
            else
            {
               var orders = _cartRepository.GetUserOrders(user.Id);

               if (orders != null)
               {
                  return Ok(orders.OrderByDescending(x => x.OrderId));
               }
               else
               {
                  Console.WriteLine("oh no");
                  return NotFound();
               }
            }               
         }
         catch (Exception)
         {
            return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
         }
      }

      [HttpPut("orders/cancel/{orderId}")]
      public ActionResult CancelOrder(Guid orderId)
      {
         try
         {
            var order = _cartRepository.GetOrderById(orderId);
            if (order == null)
            {
               return NotFound("Order not found");
            }
      
            // Check if the order is in a cancellable state (Confirmed or InPrep)
            if (order.State == OrderState.Confirmée || order.State == OrderState.EnPrep)
            {
               _cartRepository.CancelOrder(order);
      
               return Ok("Order canceled successfully");
            }
            else
            {
               return BadRequest("Order cannot be canceled in its current state");
            }
         }
         catch (Exception)
         {
            return StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
         }
      }

   }
}
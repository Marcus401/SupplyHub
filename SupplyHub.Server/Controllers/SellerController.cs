using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Seller;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;
using SupplyHub.Server.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/seller")]
public class SellerController(UserManager<User> userManager, SupplyhubDbContext context, IAuthService authService) : ControllerBase
{
    private readonly UserManager<User> _userManager = userManager;
	private readonly SupplyhubDbContext _context = context;
	private readonly IAuthService _authService = authService;

	[Authorize(Roles = "Seller")]
	[HttpGet("products-list")]
	public async Task<IActionResult> ProductsList()
	{
		return Ok();
	}

    [Authorize(Roles = "Seller")]
    [HttpPut("add-product")]
    public async Task<IActionResult> AddProduct([FromBody] ProductRequestDto productRequestDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _userManager.FindByNameAsync(User.Identity?.Name);
        if (user == null)
        {
            return Unauthorized(new { Message = "User not found" });
        }

        var userRoles = await _userManager.GetRolesAsync(user);
        if (!userRoles.Contains("Seller"))
        {
            return Unauthorized(new { Message = "Only sellers are authorized to add products" });
        }

        try
        {
            var newProduct = new Product
            {
                UserId = user.Id,
                User = user,
                ProductName = productRequestDto.ProductName, 
                ProductType = productRequestDto.ProductType, 
                StockAvailable = productRequestDto.StockAvailable,
                Price = productRequestDto.Price,
                Unit = productRequestDto.Unit,
                Timeframe = productRequestDto.Timeframe,
                Description = productRequestDto.Description,
                Thumbnail = productRequestDto.Thumbnail,
                Images = productRequestDto.Images,
                FaqQuestions = productRequestDto.FaqQuestions,
                FaqAnswers = productRequestDto.FaqAnswers,
                IsActive = true
            };

            await _context.Products.AddAsync(newProduct);
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            return BadRequest(new { Message = "Failed to create product", Error = ex.Message });
        }
        return Ok();
    }

    [Authorize(Roles = "Seller")]
	[HttpPost("edit-product/{productId}")]
	public async Task<IActionResult> EditProduct([FromRoute] int productId, [FromBody] ProductRequestDto productRequestDto)
	{
		return Ok();
	}

	[Authorize(Roles = "Seller")]
	[HttpPatch("activate-product/{productId}")]
	public async Task<IActionResult> ActivateProduct([FromRoute] int productId, [FromBody] bool activate)
	{
		return Ok();
	}
}
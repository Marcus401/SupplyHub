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
        var user = await _userManager.FindByNameAsync(User.Identity?.Name);
        if (user == null)
        {
            return Unauthorized(new { Message = "User not found" });
        }

        try
        {
            var products = await _context.Products
                .Where(p => p.UserId == user.Id)
                .Select(p => new SellerProductListResponseDtoObj
                {
                    ProductName = p.ProductName,
                    Thumbnail = p.Thumbnail,
                    Description = p.Description,
                    StockAvailable = p.StockAvailable,
                    IsAvailable = p.IsActive,
                    ProductId = p.Id
                })
                .ToListAsync();

            return Ok(products);
        }
        catch (Exception ex)
        {
            return BadRequest(new { Message = "Failed to retrieve products", Error = ex.Message });
        }
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
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _userManager.FindByNameAsync(User.Identity?.Name);
        if (user == null)
        {
            return Unauthorized(new { Message = "User not found" });
        }

        var product = await _context.Products
            .FirstOrDefaultAsync(p => p.Id == productId && p.UserId == user.Id);

        if (product == null)
        {
            return NotFound(new { Message = "Product not found or you don't have permission to edit it" });
        }

        try
        {
            product.ProductName = productRequestDto.ProductName;
            product.ProductType = productRequestDto.ProductType;
            product.StockAvailable = productRequestDto.StockAvailable;
            product.Price = productRequestDto.Price;
            product.Unit = productRequestDto.Unit;
            product.Timeframe = productRequestDto.Timeframe;
            product.Description = productRequestDto.Description;
            product.Thumbnail = productRequestDto.Thumbnail;
            product.Images = productRequestDto.Images;
            product.FaqQuestions = productRequestDto.FaqQuestions;
            product.FaqAnswers = productRequestDto.FaqAnswers;

            _context.Products.Update(product);
            await _context.SaveChangesAsync();

            return Ok(new { Message = "Product updated successfully" });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Message = "Failed to update product", Error = ex.Message });
        }
	}

	[Authorize(Roles = "Seller")]
	[HttpPatch("activate-product/{productId}")]
	public async Task<IActionResult> ActivateProduct([FromRoute] int productId, [FromBody] bool activate)
	{
        var user = await _userManager.FindByNameAsync(User.Identity?.Name);
        if (user == null)
        {
            return Unauthorized(new { Message = "User not found" });
        }

        var product = await _context.Products
            .FirstOrDefaultAsync(p => p.Id == productId && p.UserId == user.Id);

        if (product == null)
        {
            return NotFound(new { Message = "Product not found or you don't have permission to modify it" });
        }

        try
        {
            product.IsActive = activate;
            await _context.SaveChangesAsync();

            string status = activate ? "activated" : "deactivated";
            return Ok(new { Message = $"Product successfully {status}" });
        }
        catch (Exception ex)
        {
            return BadRequest(new { Message = "Failed to update product status", Error = ex.Message });
        }
	}
}
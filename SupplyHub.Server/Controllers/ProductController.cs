using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Product;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using SupplyHub.Server.Data;
using Microsoft.AspNetCore.Http;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/product")]
public class ProductController(SupplyhubDbContext context) : ControllerBase
{
	private readonly SupplyhubDbContext _context = context;
	
	[HttpPost("fetch-product/{productId}")]
	public async Task<IActionResult> FetchProduct([FromRoute] int productId)
	{
	    var product = await _context.Products.FindAsync(productId);
	    
	    if (product == null)
	    {
		    return NotFound(new { Message = "Product not found" });
	    }
	    
		return Ok(new FetchProductResponseDto
		{
			ProductName = product.ProductName,
			ProductType = product.ProductType,
			Thumbnail = product.Thumbnail,
			Images = product.Images,
			StockAvailable = product.StockAvailable,
			Price = product.Price,
			Unit = product.Unit,
			TimeFrame = product.Timeframe,
			Description = product.Description,
			Faq = product.Faq
		});
	}
}
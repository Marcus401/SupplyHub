using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Seller;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/seller")]
public class SellerController : ControllerBase
{	
	[Authorize]
	[HttpPost("products-list")]
	public async Task<IActionResult> ProductsList()
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("add-product")]
	public async Task<IActionResult> AddProduct([FromBody] ProductRequestDto productRequestDto)
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("edit-product/{productId}")]
	public async Task<IActionResult> EditProduct([FromRoute] int productId, [FromBody] ProductRequestDto productRequestDto)
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("activate-product/{productId}")]
	public async Task<IActionResult> ActivateProduct([FromRoute] int productId, [FromBody] bool activate)
	{
		return Ok();
	}
}
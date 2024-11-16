using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Seller;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/seller")]
public class SellerController : ControllerBase
{	
	[Authorize(Roles = "Seller")]
	[HttpPost("products-list")]
	public async Task<IActionResult> ProductsList()
	{
		return Ok();
	}

	[Authorize(Roles = "Seller")]
	[HttpPost("add-product")]
	public async Task<IActionResult> AddProduct([FromBody] ProductRequestDto productRequestDto)
	{
		return Ok();
	}

	[Authorize(Roles = "Seller")]
	[HttpPost("edit-product/{productId}")]
	public async Task<IActionResult> EditProduct([FromRoute] int productId, [FromBody] ProductRequestDto productRequestDto)
	{
		return Ok();
	}

	[Authorize(Roles = "Seller")]
	[HttpPost("activate-product/{productId}")]
	public async Task<IActionResult> ActivateProduct([FromRoute] int productId, [FromBody] bool activate)
	{
		return Ok();
	}
}
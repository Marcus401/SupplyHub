using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Product;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/product")]
public class ProductController : ControllerBase
{
	[HttpPost("fetch-product/{productId}")]
	public async Task<IActionResult> FetchProduct([FromRoute] int productId)
	{
		return Ok();
	}
}
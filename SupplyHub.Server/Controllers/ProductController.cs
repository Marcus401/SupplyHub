using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Product;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
	[HttpPost("fetch-product/{productId}")]
	public async Task<IActionResult> FetchProduct([FromRoute] int productId)
	{
		return Ok();
	}
}
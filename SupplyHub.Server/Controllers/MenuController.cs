using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Menu;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/menu")]
public class MenuController(SupplyhubDbContext context) : ControllerBase
{
	private readonly SupplyhubDbContext _context = context;

	[HttpGet("navbar-info")]
	public async Task<IActionResult> NavbarInfo()
	{
		return Ok();
	}
	
	[Authorize]
	[HttpPost("inquire-user/{userId}")]
	public async Task<IActionResult> InquireUser([FromRoute] int userId)
	{
		return Ok();
	}
	
	[HttpGet("fetch-products-list")]
	public async Task<IActionResult> FetchProductsList()
	{
		return Ok();
	}
	
	[HttpGet("fetch-sellers-list")]
	public async Task<IActionResult> FetchSellersList()
	{
		return Ok();
	}
}
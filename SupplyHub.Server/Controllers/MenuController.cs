using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Menu;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/menu")]
public class MenuController(SupplyhubDbContext context) : ControllerBase
{
	private readonly SupplyhubDbContext _context = context;

	[HttpGet("navbar-info")]
	public async Task<IActionResult> NavbarInfo()
	{
		if (!User.Identity.IsAuthenticated)
		{
			return NoContent();
		}

		var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
		int intUserId = int.Parse(userId);

		var user = await _context.Users.FindAsync(intUserId);
		if (user == null)
		{
			return NotFound(new { Message = "User not found." });
		}

		return Ok(user.ProfilePicture);
	}
	
	[Authorize]
	[HttpPost("inquire-user/{userId}")]
	public async Task<IActionResult> InquireUser([FromRoute] int userId)
	{
		return Ok()
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
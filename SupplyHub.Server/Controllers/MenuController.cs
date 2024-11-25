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
public class MenuController(SupplyhubDbContext context, UserManager<User> userManager) : ControllerBase
{
	private readonly SupplyhubDbContext _context = context;
	private readonly UserManager<User> _userManager = userManager;

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
		return Ok();
	}
	
	[HttpGet("fetch-products-list")]
	public async Task<IActionResult> FetchProductsList()
	{
		var products = await _context.Products.ToListAsync();

		List<MenuProductListResponseDtoObj> menuProductListResponseDtoObjs = products.Select(p => new MenuProductListResponseDtoObj
		{
			Thumbnail = p.Thumbnail,
			ProductId = p.Id,
			Price = p.Price,
			ProductName = p.ProductName,
			Unit = p.Unit
		}).ToList();

		return Ok(menuProductListResponseDtoObjs);
	}
	
	[HttpGet("fetch-sellers-list")]
	public async Task<IActionResult> FetchSellersList()
	{
		var users = await _context.Users.ToListAsync();

		List<MenuSellerListResponseDtoObj> menuSellerListResponseDtoObjs = new List<MenuSellerListResponseDtoObj>();
		foreach (var user in users)
		{
			var userRoles = await _userManager.GetRolesAsync(user);
			if (userRoles.First() == "Seller")
			{
				menuSellerListResponseDtoObjs.Add(new MenuSellerListResponseDtoObj
				{
					ProfilePicture = user.ProfilePicture,
					UserName = user.UserName!,
					Bio = user.Bio,
					UserId = user.Id
				});
			}
		}

		return Ok(menuSellerListResponseDtoObjs);
	}
}
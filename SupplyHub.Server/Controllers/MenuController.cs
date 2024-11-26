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

		var myProfile = await _context.Users.FindAsync(intUserId);
		if (myProfile == null)
		{
			return NotFound(new { Message = "User not found." });
		}

		return File(myProfile.ProfilePicture, "image/png");
	}
	
	[Authorize]
	[HttpPost("inquire-user/{userId}")]
	public async Task<IActionResult> InquireUser([FromRoute] int userId)
	{
		var fromUser = User.FindFirst(ClaimTypes.NameIdentifier);
		if (fromUser == null)
		{
			return Unauthorized();
		}

		var toUser = await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
		if (toUser == null)
		{
			return NotFound();
		}

		var convo = await _context.ConversationUsers.Include(u => u.ConversationEntry).FirstOrDefaultAsync(u => u.UserId == userId);
		if (convo == null) 
		{
			Conversation conversation = new Conversation();
			_context.Conversations.Add(conversation);
			await _context.SaveChangesAsync();

			ConversationUser conversationUser = new ConversationUser
			{
				ConversationId = conversation.Id,
				UserId = userId,
				ConversationEntry = conversation,
				UserEntry = toUser
			};
			_context.ConversationUsers.Add(conversationUser);
			await _context.SaveChangesAsync();
			return Ok(conversation.Id);
		}

		return Ok(convo.ConversationId);
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
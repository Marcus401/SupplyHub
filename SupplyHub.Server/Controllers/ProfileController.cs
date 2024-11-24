using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Profile;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/profile")]
public class ProfileController(SupplyhubDbContext context, UserManager<User> userManager) : ControllerBase
{
	private readonly SupplyhubDbContext _context = context;
	private readonly UserManager<User> _userManager = userManager;

	[HttpGet("fetch-user/{userId}")]
	public async Task<IActionResult> FetchUser([FromRoute] int userId)
	{
		var userProfile = await _context.Users.Where(u => u.Id == userId).FirstOrDefaultAsync();
		if (userProfile == null)
		{
			return NotFound(new { Message = "User not found" });
		}
		var userRoles = await _userManager.GetRolesAsync(userProfile);
		var userRole = userRoles.First();

		object additionalInfo = null;

		if (userRole == "Seller")
		{
			var sellerInfo = await _context.SellerInfos.Where(u => u.UserId == userId).FirstOrDefaultAsync();
			additionalInfo = new SellerInfoDto
			{
				Rating = sellerInfo.Rating,
				Socials = sellerInfo.Socials,
				BusinessType = sellerInfo.BusinessType,
				Location = sellerInfo.Location
			};
		}
		else if (userRole == "User")
		{
			var userInfo = await _context.UserInfos.Where(u => u.UserId == userId).FirstOrDefaultAsync();
			additionalInfo = new UserInfoDto
			{
				Position = userInfo.Position,
				CompanyUserId = userInfo.CompanyUserId
			};
		}

		return Ok(new UserProfileResponseDto
		{
			UserName = userProfile.UserName,
			PhoneNumber = userProfile.PhoneNumber,
			Bio = userProfile.Bio,
			ProfilePicture = userProfile.ProfilePicture,
			CoverPicture = userProfile.CoverPicture,
			Role = userRole,
			AdditionalInfo = additionalInfo
		});
	}

	[Authorize]
	[HttpPut("edit-profile")]
	public async Task<IActionResult> EditProfile([FromBody] EditUserProfileRequestDto editUserProfileRequesteDto)
	{
		return Ok();
	}
}
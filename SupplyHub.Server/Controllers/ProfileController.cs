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
using System.Text.Json;

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

		object userProfileResponseDto = null!;
		if (userRole == "Seller")
		{
			var sellerInfo = await _context.SellerInfos.Where(u => u.UserId == userId).FirstOrDefaultAsync();
			userProfileResponseDto = new UserProfileResponseDto
			{
				UserName = userProfile.UserName!,
				PhoneNumber = userProfile.PhoneNumber,
				Bio = userProfile.Bio,
				ProfilePicture = userProfile.ProfilePicture,
				CoverPicture = userProfile.CoverPicture,
				Role = userRole,
				AdditionalInfo = new Dtos.Profile.SellerInfo
				{
					Rating = sellerInfo!.Rating,
					Socials = sellerInfo.Socials,
					BusinessType = sellerInfo.BusinessType,
					Location = sellerInfo.Location
				}
			};
		}
		else if (userRole == "User")
		{
			var userInfo = await _context.UserInfos.Where(u => u.UserId == userId).FirstOrDefaultAsync();
			userProfileResponseDto = new UserProfileResponseDto
			{
				UserName = userProfile.UserName!,
				PhoneNumber = userProfile.PhoneNumber,
				Bio = userProfile.Bio,
				ProfilePicture = userProfile.ProfilePicture,
				CoverPicture = userProfile.CoverPicture,
				Role = userRole,
				AdditionalInfo = new Dtos.Profile.UserInfo
				{
					Position = userInfo!.Position,
					CompanyUserId = userInfo.CompanyUserId
				}
			};
		}

		return Ok(userProfileResponseDto);
	}

	[Authorize]
	[HttpPut("edit-profile")]
	public async Task<IActionResult> EditProfile([FromBody] EditUserProfileRequestDto editUserProfileRequestDto)
	{
		var userId = User.FindFirst(ClaimTypes.NameIdentifier);
		if (userId == null)
		{
			return Unauthorized("You must log-in to access this feature.");
		}
		var intUserId = int.Parse(userId.Value);
		var userProfile = await _context.Users.Where(u => u.Id == intUserId).FirstOrDefaultAsync();
		if (userProfile == null)
		{
			return NotFound(new { Message = "User not found" });
		}
		var userRoles = await _userManager.GetRolesAsync(userProfile);
		var userRole = userRoles.First();

		userProfile.UserName = editUserProfileRequestDto.UserName;
		userProfile.Bio = editUserProfileRequestDto.Bio;
		userProfile.ProfilePicture = editUserProfileRequestDto.ProfilePicture;
		userProfile.CoverPicture = editUserProfileRequestDto.CoverPicture;
		if (userRole == "Seller")
		{
			var sellerAdditionalInfo = JsonSerializer.Deserialize<Dtos.Profile.SellerInfo>(editUserProfileRequestDto.AdditionalInfo.ToString());
			if (sellerAdditionalInfo != null)
			{
				var sellerInfo = await _context.SellerInfos.Include(u => u.User).FirstOrDefaultAsync(u => u.UserId == intUserId);
				sellerInfo!.Socials = sellerAdditionalInfo.Socials;
				sellerInfo.BusinessType = sellerAdditionalInfo.BusinessType;
				sellerInfo.Location = sellerAdditionalInfo.Location;
			}
		}
		else if (userRole == "User")
		{
			var userAdditionalInfo = JsonSerializer.Deserialize<Dtos.Profile.UserInfo>(editUserProfileRequestDto.AdditionalInfo.ToString());
			if (userAdditionalInfo != null)
			{
				var userInfo = await _context.UserInfos.Include(u => u.User).FirstOrDefaultAsync(u => u.UserId == intUserId);
				userInfo!.Position = userAdditionalInfo.Position;
				userInfo.CompanyUserId = userAdditionalInfo.CompanyUserId;
			}
		}

		await _context.SaveChangesAsync();

		return Ok();
	}
}
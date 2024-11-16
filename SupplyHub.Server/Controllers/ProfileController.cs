using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Profile;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/profile")]
public class ProfileController : ControllerBase
{
	[HttpPost("fetch-user/{userId}")]
	public async Task<IActionResult> FetchUser([FromRoute] int userId)
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("edit-profile")]
	public async Task<IActionResult> EditProfile([FromBody] EditUserProfileRequestDto editUserProfileRequesteDto)
	{
		return Ok();
	}
}
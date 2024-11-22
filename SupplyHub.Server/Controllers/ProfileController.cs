using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Profile;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/profile")]
public class ProfileController(SupplyhubDbContext context) : ControllerBase
{
	SupplyhubDbContext _context = context;

	[HttpGet("fetch-user/{userId}")]
	public async Task<IActionResult> FetchUser([FromRoute] int userId)
	{
		return Ok();
	}

	[Authorize]
	[HttpPut("edit-profile")]
	public async Task<IActionResult> EditProfile([FromBody] EditUserProfileRequestDto editUserProfileRequesteDto)
	{
		return Ok();
	}
}
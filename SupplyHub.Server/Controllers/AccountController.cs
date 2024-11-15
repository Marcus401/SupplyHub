using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController(UserManager<User> userManager) : ControllerBase
{
	private readonly UserManager<User> _userManager = userManager;
	
	[HttpPost("register-user")]
	public async Task<IActionResult> RegisterUser([FromBody] UserSignUpRequestDto userSignUpRequestDto)
	{
		if (string.IsNullOrWhiteSpace(userSignUpRequestDto.Password))
		{
			return BadRequest("Password cannot be null or empty.");
		}
		
		var user = new User
		{
			UserName = userSignUpRequestDto.FirstName + " " + userSignUpRequestDto.LastName,
			Email = userSignUpRequestDto.Email
		};
		
		var result = await _userManager.CreateAsync(user, userSignUpRequestDto.Password);
		
		if (!result.Succeeded)
		{
			return BadRequest(result.Errors);
		}
		
		return Ok();
	}

	[HttpPost("register-seller")]
	public async Task<IActionResult> RegisterSeller([FromBody] SellerSignUpRequestDto sellerSignUpRequestDto)
	{
		return Ok();
	}

	[HttpPost("login")]
	public async Task<IActionResult> Login([FromBody] UserLoginRequestDto userLoginRequestDto)
	{
		return Ok();
	}
}
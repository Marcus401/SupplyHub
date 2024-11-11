using System.Threading.Tasks;
using SupplyHub.Server.Models;
using SupplyHub.Server.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace SupplyHub.Server;

[ApiController]
[Route("api/[controller]")]
public class AccountController(UserManager<User> userManager) : ControllerBase
{
	private readonly UserManager<User> _userManager = userManager;
	
	[HttpPost("registerUser")]
	public async Task<IActionResult> RegisterUser([FromBody] UserRegisterDto userRegisterDto )
	{
		if (string.IsNullOrWhiteSpace(userRegisterDto.Password))
		{
			return BadRequest("Password cannot be null or empty.");
		}
		
		var user = new User
		{
			UserName = userRegisterDto.FirstName + userRegisterDto.LastName,
			Email = userRegisterDto.Email
		};
		
		var result = await _userManager.CreateAsync(user, userRegisterDto.Password);
		
		if (!result.Succeeded)
		{
			return BadRequest(result.Errors);
		}
		
		return Ok();
	}
}
using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Microsoft.AspNetCore.Identity;
using SupplyHub.Server.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace SupplyHub.Server;

[ApiController]
[Route("api/[controller]")]
public class AccountController(UserManager<User> userManager) : ControllerBase
{
	private readonly UserManager<User> _userManager = userManager;
	
	[HttpPost("register")]
	public async Task<IActionResult> RegisterUser([FromBody] UserRegisterDto userRegisterDto )
	{
		var user = new User
		{
			UserName = userRegisterDto.UserName,
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
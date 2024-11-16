using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Account;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SupplyHub.Server.Data;
using SupplyHub.Server.Services;
using System.Security.Claims;
using SupplyHub.Server.Interfaces;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/account")]
public class AccountController(UserManager<User> userManager, SignInManager<User> signInManager, SupplyhubDbContext context, IAuthService authService) : ControllerBase
{
	private readonly UserManager<User> _userManager = userManager;
	private readonly SignInManager<User> _signInManager = signInManager;
	private readonly SupplyhubDbContext _context = context;
	private readonly IAuthService _authService = authService;
	
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
		
		var info = new UserInfo
		{
			UserId = user.Id,
			User = user,
			CompanyUserId = null,
			CompanyUser = null,
		};
		
		await _context.UserInfos.AddAsync(info);
		
		await _context.SaveChangesAsync();
		
		var token = _authService.CreateJwtToken(user);
		return Ok(new { token });
	}

	[HttpPost("register-seller")]
	public async Task<IActionResult> RegisterSeller([FromBody] SellerSignUpRequestDto sellerSignUpRequestDto)
	{
		if (string.IsNullOrWhiteSpace(sellerSignUpRequestDto.Password))
		{
			return BadRequest("Password cannot be null or empty.");
		}
		
		var user = new User
		{
			UserName = sellerSignUpRequestDto.FirstName + " " + sellerSignUpRequestDto.LastName,
			Email = sellerSignUpRequestDto.Email
		};
		
		var result = await _userManager.CreateAsync(user, sellerSignUpRequestDto.Password);
		
		if (!result.Succeeded)
		{
			return BadRequest(result.Errors);
		}
		
		var info = new SellerInfo
		{
			UserId = user.Id,
			User = user,
			Location = sellerSignUpRequestDto.Location,
			Rating = 0
		};
		
		await _context.SellerInfos.AddAsync(info);
		
		await _context.SaveChangesAsync();
		
		var token = _authService.CreateJwtToken(user);
		return Ok(new { token });
	}

	[HttpPost("login")]
	public async Task<IActionResult> Login([FromBody] UserLoginRequestDto userLoginRequestDto)
	{
		if (!ModelState.IsValid)
		{
			return BadRequest(ModelState);
		}
		
                var user = await _userManager.FindByEmailAsync(userLoginRequestDto.Email);
                if (user == null || !await _userManager.CheckPasswordAsync(user, userLoginRequestDto.Password))
                {
	                return Unauthorized("Invalid email or password."); // Secure and generic error message.
                }
                
                var token = _authService.CreateJwtToken(user);
                return Ok(new { token });
	}
}
using SupplyHub.Server.Models;                     // Your User model and other models
using System.IdentityModel.Tokens.Jwt;             // For JwtSecurityTokenHandler and JwtSecurityToken
using Microsoft.IdentityModel.Tokens;              // For TokenValidationParameters and SigningCredentials
using System.Text;                                 // For Encoding
using System.Security.Claims;                      // For Claims and ClaimTypes
using Microsoft.AspNetCore.Identity;               // For UserManager, SignInManager, and RoleManager
using System.Threading.Tasks;                      // For Task-based async methods
using SupplyHub.Server.Interfaces;                 // For IAuthService
using SupplyHub.Server.Helpers;
using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;

namespace SupplyHub.Server.Services;
public class AuthService(UserManager<User> userManager, IHttpContextAccessor httpContextAccessor, IConfiguration configuration) : IAuthService
{
	private readonly UserManager<User> _userManager = userManager;
	private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;
	private readonly IConfiguration _configuration = configuration;

	public async Task<string> CreateJwtToken(User user)
	{
		var handler = new JwtSecurityTokenHandler();
		var privateKey = PrivateKeyHelper.GetPrivateKey();
		
		var credentials = new SigningCredentials(
			new SymmetricSecurityKey(privateKey),
			SecurityAlgorithms.HmacSha256);
		if (string.IsNullOrEmpty(user.UserName))
		{
			throw new ArgumentNullException("UserName cannot be null or empty");
		}

		var claims = new List<Claim>
		{
			new Claim(ClaimTypes.Name, user.UserName),  
			new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),  
		};
		
		var roles = await _userManager.GetRolesAsync(user);
		claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));
		
		var tokenDescriptor = new SecurityTokenDescriptor
		{
			Subject = new ClaimsIdentity(claims),
			Issuer = _configuration["JwtSettings:Issuer"],
			Audience = _configuration["JwtSettings:Audience"],
			Expires = DateTime.Now.AddMonths(2),
			SigningCredentials = credentials
		};

		var token = handler.CreateToken(tokenDescriptor);	
		return handler.WriteToken(token);
	}

	public async Task<string?> GetClaimValue(string claimType)
	{
		var user = _httpContextAccessor.HttpContext?.User;

		if (user == null)
		{
			return null;  
		}
		
		var appUser = await _userManager.GetUserAsync(user);
		
		if (appUser == null)
		{
			return null;
		}
		
		var claims = await _userManager.GetClaimsAsync(appUser);
		var claim = claims.FirstOrDefault(c => c.Type == claimType);
		return claim?.Value;
	}


}
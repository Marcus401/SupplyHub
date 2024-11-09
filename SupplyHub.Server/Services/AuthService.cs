using SupplyHub.Server.Models;                     // Your User model and other models
using Azure.Identity;                              // For DefaultAzureCredential
using Azure.Core;                                  // For SecretClientOptions and RetryMode
using Azure.Security.KeyVault.Secrets;             // For SecretClient and KeyVaultSecret
using System.IdentityModel.Tokens.Jwt;             // For JwtSecurityTokenHandler and JwtSecurityToken
using Microsoft.IdentityModel.Tokens;              // For TokenValidationParameters and SigningCredentials
using System.Text;                                 // For Encoding
using System.Security.Claims;                      // For Claims and ClaimTypes
using Microsoft.AspNetCore.Identity;               // For UserManager, SignInManager, and RoleManager
using System.Threading.Tasks;                      // For Task-based async methods
using SupplyHub.Server.Interfaces;                 // For IAuthService

namespace SupplyHub.Server.Services;
public class AuthService(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole<int>> roleManager) : IAuthService
{
	private readonly UserManager<User> _userManager = userManager;
	private readonly SignInManager<User> _signInManager = signInManager;
	private readonly RoleManager<IdentityRole<int>> _roleManager = roleManager;

	public async Task<string> CreateToken(User user)
	{
		var handler = new JwtSecurityTokenHandler();
		var privateKey = Encoding.UTF8.GetBytes(getAzureSecret());
		
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
			Expires = DateTime.Now.AddHours(1),
			SigningCredentials = credentials
		};

		var token = handler.CreateToken(tokenDescriptor);	
		return handler.WriteToken(token);
	}

	public async Task<string> LoginAsync(string username, string password)
	{
		var user = await _userManager.FindByNameAsync(username);
		
		if (user != null && await _userManager.CheckPasswordAsync(user, password))
		{
		   // Code to generate a JWT token can go here
		    return "JWT token string"; // to be created
		}
		return "";
	}

	public async Task<bool> RegisterAsync(string username, string password, string role)
	{
		var user = new User { UserName = username };
		var result = await _userManager.CreateAsync(user, password);
		if (result.Succeeded)
		{
		    if (await _roleManager.RoleExistsAsync(role))
		    {
		        await _userManager.AddToRoleAsync(user, role);
		    }
		    return true;
		}
		return false;
	}

	private string getAzureSecret()
	{
		SecretClientOptions options = new SecretClientOptions()
		{
			Retry =
			{
				Delay= TimeSpan.FromSeconds(2),
				MaxDelay = TimeSpan.FromSeconds(16),
				MaxRetries = 5,
				Mode = RetryMode.Exponential
			}
		};
		
		var client = new SecretClient(new Uri("https://supplyhub-user-auth.vault.azure.net/"), new DefaultAzureCredential(),options);
		KeyVaultSecret secret = client.GetSecret("supplyhub-auth-private-key");
		return secret.Value;
	}
}
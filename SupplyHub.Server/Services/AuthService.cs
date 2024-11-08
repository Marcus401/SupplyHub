using SupplyHub.Server.Models;
using Azure.Identity;
using Azure.Core;
using Azure.Security.KeyVault.Secrets;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace Services;
public class AuthService(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole<int>> roleManager)
{
	private readonly UserManager<User> _userManager = userManager;
    private readonly SignInManager<User> _signInManager = signInManager;
    private readonly RoleManager<IdentityRole<int>> _roleManager = roleManager;

	public string CreateJwtToken(User user)
	{
		var handler = new JwtSecurityTokenHandler();
		var privateKey = Encoding.UTF8.GetBytes(getAzureSecret());
		
		var credentials = new SigningCredentials(
			new SymmetricSecurityKey(privateKey),
			SecurityAlgorithms.HmacSha256);
		
		var claims = new[]
		{
			new Claim(ClaimTypes.Name, user.Username),  
			new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),  
			new Claim(ClaimTypes.Role, "User"),  // Default role (or fetch from the database) 
		};

		var tokenDescriptor = new JwtSecurityToken(
            expires: DateTime.Now.AddHours(1),
            claims: claims,
            signingCredentials: credentials
        );

        var token = handler.CreateToken(tokenDescriptor);	
		return token;
	}

	public async Task<string> LoginAsync(string username, string password)
    {
        var user = await _userManager.FindByNameAsync(username);
        if (user != null && await _userManager.CheckPasswordAsync(user, password))
    	{
           // Code to generate a JWT token can go here
            return "JWT token string"; // to be created
        }
        return null;
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
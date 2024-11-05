using SupplyHub.Server.Models;
using Azure.Identity;
using Azure.Core;
using Azure.Security.KeyVault.Secrets;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace Services;
public class AuthService
{
	public string Create(Account account)
	{
		var handler = new JwtSecurityTokenHandler();
		var privateKey = Encoding.UTF8.GetBytes(getAzureSecret());
		
		var credentials = new SigningCredentials(
			new SymmetricSecurityKey(privateKey),
			SecurityAlgorithms.HmacSha256);
		return "";
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
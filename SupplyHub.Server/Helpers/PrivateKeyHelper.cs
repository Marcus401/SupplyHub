using Azure.Identity;                              // For DefaultAzureCredential
using Azure.Core;                                  // For SecretClientOptions and RetryMode
using Azure.Security.KeyVault.Secrets;             // For SecretClient and KeyVaultSecret
using System.Text;

namespace SupplyHub.Server.Helpers;
public static class PrivateKeyHelper
{
	public static byte[] GetPrivateKey()
	{
		// SecretClientOptions options = new SecretClientOptions()
		// {
		// 	Retry =
		// 	{
		// 		Delay= TimeSpan.FromSeconds(2),
		// 		MaxDelay = TimeSpan.FromSeconds(16),
		// 		MaxRetries = 5,
		// 		Mode = RetryMode.Exponential
		// 	}
		// };
		//
		// var client = new SecretClient(new Uri("https://supplyhub-user-auth.vault.azure.net/"), new DefaultAzureCredential(),options);
		// KeyVaultSecret secret = client.GetSecret("supplyhub-auth-private-key");
		// return Encoding.UTF8.GetBytes(secret.Value);
		return Encoding.UTF8.GetBytes("78506EC7BFF377B32EC4D49C91C422B83EB1C1CE2C75D6F6471B442E08326B09");
	}
}
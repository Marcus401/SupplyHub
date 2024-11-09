using SupplyHub.Server.Models;

namespace SupplyHub.Server.Interfaces;

public interface IAuthService
{
	Task<string> CreateToken(User user);
	Task<string> LoginAsync(string username, string password);
	Task<bool> RegisterAsync(string username, string password, string role);
}
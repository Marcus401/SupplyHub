using SupplyHub.Server.Models;

namespace SupplyHub.Server.Interfaces;

public interface IAuthService
{
	Task<string> CreateJwtToken(User user);
	Task<string?> GetClaimValue(string claimType);
}
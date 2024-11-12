using Microsoft.AspNetCore.Identity;

namespace SupplyHub.Server.Models;

public class User : IdentityUser<int>
{
	public string? Bio { get; set; }
	public byte[]? ProfilePicture { get; set; }
	public byte[]? CoverPicture { get; set; }
}
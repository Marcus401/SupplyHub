using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace SupplyHub.Server.Models;

public class User : IdentityUser<int>
{
	[MaxLength(255)]
	public string? Bio { get; set; }
	[MaxLength(255)]
	public string? ProfilePicture { get; set; }
	[MaxLength(255)]
	public string? CoverPicture { get; set; }
}
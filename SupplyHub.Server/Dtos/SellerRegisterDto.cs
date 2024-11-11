using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Dtos;

public class SellerRegisterDto
{
	[Required]
	public string? FirstName { get; set; }
	
	[Required]
	public string? LastName { get; set; }
	
	[Required]
	[EmailAddress]
	public string? Email { get; set; }
	
	[Required]
	[MinLength(6)]
	public string? Password { get; set; }
	
	[Required]
	public string? Location { get; set; }
}
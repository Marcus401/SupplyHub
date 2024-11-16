namespace Dtos.Account;

public class SellerSignUpRequestDto
{
	public required string FirstName { get; set; }
	public required string LastName { get; set; }
	public required string Email { get; set; }
	public required string Password { get; set; }
	public required string Location { get; set; }
}
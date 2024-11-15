namespace Dtos.Profile;

public class EditUserProfileResponseDto
{
	public required string UserName { get; set; }
	public int? PhoneNumber { get; set; }
	public string? Bio { get; set; }
	public byte[]? ProfilePicture { get; set; }
	public byte[]? CoverPicture { get; set; }
	public required string Role { get; set; }
	public required object AdditionalInfo { get; set; }
}
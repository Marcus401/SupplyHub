namespace Dtos.Profile;

public class EditUserProfileRequestDto
{
	public required string UserName { get; set; }
	public string? bio { get; set; }
	public byte[]? ProfilePicture { get; set; }
	public byte[]? CoverPicture { get; set; }
}
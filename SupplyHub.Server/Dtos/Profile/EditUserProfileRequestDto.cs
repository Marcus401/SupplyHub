namespace Dtos.Profile;

public class EditUserProfileRequestDto
{
	public required string UserName { get; set; }
	public string? Bio { get; set; }
	public string? ProfilePicture { get; set; }
	public string? CoverPicture { get; set; }
	public required object AdditionalInfo { get; set; }
}
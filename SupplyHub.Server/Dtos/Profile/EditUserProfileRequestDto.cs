namespace Dtos.Profile;

public class EditUserProfileRequestDto<T>
{
	public required string UserName { get; set; }
	public string? Bio { get; set; }
	public byte[]? ProfilePicture { get; set; }
	public byte[]? CoverPicture { get; set; }
	public required T AdditionalInfo { get; set; }
}
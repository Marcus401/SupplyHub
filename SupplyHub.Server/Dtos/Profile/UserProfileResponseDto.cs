namespace Dtos.Profile;

public class EditUserProfileResponseDto
{
	public string UserName { get; set; }
	public int PhoneNumber { get; set; }
	public string Bio { get; set; }
	public byte[] ProfilePicture { get; set; }
	public byte[] CoverPicture { get; set; }
	public string Role { get; set; }
	public object AdditionalInfo { get; set; }
}
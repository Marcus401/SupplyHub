namespace Dtos.Menu;

public class MenuSellerListResponseDtoObj
{
	public byte[]? ProfilePicture { get; set; }
	public required string UserName { get; set; }
	public string? Bio { get; set; }
	public required int UserId { get; set; }
}
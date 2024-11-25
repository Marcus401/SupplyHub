namespace Dtos.Menu;

public class MenuProductListResponseDtoObj
{
	public byte[]? Thumbnail { get; set; }
	public required int ProductId { get; set; }
	public required decimal Price { get; set; }
	public required string ProductName { get; set; }
	public string? Unit { get; set; }
}
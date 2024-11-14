namespace Dtos.Menu;

public class MenuProductListResponseDtoObj
{
	public byte[] Thumbnail { get; set; }
	public int ProductId { get; set; }
	public int Price { get; set; }
	public string ProductName { get; set; }
	public string Unit { get; set; }
}
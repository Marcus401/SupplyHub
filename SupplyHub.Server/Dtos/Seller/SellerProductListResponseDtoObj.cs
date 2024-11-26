namespace Dtos.Seller;

public class SellerProductListResponseDtoObj
{
	public required string ProductName { get; set; }
	public byte[]? Thumbnail { get; set; }	
	public string? Description { get; set; }
	public int? StockAvailable { get; set; }
	public required int ProductId { get; set; }
	public required bool IsAvailable { get; set; }
}
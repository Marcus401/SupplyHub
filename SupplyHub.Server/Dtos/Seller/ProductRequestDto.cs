namespace Dtos.Seller;

public class ProductRequestDto
{
	public byte[]? Thumbnail { get; set; }
	public byte[][]? Images { get; set; }
	public required string ProductName { get; set; }
	public required string ProductType { get; set; }
	public int StockAvailable { get; set; }
	public decimal Price { get; set; }
	public string? Unit { get; set; }
	public string? Timeframe { get; set; }
	public string? Description { get; set; }
	public string? Faq { get; set; }
}
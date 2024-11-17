namespace Dtos.Product;

public class FetchProductResponseDto
{
	public required string ProductName { get; set; }
	public string? ProductType { get; set; }
	public byte[]? Thumbnail { get; set; }
	public byte[][]? Images { get; set; }
	public int? StockAvailable { get; set; }
	public required decimal Price { get; set; }
	public string? Unit { get; set; }
	public string? TimeFrame { get; set; }
	public string? Description { get; set; }
	public string[]? FaqQuestions { get; set; }
	public string[]? FaqAnswers { get; set; }
}
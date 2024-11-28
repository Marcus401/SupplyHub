namespace Dtos.Seller;

public class ProductRequestDto
{
	public string? Thumbnail { get; set; }
	public string[]? Images { get; set; }
	public required string ProductName { get; set; }
	public required string ProductType { get; set; }
	public int StockAvailable { get; set; }
	public decimal Price { get; set; }
	public string? Unit { get; set; }
	public string? Timeframe { get; set; }
	public string? Description { get; set; }
	public string[]? FaqQuestions { get; set; }
	public string[]? FaqAnswers { get; set; }
}
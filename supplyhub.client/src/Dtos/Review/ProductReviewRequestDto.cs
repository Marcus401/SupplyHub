namespace Dtos.Review;

public class ProductReviewRequestDto
{
	public required int Rating { get; set; }
	public string? ReviewText { get; set; }
}
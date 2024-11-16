namespace Dtos.Review;

public class SellerReviewRequestDto
{
	public required int Rating { get; set; }
	public string? ReviewText { get; set; }
}
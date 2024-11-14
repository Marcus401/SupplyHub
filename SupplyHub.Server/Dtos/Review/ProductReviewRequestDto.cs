namespace Dtos.Review;

public class ProductReviewRequestDto
{
	public int ProductId { get; set; }
    public int ReviewerUserId { get; set; }
	public int Rating { get; set; }
	public string ReviewText { get; set; }
}
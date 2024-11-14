namespace Dtos.Review;

public class SellerReviewRequestDto
{
	public int SellerId { get; set; }
    public int ReviewerUserId { get; set; }
	public int Rating { get; set; }
	public string ReviewText { get; set; }
}
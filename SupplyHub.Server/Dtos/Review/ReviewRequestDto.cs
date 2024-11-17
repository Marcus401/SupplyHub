namespace Dtos.Review;

public class ReviewRequestDto
{
	public required int Rating { get; set; }
	public string? ReviewText { get; set; }
}
using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Review;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/review")]
public class ReviewController(UserManager<User> userManager, SupplyhubDbContext context) : ControllerBase
{

    private readonly UserManager<User> _userManager = userManager;
    private readonly SupplyhubDbContext _context = context;

    [Authorize]
	[HttpPost("review-seller/{sellerUserId}")]
	public async Task<IActionResult> ReviewSeller([FromRoute] int sellerUserId, [FromBody] ReviewRequestDto reviewRequestDto)
	{
        var reviewerUserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

        if (reviewerUserId == sellerUserId)
        {
            return BadRequest("Users cannot review themselves.");
        }

        var seller = await _userManager.FindByIdAsync(sellerUserId.ToString());
        if (seller == null)
        {
            return NotFound("Seller not found.");
        }

        var isSellerRole = await _userManager.IsInRoleAsync(seller, "Seller");
        if (!isSellerRole)
        {
            return BadRequest("The specified user is not a seller.");
        }

        if (reviewRequestDto.Rating < 1 || reviewRequestDto.Rating > 5)
        {
            return BadRequest("Rating must be between 1 and 5.");
        }

        var existingReview = await _context.SellerReviews
            .FirstOrDefaultAsync(r => r.ReviewerUserId == reviewerUserId && r.SellerUserId == sellerUserId);

        if (existingReview != null)
        {
            existingReview.Rating = reviewRequestDto.Rating;
            existingReview.ReviewText = reviewRequestDto.ReviewText;
        }
        else
        {
            var review = new SellerReview
            {
                SellerUserId = sellerUserId,
                ReviewerUserId = reviewerUserId,
                Rating = reviewRequestDto.Rating,
                ReviewText = reviewRequestDto.ReviewText,
                SellerUser = seller,
                ReviewerUser = await _userManager.FindByIdAsync(reviewerUserId.ToString())!
            };

            await _context.SellerReviews.AddAsync(review);
        }

        var sellerInfo = await _context.SellerInfos
            .FirstOrDefaultAsync(s => s.UserId == sellerUserId);

        if (sellerInfo != null)
        {
            var allReviews = await _context.SellerReviews
                .Where(r => r.SellerUserId == sellerUserId)
                .ToListAsync();

            var averageRating = allReviews.Any() ? (int)Math.Round(allReviews.Average(r => r.Rating)) : 0;
            sellerInfo.Rating = averageRating;
        }

        await _context.SaveChangesAsync();

        return Ok();
    }

	[Authorize]
	[HttpPost("review-product/{productId}")]
	public async Task<IActionResult> ReviewProduct([FromRoute] int productId, [FromBody] ReviewRequestDto reviewRequestDto)
	{
        var reviewerUserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

        if (reviewRequestDto.Rating < 1 || reviewRequestDto.Rating > 5)
        {
            return BadRequest("Rating must be between 1 and 5.");
        }

        var reviewerUser = await _userManager.FindByIdAsync(reviewerUserId.ToString());
        if (reviewerUser == null)
        {
            return BadRequest("Reviewer user not found.");
        }

        var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == productId);
        if (product == null)
        {
            return NotFound("Product not found.");
        }

        var existingReview = await _context.ProductReviews
            .FirstOrDefaultAsync(r => r.ReviewerUserId == reviewerUserId && r.ProductId == productId);

        if (existingReview != null)
        {
            existingReview.Rating = reviewRequestDto.Rating;
            existingReview.ReviewText = reviewRequestDto.ReviewText;
        }
        else
        {
            var review = new ProductReview
            {
                Product = product,
                ProductId = productId,             
                ReviewerUserId = reviewerUserId,   
                Rating = reviewRequestDto.Rating,
                ReviewText = reviewRequestDto.ReviewText,
                ReviewerUser = reviewerUser
            };

            await _context.ProductReviews.AddAsync(review);
        }

        var allReviews = await _context.ProductReviews
            .Where(r => r.ProductId == productId)
            .ToListAsync();

        var averageRating = allReviews.Any() ? allReviews.Average(r => r.Rating) : 0.0;

        await _context.SaveChangesAsync();

        return Ok();
    }
}
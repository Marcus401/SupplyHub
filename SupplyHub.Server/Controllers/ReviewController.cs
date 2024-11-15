using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Review;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ReviewController : ControllerBase
{
	[Authorize]
	[HttpPost("review-seller/{sellerUserId}")]
	public async Task<IActionResult> ReviewSeller([FromRoute] int sellerUserId, [FromBody] SellerReviewRequestDto reviewSellerRequestDto)
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("review-product/{productId}")]
	public async Task<IActionResult> ReviewProduct([FromRoute] int productId, [FromBody] ProductReviewRequestDto reviewProductRequestDto)
	{
		return Ok();
	}
}
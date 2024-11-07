using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class SellerReview
{
	[Key]
	public int Id { get; set;}
	public int SellerUserId { get; set;  }
	public int ReviewerUserId { get; set;}
	public int Rating { get; set;}
	public string? ReviewText { get; set;}
	public required User SellerUser { get; set;}
	public required User ReviewerUser { get; set;}
}
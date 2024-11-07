using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;
public class ProductReview
{
	[Key]
	public int Id { get; set;}
	public int ProductId { get; set;  }
	public int ReviewerUserId { get; set;}
	public int Rating { get; set;}
	public string ReviewText { get; set;}
}
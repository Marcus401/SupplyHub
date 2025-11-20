using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Product
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    [MaxLength(255)]
    public string? Thumbnail { get; set; }
    public List<string>? Images { get; set; }
    [MaxLength(255)]
    public required string ProductName { get; set; }
    [MaxLength(255)]
    public required string ProductType { get; set; }
    public int StockAvailable { get; set; }
    public decimal Price { get; set; }
    [MaxLength(255)]
    public string? Unit { get; set; }
    [MaxLength(255)]
    public string? Timeframe { get; set; }
    [MaxLength(255)]
    public string? Description { get; set; }
    public string[]? FaqQuestions { get; set; }
    public string[]? FaqAnswers { get; set; }
    public bool IsActive { get; set; }
    public required User User { get; set; }
}

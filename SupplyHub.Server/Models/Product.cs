using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Product
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public byte[]? Thumbnail { get; set; }
    public byte[][]? Images { get; set; }
    public required string ProductName { get; set; }
    public required string ProductType { get; set; }
    public int StockAvailable { get; set; }
    public decimal Price { get; set; }
    public string? Unit { get; set; }
    public string? Timeframe { get; set; }
    public string? Description { get; set; }
    public string[]? FaqQuestions { get; set; }
    public string[]? FaqAnswers { get; set; }
    public bool IsActive { get; set; }
    public required User User { get; set; }
}

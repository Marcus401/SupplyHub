using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class SellerInfo
{
    public int UserId { get; set; }
    public int Rating { get; set; }
    public string? Socials { get; set; }
    public string? BusinessType { get; set; }
    public required User User { get; set; }
}

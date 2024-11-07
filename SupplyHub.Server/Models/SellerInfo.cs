using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models;

public class SellerInfo
{
    [Key]
    [ForeignKey("Id")]
    public int SellerId { get; set; }
    public int Rating { get; set; }
    public string Socials { get; set; }
    public string BusinessType { get; set; }
}

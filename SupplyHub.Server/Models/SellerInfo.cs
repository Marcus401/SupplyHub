using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models;

public class SellerInfo
{
    [Key]
    public int CompanyId { get; set; }
    public string CompanyName { get; set; }
    public int Rating { get; set; }
    public ICollection<int> Products { get; set; } = new List<int>();
    public string Socials { get; set; }
    public string Bio { get; set; }
    public string BusinessType { get; set; }
}

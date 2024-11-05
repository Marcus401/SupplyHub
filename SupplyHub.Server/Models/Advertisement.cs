using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Advertisement
{
    [Key]
    public int AdvertisementId { get; set; }
    [ForeignKey("UserId")]
    public int UserId { get; set; }
    [ForeignKey("ProductId")]
    public int ProductId { get; set; }
    public byte[] AdvertisementFile { get; set; } = null!;
}

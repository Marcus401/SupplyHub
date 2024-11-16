using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Advertisement
{
    [Key]
    public int Id { get; set; }
    public int UserId { get; set; }
    public int ProductId { get; set; }
    public byte[] AdvertisementFile { get; set; } = null!;
    public required User User { get; set; } 
    public required Product Product { get; set; }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class UserInfo
{
    public int UserId { get; set; }
    public int? CompanyUserId { get; set; }
    public string? Position { get; set; }
    public required User User { get; set; }
    public User? CompanyUser { get; set; }
}

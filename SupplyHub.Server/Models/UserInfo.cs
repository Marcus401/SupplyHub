using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class UserInfo
{
    [Key]
    [ForeignKey("Id")]
    public int UserId { get; set; }
    [ForeignKey("CompanyUserId")]
    public int CompanyUserId { get; set; }
    public string Position { get; set; }
}

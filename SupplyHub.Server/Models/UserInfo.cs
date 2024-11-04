using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

[Table("UserInfo")]
public partial class UserInfo
{
    [Key]
    [Column("UserID")]
    public int UserId { get; set; }

    [Column("CompanyUserID")]
    public int CompanyUserId { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string Position { get; set; } = null!;

    [InverseProperty("User")]
    public virtual ICollection<Advertisement> Advertisements { get; set; } = new List<Advertisement>();

    [InverseProperty("User")]
    public virtual ICollection<ChatProfile> ChatProfiles { get; set; } = new List<ChatProfile>();

    [ForeignKey("CompanyUserId")]
    [InverseProperty("UserInfos")]
    public virtual SellerInfo CompanyUser { get; set; } = null!;

    [InverseProperty("User")]
    public virtual ICollection<Message> Messages { get; set; } = new List<Message>();

    [InverseProperty("User")]
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();

    [ForeignKey("UserId")]
    [InverseProperty("UserInfo")]
    public virtual Account User { get; set; } = null!;
}

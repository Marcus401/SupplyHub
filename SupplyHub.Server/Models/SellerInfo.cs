using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

[Table("SellerInfo")]
public partial class SellerInfo
{
    [Key]
    [Column("CompanyID")]
    public int CompanyId { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string CompanyName { get; set; } = null!;

    public int? Rating { get; set; }

    public int? Products { get; set; }

    [StringLength(100)]
    [Unicode(false)]
    public string? Socials { get; set; }

    [StringLength(300)]
    [Unicode(false)]
    public string? Bio { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? BusinessType { get; set; }

    [ForeignKey("Products")]
    [InverseProperty("SellerInfos")]
    public virtual Product? ProductsNavigation { get; set; }

    [InverseProperty("CompanyUser")]
    public virtual ICollection<UserInfo> UserInfos { get; set; } = new List<UserInfo>();
}

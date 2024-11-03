using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

public partial class SellerProfile
{
    [Key]
    [Column("CompanyID")]
    public int CompanyId { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string CompanyName { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Email { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Password { get; set; } = null!;

    public int? ContactNumber { get; set; }

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

    [Column(TypeName = "image")]
    public byte[]? Picture { get; set; }

    [Column("ChatUserID")]
    public int ChatUserId { get; set; }

    [InverseProperty("Company")]
    public virtual ICollection<Advertisement> Advertisements { get; set; } = new List<Advertisement>();

    [ForeignKey("ChatUserId")]
    [InverseProperty("SellerProfiles")]
    public virtual UserChatId ChatUser { get; set; } = null!;

    [ForeignKey("Products")]
    [InverseProperty("SellerProfiles")]
    public virtual Product? ProductsNavigation { get; set; }

    [InverseProperty("AffiliatedCompanyNavigation")]
    public virtual ICollection<UserProfile> UserProfiles { get; set; } = new List<UserProfile>();
}

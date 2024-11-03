using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

public partial class UserProfile
{
    [Key]
    [Column("UserID")]
    public int UserId { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string Name { get; set; } = null!;

    [StringLength(50)]
    [Unicode(false)]
    public string Email { get; set; } = null!;

    [MaxLength(50)]
    public byte[] Password { get; set; } = null!;

    public int? ContactNumber { get; set; }

    [StringLength(50)]
    [Unicode(false)]
    public string? Position { get; set; }

    public int? AffiliatedCompany { get; set; }

    [Unicode(false)]
    public string? Bio { get; set; }

    [Column(TypeName = "image")]
    public byte[]? Picture { get; set; }

    [Column("ChatUserID")]
    public int ChatUserId { get; set; }

    [ForeignKey("AffiliatedCompany")]
    [InverseProperty("UserProfiles")]
    public virtual SellerProfile? AffiliatedCompanyNavigation { get; set; }

    [ForeignKey("ChatUserId")]
    [InverseProperty("UserProfiles")]
    public virtual UserChatId ChatUser { get; set; } = null!;
}

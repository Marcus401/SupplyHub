using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

[Table("Account")]
public partial class Account
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

    [StringLength(50)]
    [Unicode(false)]
    public string Role { get; set; } = null!;

    [InverseProperty("User")]
    public virtual UserInfo? UserInfo { get; set; }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

[Table("Account")]
public partial class Account : IdentityUser<int>
{
    [Unicode(false)]
    public string? Bio { get; set; }

    [Column(TypeName = "image")]
    public byte[]? Picture { get; set; }
}

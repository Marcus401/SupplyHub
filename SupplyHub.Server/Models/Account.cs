using Microsoft.AspNetCore.Identity;

namespace SupplyHub.Server.Models;

public class Account : IdentityUser<int>
{
    public string Bio { get; set; }
    public byte[] Picture { get; set; }
}

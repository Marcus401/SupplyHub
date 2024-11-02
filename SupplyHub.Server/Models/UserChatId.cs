using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

[Table("UserChatIDs")]
public partial class UserChatId
{
    [Key]
    [Column("ChatUserID")]
    public int ChatUserId { get; set; }

    [Column("ProfileID")]
    public int ProfileId { get; set; }

    public bool IsSeller { get; set; }

    [InverseProperty("ChatUser")]
    public virtual ICollection<ChatProfile> ChatProfiles { get; set; } = new List<ChatProfile>();

    [InverseProperty("ChatUser")]
    public virtual ICollection<Message> Messages { get; set; } = new List<Message>();

    [InverseProperty("ChatUser")]
    public virtual ICollection<SellerProfile> SellerProfiles { get; set; } = new List<SellerProfile>();

    [InverseProperty("ChatUser")]
    public virtual ICollection<UserProfile> UserProfiles { get; set; } = new List<UserProfile>();
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public partial class ChatProfile
{
    [Key]
    [Column("ConversationID")]
    public int ConversationId { get; set; }

    [Column("UserID")]
    public int UserId { get; set; }

    [InverseProperty("Conversation")]
    public virtual ICollection<Message> Messages { get; set; } = new List<Message>();

    [ForeignKey("UserId")]
    [InverseProperty("ChatProfiles")]
    public virtual UserInfo User { get; set; } = null!;
}

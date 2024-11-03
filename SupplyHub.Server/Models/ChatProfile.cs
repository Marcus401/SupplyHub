using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public partial class ChatProfile
{
    [Key]
    [Column("ConversationID")]
    public int ConversationId { get; set; }

    [Column("ChatUserID")]
    public int ChatUserId { get; set; }

    [ForeignKey("ChatUserId")]
    [InverseProperty("ChatProfiles")]
    public virtual UserChatId ChatUser { get; set; } = null!;

    [InverseProperty("Conversation")]
    public virtual ICollection<Message> Messages { get; set; } = new List<Message>();
}

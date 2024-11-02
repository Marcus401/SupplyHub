using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

public partial class Message
{
    [Key]
    [Column("MessageID")]
    public int MessageId { get; set; }

    [Column("ConversationID")]
    public int? ConversationId { get; set; }

    [Column("ChatUserID")]
    public int? ChatUserId { get; set; }

    [StringLength(500)]
    [Unicode(false)]
    public string? Text { get; set; }

    [ForeignKey("ChatUserId")]
    [InverseProperty("Messages")]
    public virtual UserChatId? ChatUser { get; set; }

    [ForeignKey("ConversationId")]
    [InverseProperty("Messages")]
    public virtual ChatProfile? Conversation { get; set; }
}

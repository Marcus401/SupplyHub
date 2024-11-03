using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Models;

[Keyless]
public partial class Chat
{
    [Column("ConversationID")]
    public int ConversationId { get; set; }

    [Column("UserID")]
    public int UserId { get; set; }

    [StringLength(500)]
    [Unicode(false)]
    public string Text { get; set; } = null!;

    [ForeignKey("ConversationId")]
    public virtual ChatProfile Conversation { get; set; } = null!;
}

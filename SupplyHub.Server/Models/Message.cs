using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Message
{
    [Key]
    public int MessageId { get; set; }
    [ForeignKey("ConversationId")]
    public int ConversationId { get; set; }
    [ForeignKey("UserId")]
    public int UserId { get; set; }
    public string Text { get; set; }
}

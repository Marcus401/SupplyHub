using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Message
{
    [Key]
    public int Id { get; set; }
    public int ConversationId { get; set; }
    public int UserId { get; set; }
    public required string Text { get; set; }
    public required Conversation Conversation { get; set; }
    public required User User { get; set; }
}

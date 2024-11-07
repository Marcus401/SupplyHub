using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class Message
{
    [Key]
    public int Id { get; set; }
    public int ConversationId { get; set; }
    public int UserId { get; set; }
    public string Text { get; set; }
}

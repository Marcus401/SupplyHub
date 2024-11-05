using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class ChatProfile
{
    [Key]
    public int ConversationId { get; set; }
    [ForeignKey("UserId")]
    public int UserId { get; set; }
}

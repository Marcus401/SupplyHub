using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models
{
    [Keyless]
    public class Chat
    {
        [ForeignKey("ConversationID")]
        public int ConversationID { get; set; }
        public int UserID { get; set; }
        public string Text { get; set; }
    }
}

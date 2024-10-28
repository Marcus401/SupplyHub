using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models
{
    public class Message
    {
        [Key]
        public int MessageID { get; set; }
        [ForeignKey("ConversationID")]
        public int ConversationID { get; set; }
        [ForeignKey("ChatUserID")]
        public int ChatUserID { get; set; }
        public string Text { get; set; }
    }
}

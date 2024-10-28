using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class Message
    {
        [Key]
        public int MessageID { get; set; }
        public int ConversationID { get; set; }
        public int ChatUserID { get; set; }
        public string Text { get; set; }
    }
}

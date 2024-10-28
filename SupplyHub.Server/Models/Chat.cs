using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class Chat
    {
        [Key]
        public int ConversationID { get; set; }
        public int UserID { get; set; }
        public string Text { get; set; }
    }
}

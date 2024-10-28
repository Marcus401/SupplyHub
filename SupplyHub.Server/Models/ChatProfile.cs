using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class ChatProfile
    {
        [Key]
        public int ConversationID { get; set; }
        public int ChatUserID { get; set; }
    }
}

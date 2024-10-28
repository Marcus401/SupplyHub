using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models
{
    public class ChatProfile
    {
        [Key]
        public int ConversationID { get; set; }
        [ForeignKey("ChatUserID")]
        public int ChatUserID { get; set; }
    }
}

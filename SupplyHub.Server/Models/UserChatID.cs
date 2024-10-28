using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class UserChatID
    {
        [Key]
        public int ChatUserID { get; set; }
        public int ProfileID { get; set; }
        public bool IsSeller { get; set; }
    }
}

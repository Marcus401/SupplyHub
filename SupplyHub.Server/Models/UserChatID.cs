using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models
{
    public class UserChatID
    {
        [Key]
        public int ChatUserID { get; set; }
        [ForeignKey("ProfileID")]
        public int ProfileID { get; set; }
        [ForeignKey("IsSeller")]
        public bool IsSeller { get; set; }
    }
}

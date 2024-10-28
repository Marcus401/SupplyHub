using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SupplyHub.Server.Models
{
    public class UserProfile    {
        [Key]
        public int ConversationID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int ContactNumber { get; set; }
        public string Position { get; set; }
        [ForeignKey("AffiliatedCompany")]
        public string AffiliatedCompany { get; set; }
        public string Bio { get; set; }
        public byte[] Picture { get; set; }
        [ForeignKey("ChatUserID")]
        public int ChatUserID { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models
{
    public class SellerProfile
    {
        [Key]
        public int CompanyID { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int ContactNumber { get; set; }
        public int Rating { get; set; }
        [ForeignKey("ProductID")]
        public int Products { get; set; }
        public string Socials { get; set; }
        public string Bio { get; set; }
        public string BusinessType { get; set; }
        public byte[] Picture { get; set; }
        [ForeignKey("ChatUserID")]
        public int ChatUserID {  get; set; }

    }
}

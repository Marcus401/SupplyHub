using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class SellerProfile
    {
        [Key]
        public int SellerID { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models
{
    public class Advertisement
    {
        [Key]
        public int AdvertisementID { get; set; }
        [ForeignKey("CompanyID")]
        public int CompanyID { get; set; }
        [ForeignKey("ProductID")]
        public int ProductID { get; set; }
        public byte[] AdvertisementFile { get; set; }
    }
}

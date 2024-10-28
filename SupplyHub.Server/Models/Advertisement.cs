using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class Advertisement
    {
        [Key]
        public int AdvertisementID { get; set; }
        public int CompanyID { get; set; }
        public int ProductID { get; set; }
        public byte[] AdvertisementFile { get; set; }
    }
}

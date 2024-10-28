using System.ComponentModel.DataAnnotations;

namespace SupplyHub.Server.Models
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        public string ProductName {  get; set; }
        public string ProductType { get; set; }
        public int StockAvailable { get; set; }
        public string Unit { get; set; }
        public string Timeframe { get; set; }
        public string Description { get; set; }
        public string FAQ { get; set; }
    }
}

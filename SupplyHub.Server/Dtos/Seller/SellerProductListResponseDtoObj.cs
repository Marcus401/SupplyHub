namespace Dtos.Seller;

public class SellerProductListResponseDtoObj
{
	public string ProductName { get; set; }
    public byte[] Thumbnail { get; set; }	
	public string Description { get; set; }
	public int StockAvailable { get; set; }
    public bool IsAvailable { get; set; }
}
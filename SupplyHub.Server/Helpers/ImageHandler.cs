namespace SupplyHub.Server.Helpers;

public static class ImageHandler
{
	public static async Task<string> SaveImage(IFormFile image, string folderPath)
	{
		var imageGuid = Guid.NewGuid().ToString();
		var extension = Path.GetExtension(image.FileName).ToLowerInvariant();
		var fileName = $"{imageGuid}{extension}";
        
		var uploadsFolder = Path.Combine("wwwroot", "images", folderPath);
		Directory.CreateDirectory(uploadsFolder);
        
		var filePath = Path.Combine(uploadsFolder, fileName);

		await using var stream = new FileStream(filePath, FileMode.Create);
		await image.CopyToAsync(stream);

		return fileName; 
	}
}
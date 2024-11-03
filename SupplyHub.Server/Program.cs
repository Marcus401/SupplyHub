using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Data;

namespace SupplyHub.Server;

public class Program
{
	public static void Main(string[] args)
	{
		var builder = WebApplication.CreateBuilder(args);

		// Add services to the container.
		builder.Services.AddControllers(); // Allows for API controller support
		builder.Services.AddDbContext<SupplyhubDatabaseContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
		
		var app = builder.Build();
		
		app.UseDefaultFiles();			// Serve default files (like index.html)
		app.UseStaticFiles();			// Enables serving static files from wwwroot
		app.UseHttpsRedirection();		// Redirects HTTP requests to HTTPS
		app.UseAuthorization();			// Enables authorization
		app.MapControllers();			// Map the API controllers
		app.MapFallbackToFile("index.html");	// Fallback route for SPA to serve index.html for unmatched routes
		app.Run();				// Start the application
	}
}
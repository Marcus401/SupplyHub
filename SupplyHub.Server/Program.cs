using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Data;
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

namespace SupplyHub.Server;

public class Program
{
	public static void Main(string[] args)
	{
		var builder = WebApplication.CreateBuilder(args);
		
		builder.Services.AddAuthorization();

		builder.Services.AddControllers(); // Allows for API controller support
		builder.Services.AddEndpointsApiExplorer();
		builder.Services.AddSwaggerGen();
			
		
		var app = builder.Build();

		app.UseDefaultFiles();			// Serve default files (like index.html)
		app.UseStaticFiles();			// Enables serving static files from wwwroot
		
		if (app.Environment.IsDevelopment())
		{
			app.UseSwagger();
			app.UseSwaggerUI();
	    }		
		app.UseHttpsRedirection();		// Redirects HTTP requests to HTTPS
		app.UseAuthorization();			// Enables authorization
		app.MapControllers();			// Map the API controllers
		app.MapFallbackToFile("index.html");	// Fallback route for SPA to serve index.html for unmatched routes
		app.Run();				// Start the application
	}
}
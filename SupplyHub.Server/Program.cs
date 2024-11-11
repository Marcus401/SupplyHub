namespace SupplyHub.Server;

using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Data;
using Microsoft.AspNetCore.Identity;
using SupplyHub.Server.Services;
using SupplyHub.Server.Models;
using SupplyHub.Server.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;


public class Program
{
	public static void Main(string[] args)
	{
		var builder = WebApplication.CreateBuilder(args);

		// Configure Entity Framework Core
		builder.Services.AddDbContext<SupplyhubDbContext>(options =>
		options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


		builder.Services.AddIdentity<User, IdentityRole<int>>(options =>
			{
				options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._ ";
				options.Password.RequireDigit = true;
				options.Password.RequiredLength = 6;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = true;
				options.Password.RequireLowercase = false;
			})
		     .AddEntityFrameworkStores<SupplyhubDbContext>()
		     .AddDefaultTokenProviders();

		builder.Services.AddAuthentication(options =>
    	{
        	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    	});
    	// .AddJwtBearer(options =>
    	// {
     //    	options.TokenValidationParameters = new TokenValidationParameters
     //    	{
     //        	ValidateIssuer = true,
     //        	ValidateAudience = true,
     //        	ValidateLifetime = true,
     //        	ValidateIssuerSigningKey = true,
     //        	ValidIssuer = jwtSettings["Issuer"],
     //        	ValidAudience = jwtSettings["Audience"],
     //        	IssuerSigningKey = new SymmetricSecurityKey(key)
     //    	};
   	 // 	});

		builder.Services.AddScoped<IAuthService, AuthService>();
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

		app.UseHttpsRedirection();      // Redirects HTTP requests to HTTPS
		app.UseAuthentication();		// Enables authentication
		app.UseAuthorization();			// Enables authorization
		app.MapControllers();			// Map the API controllers
		app.MapFallbackToFile("index.html");	// Fallback route for SPA to serve index.html for unmatched routes
		app.Run();				// Start the application
	}
}
using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Data;
using Microsoft.AspNetCore.Identity;
using SupplyHub.Server.Services;
using SupplyHub.Server.Models;
using SupplyHub.Server.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using SupplyHub.Server.Helpers;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text.Json;

namespace SupplyHub.Server;
public class Program
{
	public static void Main(string[] args)
	{
		var builder = WebApplication.CreateBuilder(args);

		// Configure Entity Framework Core
		builder.Services.AddDbContext<SupplyhubDbContext>(options =>
		options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
		
		builder.Services.AddCors(options =>
		{
			options.AddPolicy("AllowFrontend", policy =>
			{
				policy.WithOrigins("https://localhost:5173")  // Frontend URL
					.AllowAnyHeader()
					.AllowAnyMethod();
			});
		});

		var jwtSettings = builder.Configuration.GetSection("JwtSettings");
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
    		})
			.AddJwtBearer(options =>
		{
			options.TokenValidationParameters = new TokenValidationParameters
	        {
		        ValidateIssuer = true,
		        ValidateAudience = true,
		        ValidateLifetime = true,
		        ValidateIssuerSigningKey = true,
		        ValidIssuer = jwtSettings["Issuer"],
		        ValidAudience = jwtSettings["Audience"],
		        IssuerSigningKey = new SymmetricSecurityKey(PrivateKeyHelper.GetPrivateKey())
	        }; 
		});

		builder.Services.AddScoped<IAuthService, AuthService>();
		builder.Services.AddAuthorization();

		builder.Services.AddControllers() // Allows for API controller support
			.AddJsonOptions(options =>
			{
				options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
			});  // turns JSON response names into camelCase, as with JS and TS conventions
		
		builder.Services.AddEndpointsApiExplorer();
		builder.Services.AddSwaggerGen(options =>
		{
			// Add a JWT Bearer security definition
			options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
			{
				Name = "Authorization",
				Type = SecuritySchemeType.ApiKey,
				Scheme = "Bearer",
				BearerFormat = "JWT",
				In = ParameterLocation.Header,
				Description = "Please enter JWT with Bearer prefix",
			});
			
			options.AddSecurityRequirement(new OpenApiSecurityRequirement
			{
				{
					new OpenApiSecurityScheme
					{
						Reference = new OpenApiReference
						{
							Type = ReferenceType.SecurityScheme,
							Id = "Bearer"
						}
					},
					new string[] { }
				}
			});
		});
		
		var app = builder.Build();

		app.UseDefaultFiles();			// Serve default files (like index.html)
		app.UseStaticFiles();			// Enables serving static files from wwwroot
		
		if (app.Environment.IsDevelopment())
		{
			app.UseSwagger();
			app.UseSwaggerUI();
		}		
		app.UseCors("AllowFrontend");
		app.UseHttpsRedirection();      // Redirects HTTP requests to HTTPS
		app.UseAuthentication();		// Enables authentication
		app.UseAuthorization();			// Enables authorization
		app.MapControllers();			// Map the API controllers
		app.MapFallbackToFile("index.html");	// Fallback route for SPA to serve index.html for unmatched routes
		app.Run();				// Start the application
	}
}
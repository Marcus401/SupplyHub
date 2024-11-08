namespace Services;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity;

public class RoleInitializer
{
	public static async Task Initialize(IServiceProvider serviceProvider)
	{
		var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole<int>>>();
		var logger = serviceProvider.GetRequiredService<ILogger<RoleInitializer>>();
		string[] roleNames = { "User", "Seller" };

		foreach (var roleName in roleNames)
		{
			var roleExist = await roleManager.RoleExistsAsync(roleName);
			if (!roleExist)
			{
				var roleResult = await roleManager.CreateAsync(new IdentityRole(roleName));
				if (roleResult.Succeeded)
				{
					logger.LogInformation($"Role {roleName} created successfully.");
				}
				else
				{
					logger.LogError($"Failed to create role {roleName}: {string.Join(", ", roleResult.Errors.Select(e => e.Description))}");
				}
			}
			else
			{
				logger.LogInformation($"Role {roleName} already exists.");
			}
		}
	}
}
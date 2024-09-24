namespace SupplyHub.Server.Models;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
	// DbSet<product class> Products { get; set; }	
	
	// create class that represents a table (product)
}
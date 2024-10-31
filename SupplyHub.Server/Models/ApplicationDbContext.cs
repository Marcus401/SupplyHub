namespace SupplyHub.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{


	public DbSet<Message> Messages { get; set; }
	public DbSet<UserChatID> UserChatIDs { get; set; }
	public DbSet<Advertisement> Advertisements { get; set; }
	public DbSet<Product> Products { get; set; }
	public DbSet<ChatProfile> ChatProfiles { get; set; }
	public DbSet<Chat> Chats { get; set; }
	public DbSet<UserProfile> UserProfiles { get; set; }
	public DbSet<SellerProfile> SellerProfiles { get; set; }
}
using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Models;

namespace SupplyHub.Server.Data
{
	public class SupplyhubDbContext : DbContext
	{
		public SupplyhubDbContext(DbContextOptions options) : base(options)
		{ 
		}

		public DbSet<Account> Accounts { get; set; }
		public DbSet<Advertisement> Advertisements { get; set; }
		public DbSet<ChatProfile> ChatProfiles { get; set; }
		public DbSet<Message> Messages { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<SellerInfo> SellerInfos { get; set; }
		public DbSet<UserInfo> UserInfos { get; set; }

	}
}

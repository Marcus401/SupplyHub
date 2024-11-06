using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Models;

namespace SupplyHub.Server.Data
{
	public class SupplyhubDbContext : IdentityDbContext
	{
		public SupplyhubDbContext(DbContextOptions<SupplyhubDbContext> options) : base(options)
		{ 
		}

		public DbSet<Account> Accounts { get; set; }
		public DbSet<Advertisement> Advertisements { get; set; }
		public DbSet<ChatProfile> ChatProfiles { get; set; }
		public DbSet<Message> Messages { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<SellerInfo> SellerInfos { get; set; }
		public DbSet<UserInfo> UserInfos { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<Account>().Ignore(e => e.AccessFailedCount)
				.Ignore(e => e.ConcurrencyStamp)
				.Ignore(e => e.EmailConfirmed)
				.Ignore(e => e.LockoutEnabled)
				.Ignore(e => e.LockoutEnd)
				.Ignore(e => e.NormalizedEmail)
				.Ignore(e => e.NormalizedUserName)
				.Ignore(e => e.PhoneNumberConfirmed)
				.Ignore(e => e.SecurityStamp)
				.Ignore(e => e.TwoFactorEnabled);

			builder.Entity<IdentityRole>(e => e.ToTable(name: "Role"));
			builder.Entity<IdentityUserRole<string>>(e => e.ToTable(name: "UserRoles"));
			builder.Entity<IdentityUserClaim<string>>(e => e.ToTable(name: "UserClaims"));
			builder.Entity<IdentityUserLogin<string>>(e => e.ToTable(name: "UserLogins"));
			builder.Entity<IdentityRoleClaim<string>>(e => e.ToTable(name: "RoleClaims"));
			builder.Entity<IdentityUserToken<string>>(e => e.ToTable(name: "UserTokens"));
		}

	}
}

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Models;

namespace SupplyHub.Server.Data;
public class SupplyhubDbContext : IdentityDbContext
{
	public SupplyhubDbContext(DbContextOptions<SupplyhubDbContext> options) : base(options)
	{ 
	}

	public DbSet<Account> Accounts { get; set; }
	public DbSet<IdentityRole<int>> Roles { get; set; }
	public DbSet<IdentityUserRole<int>> UserRoles { get; set; }
	public DbSet<IdentityUserToken<int>> Tokens { get; set; }
	public DbSet<Advertisement> Advertisements { get; set; }
	public DbSet<ChatProfile> ChatProfiles { get; set; }
	public DbSet<Message> Messages { get; set; }
	public DbSet<Product> Products { get; set; }
	public DbSet<SellerInfo> SellerInfos { get; set; }
	public DbSet<UserInfo> UserInfos { get; set; }

	protected override void OnModelCreating(ModelBuilder builder)
	{
		base.OnModelCreating(builder);

		builder.Entity<Account>(entity =>
		{
			entity.ToTable("Accounts");
			entity.Ignore(e => e.AccessFailedCount);
			entity.Ignore(e => e.ConcurrencyStamp);
			entity.Ignore(e => e.EmailConfirmed);
			entity.Ignore(e => e.LockoutEnabled);
			entity.Ignore(e => e.LockoutEnd);
			entity.Ignore(e => e.NormalizedEmail);
			entity.Ignore(e => e.NormalizedUserName);
			entity.Ignore(e => e.PhoneNumberConfirmed);
			entity.Ignore(e => e.SecurityStamp);
			entity.Ignore(e => e.TwoFactorEnabled);
		});

		builder.Entity<IdentityRole<int>>(entity =>
		{
			entity.ToTable("Roles");
			entity.Ignore(e => e.NormalizedName);
			entity.Ignore(e => e.ConcurrencyStamp);
		});
		
		builder.Entity<IdentityUserRole<int>>(entity =>
		{
			entity.ToTable("UserRoles");
			
		});
			
		builder.Entity<IdentityUserToken<int>>(entity =>
		{
			entity.ToTable("Tokens");
			
		});

		builder.Entity<Advertisement>(entity =>
		{
			entity.ToTable("Advertisements");
			
		});
		
		builder.Entity<ChatProfile>(entity =>
		{
			entity.ToTable("ChatProfiles");
			
		});
		
		builder.Entity<Product>(entity =>
		{
			entity.ToTable("Products");
			
		});
		
		builder.Entity<SellerInfo>(entity =>
		{
			entity.ToTable("SellerInfos");
			
		});
		
		builder.Entity<UserInfo>(entity =>
		{
			entity.ToTable("UserInfos");
			
		});
	}
}


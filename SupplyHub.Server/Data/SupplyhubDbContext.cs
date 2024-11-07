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

	public DbSet<User> Users { get; set; }
	public DbSet<Advertisement> Advertisements { get; set; }
	public DbSet<ConversationUser> ConversationUsers { get; set; }
	public DbSet<Message> Messages { get; set; }
	public DbSet<Product> Products { get; set; }
	public DbSet<SellerInfo> SellerInfos { get; set; }
	public DbSet<UserInfo> UserInfos { get; set; }
	public DbSet<Conversation> Conversations { get; set; }
	public DbSet<ProductReview> ProductReviews { get; set; }
	public DbSet<SellerReview> SellerReviews { get; set; }
	public DbSet<SellerProduct> SellerProducts { get; set; }
	
	

	protected override void OnModelCreating(ModelBuilder builder)
	{
		base.OnModelCreating(builder);

		builder.Entity<User>(entity =>
		{
			entity.ToTable("Users");
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
			
			entity.HasKey(e => e.Id).HasName("PK_UserProfile");
		});

		builder.Entity<IdentityRole<int>>(entity =>
		{
			entity.ToTable("Roles");
			entity.Ignore(e => e.NormalizedName);
			entity.Ignore(e => e.ConcurrencyStamp);
		});
		
		builder.Entity<IdentityUserToken<int>>(entity =>
		{
			entity.ToTable("Tokens");
		});
		
		builder.Entity<IdentityUserRole<int>>(entity =>
		{
			entity.ToTable("UserRoles");
		});

		builder.Entity<Advertisement>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_Advertisements");
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.Product)
				.WithMany()
				.HasForeignKey(e => e.ProductId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});
		
		builder.Entity<ConversationUser>(entity =>
		{
			entity.HasKey(e => new { e.ConversationId, e.UserId })
				.HasName("PK_ConversationUser");
			
			entity.HasOne(e => e.Conversation)
				.WithMany()
				.HasForeignKey(e => e.ConversationId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});
		
		builder.Entity<Product>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_Product");
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey<Product>(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});
		
		builder.Entity<SellerInfo>(entity =>
		{
			entity.HasKey(e => e.UserId).HasName("PK_SellerInfo");

			entity.HasOne(e => e.User)
				.WithOne()
				.HasForeignKey<SellerInfo>(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});
		
		builder.Entity<UserInfo>(entity =>
		{
			entity.HasKey(e => e.UserId).HasName("PK_UserInfo");
			
			entity.HasOne(e => e.User)
				.WithOne()
				.HasForeignKey<UserInfo>(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey<UserInfo>(e => e.CompanyUserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});

		builder.Entity<SellerReview>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_SellerReviews");
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.SellerUserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.ReviewerUserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasIndex(e => new { e.SellerUserId, e.ReviewerUserId })
				.IsUnique()
				.HasDatabaseName("IX_SellerReviews_SellerUserId_ReviewerUserId");
		});
		
		builder.Entity<ProductReview>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_ProductReviews");
			
			entity.HasOne(e => e.Product)
				.WithMany()
				.HasForeignKey(e => e.ProductId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.ReviewerUserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasIndex(e => new { e.ProductId, e.ReviewerUserId })
				.IsUnique()
				.HasDatabaseName("IX_ProductReviews_ProductId_ReviewerUserId");
		});
		
		builder.Entity<Message>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_Messages");
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.Conversation)
				.WithMany()
				.HasForeignKey(e => e.ConversationId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});
		
		builder.Entity<SellerProduct>(entity =>
		{
			entity.HasKey(e => new { e.UserId, e.ProductId })
				.HasName("PK_SellerProducts");
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.Product)
				.WithMany()
				.HasForeignKey(e => e.ProductId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});

		builder.Entity<Conversation>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_Conversations");
		});
	}
}


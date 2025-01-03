﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Models;


namespace SupplyHub.Server.Data;
public class SupplyhubDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
	public SupplyhubDbContext(DbContextOptions<SupplyhubDbContext> options) : base(options)
	{ 
	}

	public new DbSet<User> Users { get; set; }
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
		
		List<IdentityRole<int>> roles = new()
		{
			new IdentityRole<int> { Id = 1, Name = "User", NormalizedName = "USER" },
			new IdentityRole<int> { Id = 2, Name = "Seller", NormalizedName = "SELLER" },
		};

		builder.Entity<User>(entity =>
		{
			entity.ToTable("Users");
			entity.Ignore(e => e.AccessFailedCount);
			entity.Ignore(e => e.EmailConfirmed);
			entity.Ignore(e => e.LockoutEnabled);
			entity.Ignore(e => e.LockoutEnd);
			entity.Ignore(e => e.PhoneNumberConfirmed);
			entity.Ignore(e => e.TwoFactorEnabled);
			
			entity.HasKey(e => e.Id).HasName("PK_UserProfile");
		});

		builder.Entity<IdentityRole<int>>(entity =>
		{
			entity.ToTable("Roles");
		});

		builder.Entity<IdentityRole<int>>().HasData(roles);
		
		builder.Entity<IdentityUserToken<int>>(entity =>
		{
			entity.ToTable("Tokens");
		});
		
		builder.Entity<IdentityUserRole<int>>(entity =>
		{
			entity.ToTable("UserRoles");
		});

		builder.Entity<IdentityUserLogin<int>>(entity =>
		{
			entity.ToTable("UserLogins");
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
			
			entity.HasOne(e => e.ConversationEntry)
				.WithMany()
				.HasForeignKey(e => e.ConversationId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.UserEntry)
				.WithMany()
				.HasForeignKey(e => e.UserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
		});
		
		builder.Entity<Product>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_Product");
			
			entity.HasOne(e => e.User)
				.WithMany()
				.HasForeignKey("UserId")
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.Property(e => e.Price)
				.HasPrecision(18, 2);
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
			
			entity.HasOne(e => e.CompanyUser)
				.WithMany()
				.HasForeignKey("CompanyUserId")
				.OnDelete(DeleteBehavior.ClientSetNull);
		});

		builder.Entity<SellerReview>(entity =>
		{
			entity.HasKey(e => e.Id).HasName("PK_SellerReviews");
			
			entity.HasOne(e => e.SellerUser)
				.WithMany()
				.HasForeignKey(e => e.SellerUserId)
				.OnDelete(DeleteBehavior.ClientSetNull);
			
			entity.HasOne(e => e.ReviewerUser)
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
			
			entity.HasOne(e => e.ReviewerUser)
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


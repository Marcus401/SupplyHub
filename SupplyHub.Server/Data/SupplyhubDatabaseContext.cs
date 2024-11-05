using Microsoft.EntityFrameworkCore;
using SupplyHub.Server.Models;

namespace SupplyHub.Server.Data;

public partial class SupplyhubDatabaseContext : DbContext
{
    public SupplyhubDatabaseContext()
    {
    }

    public SupplyhubDatabaseContext(DbContextOptions<SupplyhubDatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Advertisement> Advertisements { get; set; }

    public virtual DbSet<ChatProfile> ChatProfiles { get; set; }

    public virtual DbSet<Message> Messages { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<SellerInfo> SellerInfos { get; set; }

    public virtual DbSet<UserInfo> UserInfos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_UserProfile");

            entity.Property(e => e.Id).ValueGeneratedNever();
            

        });

        modelBuilder.Entity<Advertisement>(entity =>
        {
            entity.Property(e => e.AdvertisementId).ValueGeneratedNever();

            entity.HasOne(d => d.Product).WithMany(p => p.Advertisements)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Advertisements_Products");

            entity.HasOne(d => d.User).WithMany(p => p.Advertisements)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Advertisements_UserInfo");
        });

        modelBuilder.Entity<ChatProfile>(entity =>
        {
            entity.Property(e => e.ConversationId).ValueGeneratedNever();

            entity.HasOne(d => d.User).WithMany(p => p.ChatProfiles)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ChatProfiles_UserInfo");
        });

        modelBuilder.Entity<Message>(entity =>
        {
            entity.Property(e => e.MessageId).ValueGeneratedNever();

            entity.HasOne(d => d.Conversation).WithMany(p => p.Messages).HasConstraintName("FK_Messages_ChatProfiles");

            entity.HasOne(d => d.User).WithMany(p => p.Messages).HasConstraintName("FK_Messages_UserInfo");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.ProductId).ValueGeneratedNever();

            entity.HasOne(d => d.User).WithMany(p => p.Products)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Products_UserInfo");
        });

        modelBuilder.Entity<SellerInfo>(entity =>
        {
            entity.HasKey(e => e.CompanyId).HasName("PK_SellerProfiles");

            entity.Property(e => e.CompanyId).ValueGeneratedNever();

            entity.HasOne(d => d.ProductsNavigation).WithMany(p => p.SellerInfos).HasConstraintName("FK_SellerInfo_Products");
        });

        modelBuilder.Entity<UserInfo>(entity =>
        {
            entity.Property(e => e.UserId).ValueGeneratedNever();

            entity.HasOne(d => d.CompanyUser).WithMany(p => p.UserInfos)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserInfo_SellerInfo");

            entity.HasOne(d => d.User).WithOne(p => p.UserInfo)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserInfo_Account");
        });
        
        modelBuilder.Entity<IdentityRole<int>>(entity =>
        {
            entity.Property(e => e.Id).ValueGeneratedNever();

            entity.Ignore(e => e.ConcurrencyStamp);
            entity.Ignore(e => e.NormalizedUserName);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

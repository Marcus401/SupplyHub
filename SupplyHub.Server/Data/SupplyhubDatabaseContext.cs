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

    public virtual DbSet<Advertisement> Advertisements { get; set; }

    public virtual DbSet<Chat> Chats { get; set; }

    public virtual DbSet<ChatProfile> ChatProfiles { get; set; }

    public virtual DbSet<Message> Messages { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<SellerProfile> SellerProfiles { get; set; }

    public virtual DbSet<UserChatId> UserChatIds { get; set; }

    public virtual DbSet<UserProfile> UserProfiles { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("DefaultConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Advertisement>(entity =>
        {
            entity.Property(e => e.AdvertisementId).ValueGeneratedNever();

            entity.HasOne(d => d.Company).WithMany(p => p.Advertisements)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Advertisements_SellerProfiles");

            entity.HasOne(d => d.Product).WithMany(p => p.Advertisements)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Advertisements_Products");
        });

        modelBuilder.Entity<Chat>(entity =>
        {
            entity.HasOne(d => d.Conversation).WithMany()
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Chats_ChatProfiles");
        });

        modelBuilder.Entity<ChatProfile>(entity =>
        {
            entity.Property(e => e.ConversationId).ValueGeneratedNever();

            entity.HasOne(d => d.ChatUser).WithMany(p => p.ChatProfiles)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ChatProfiles_UserChatIDs");
        });

        modelBuilder.Entity<Message>(entity =>
        {
            entity.Property(e => e.MessageId).ValueGeneratedNever();

            entity.HasOne(d => d.ChatUser).WithMany(p => p.Messages).HasConstraintName("FK_Messages_UserChatIDs");

            entity.HasOne(d => d.Conversation).WithMany(p => p.Messages).HasConstraintName("FK_Messages_ChatProfiles");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.Property(e => e.ProductId).ValueGeneratedNever();
        });

        modelBuilder.Entity<SellerProfile>(entity =>
        {
            entity.Property(e => e.CompanyId).ValueGeneratedNever();

            entity.HasOne(d => d.ChatUser).WithMany(p => p.SellerProfiles)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_SellerProfiles_UserChatIDs");

            entity.HasOne(d => d.ProductsNavigation).WithMany(p => p.SellerProfiles).HasConstraintName("FK_SellerProfiles_Products");
        });

        modelBuilder.Entity<UserChatId>(entity =>
        {
            entity.HasKey(e => e.ChatUserId).HasName("PK__UserChat__BFA9F770C6B226BC");

            entity.Property(e => e.ChatUserId).ValueGeneratedNever();
        });

        modelBuilder.Entity<UserProfile>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK_UserProfile");

            entity.Property(e => e.UserId).ValueGeneratedNever();

            entity.HasOne(d => d.AffiliatedCompanyNavigation).WithMany(p => p.UserProfiles).HasConstraintName("FK_UserProfiles_SellerProfiles");

            entity.HasOne(d => d.ChatUser).WithMany(p => p.UserProfiles)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_UserProfiles_UserChatIDs");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

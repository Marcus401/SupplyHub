﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SupplyHub.Server.Data;

#nullable disable

namespace SupplyHub.Server.Migrations
{
    [DbContext(typeof(SupplyhubDbContext))]
    partial class SupplyhubDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.10")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("Roles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "User",
                            NormalizedName = "USER"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Seller",
                            NormalizedName = "SELLER"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("UserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<int>", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRoles", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("Tokens", (string)null);
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Advertisement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<byte[]>("AdvertisementFile")
                        .IsRequired()
                        .HasColumnType("varbinary(max)");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id")
                        .HasName("PK_Advertisements");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Advertisements");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Conversation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.HasKey("Id")
                        .HasName("PK_Conversations");

                    b.ToTable("Conversations");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.ConversationUser", b =>
                {
                    b.Property<int>("ConversationId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("ConversationId", "UserId")
                        .HasName("PK_ConversationUser");

                    b.HasIndex("UserId");

                    b.ToTable("ConversationUsers");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Message", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("ConversationId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id")
                        .HasName("PK_Messages");

                    b.HasIndex("ConversationId");

                    b.HasIndex("UserId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Faq")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasPrecision(18, 2)
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ProductType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StockAvailable")
                        .HasColumnType("int");

                    b.Property<string>("Timeframe")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Unit")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id")
                        .HasName("PK_Product");

                    b.HasIndex("UserId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.ProductReview", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.Property<string>("ReviewText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ReviewerUserId")
                        .HasColumnType("int");

                    b.HasKey("Id")
                        .HasName("PK_ProductReviews");

                    b.HasIndex("ReviewerUserId");

                    b.HasIndex("ProductId", "ReviewerUserId")
                        .IsUnique()
                        .HasDatabaseName("IX_ProductReviews_ProductId_ReviewerUserId");

                    b.ToTable("ProductReviews");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.SellerInfo", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("BusinessType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.Property<string>("Socials")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId")
                        .HasName("PK_SellerInfo");

                    b.ToTable("SellerInfos");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.SellerProduct", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.HasKey("UserId", "ProductId")
                        .HasName("PK_SellerProducts");

                    b.HasIndex("ProductId");

                    b.ToTable("SellerProducts");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.SellerReview", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.Property<string>("ReviewText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("ReviewerUserId")
                        .HasColumnType("int");

                    b.Property<int>("SellerUserId")
                        .HasColumnType("int");

                    b.HasKey("Id")
                        .HasName("PK_SellerReviews");

                    b.HasIndex("ReviewerUserId");

                    b.HasIndex("SellerUserId", "ReviewerUserId")
                        .IsUnique()
                        .HasDatabaseName("IX_SellerReviews_SellerUserId_ReviewerUserId");

                    b.ToTable("SellerReviews");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Bio")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("CoverPicture")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("ProfilePicture")
                        .HasColumnType("varbinary(max)");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id")
                        .HasName("PK_UserProfile");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("Users", (string)null);
                });

            modelBuilder.Entity("SupplyHub.Server.Models.UserInfo", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("CompanyUserId")
                        .HasColumnType("int");

                    b.Property<string>("Position")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId")
                        .HasName("PK_UserInfo");

                    b.HasIndex("CompanyUserId");

                    b.ToTable("UserInfos");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<int>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole<int>", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.User", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Advertisement", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.ConversationUser", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.Conversation", "Conversation")
                        .WithMany()
                        .HasForeignKey("ConversationId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .IsRequired();

                    b.Navigation("Conversation");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Message", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.Conversation", "Conversation")
                        .WithMany()
                        .HasForeignKey("ConversationId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .IsRequired();

                    b.Navigation("Conversation");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.Product", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.ProductReview", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "ReviewerUser")
                        .WithMany()
                        .HasForeignKey("ReviewerUserId")
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("ReviewerUser");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.SellerInfo", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithOne()
                        .HasForeignKey("SupplyHub.Server.Models.SellerInfo", "UserId")
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.SellerProduct", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .IsRequired();

                    b.Navigation("Product");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.SellerReview", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.User", "ReviewerUser")
                        .WithMany()
                        .HasForeignKey("ReviewerUserId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "SellerUser")
                        .WithMany()
                        .HasForeignKey("SellerUserId")
                        .IsRequired();

                    b.Navigation("ReviewerUser");

                    b.Navigation("SellerUser");
                });

            modelBuilder.Entity("SupplyHub.Server.Models.UserInfo", b =>
                {
                    b.HasOne("SupplyHub.Server.Models.User", "CompanyUser")
                        .WithMany()
                        .HasForeignKey("CompanyUserId")
                        .IsRequired();

                    b.HasOne("SupplyHub.Server.Models.User", "User")
                        .WithOne()
                        .HasForeignKey("SupplyHub.Server.Models.UserInfo", "UserId")
                        .IsRequired();

                    b.Navigation("CompanyUser");

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SupplyHub.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductID = table.Column<int>(type: "int", nullable: false),
                    ProductName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    ProductType = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    StockAvailable = table.Column<int>(type: "int", nullable: false),
                    Unit = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Timeframe = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Description = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: false),
                    FAQ = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductID);
                });

            migrationBuilder.CreateTable(
                name: "UserChatIDs",
                columns: table => new
                {
                    ChatUserID = table.Column<int>(type: "int", nullable: false),
                    ProfileID = table.Column<int>(type: "int", nullable: false),
                    IsSeller = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__UserChat__BFA9F770C6B226BC", x => x.ChatUserID);
                });

            migrationBuilder.CreateTable(
                name: "ChatProfiles",
                columns: table => new
                {
                    ConversationID = table.Column<int>(type: "int", nullable: false),
                    ChatUserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChatProfiles", x => x.ConversationID);
                    table.ForeignKey(
                        name: "FK_ChatProfiles_UserChatIDs",
                        column: x => x.ChatUserID,
                        principalTable: "UserChatIDs",
                        principalColumn: "ChatUserID");
                });

            migrationBuilder.CreateTable(
                name: "SellerProfiles",
                columns: table => new
                {
                    CompanyID = table.Column<int>(type: "int", nullable: false),
                    CompanyName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Password = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    ContactNumber = table.Column<int>(type: "int", nullable: true),
                    Rating = table.Column<int>(type: "int", nullable: true),
                    Products = table.Column<int>(type: "int", nullable: true),
                    Socials = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: true),
                    Bio = table.Column<string>(type: "varchar(300)", unicode: false, maxLength: 300, nullable: true),
                    BusinessType = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Picture = table.Column<byte[]>(type: "image", nullable: true),
                    ChatUserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SellerProfiles", x => x.CompanyID);
                    table.ForeignKey(
                        name: "FK_SellerProfiles_Products",
                        column: x => x.Products,
                        principalTable: "Products",
                        principalColumn: "ProductID");
                    table.ForeignKey(
                        name: "FK_SellerProfiles_UserChatIDs",
                        column: x => x.ChatUserID,
                        principalTable: "UserChatIDs",
                        principalColumn: "ChatUserID");
                });

            migrationBuilder.CreateTable(
                name: "Chats",
                columns: table => new
                {
                    ConversationID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Text = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_Chats_ChatProfiles",
                        column: x => x.ConversationID,
                        principalTable: "ChatProfiles",
                        principalColumn: "ConversationID");
                });

            migrationBuilder.CreateTable(
                name: "Messages",
                columns: table => new
                {
                    MessageID = table.Column<int>(type: "int", nullable: false),
                    ConversationID = table.Column<int>(type: "int", nullable: true),
                    ChatUserID = table.Column<int>(type: "int", nullable: true),
                    Text = table.Column<string>(type: "varchar(500)", unicode: false, maxLength: 500, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Messages", x => x.MessageID);
                    table.ForeignKey(
                        name: "FK_Messages_ChatProfiles",
                        column: x => x.ConversationID,
                        principalTable: "ChatProfiles",
                        principalColumn: "ConversationID");
                    table.ForeignKey(
                        name: "FK_Messages_UserChatIDs",
                        column: x => x.ChatUserID,
                        principalTable: "UserChatIDs",
                        principalColumn: "ChatUserID");
                });

            migrationBuilder.CreateTable(
                name: "Advertisements",
                columns: table => new
                {
                    AdvertisementID = table.Column<int>(type: "int", nullable: false),
                    CompanyID = table.Column<int>(type: "int", nullable: false),
                    ProductID = table.Column<int>(type: "int", nullable: false),
                    AdvertisementFile = table.Column<byte[]>(type: "image", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Advertisements", x => x.AdvertisementID);
                    table.ForeignKey(
                        name: "FK_Advertisements_Products",
                        column: x => x.ProductID,
                        principalTable: "Products",
                        principalColumn: "ProductID");
                    table.ForeignKey(
                        name: "FK_Advertisements_SellerProfiles",
                        column: x => x.CompanyID,
                        principalTable: "SellerProfiles",
                        principalColumn: "CompanyID");
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
                    Password = table.Column<byte[]>(type: "varbinary(50)", maxLength: 50, nullable: false),
                    ContactNumber = table.Column<int>(type: "int", nullable: true),
                    Position = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    AffiliatedCompany = table.Column<int>(type: "int", nullable: true),
                    Bio = table.Column<string>(type: "varchar(max)", unicode: false, nullable: true),
                    Picture = table.Column<byte[]>(type: "image", nullable: true),
                    ChatUserID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfile", x => x.UserID);
                    table.ForeignKey(
                        name: "FK_UserProfiles_SellerProfiles",
                        column: x => x.AffiliatedCompany,
                        principalTable: "SellerProfiles",
                        principalColumn: "CompanyID");
                    table.ForeignKey(
                        name: "FK_UserProfiles_UserChatIDs",
                        column: x => x.ChatUserID,
                        principalTable: "UserChatIDs",
                        principalColumn: "ChatUserID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Advertisements_CompanyID",
                table: "Advertisements",
                column: "CompanyID");

            migrationBuilder.CreateIndex(
                name: "IX_Advertisements_ProductID",
                table: "Advertisements",
                column: "ProductID");

            migrationBuilder.CreateIndex(
                name: "IX_ChatProfiles_ChatUserID",
                table: "ChatProfiles",
                column: "ChatUserID");

            migrationBuilder.CreateIndex(
                name: "IX_Chats_ConversationID",
                table: "Chats",
                column: "ConversationID");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_ChatUserID",
                table: "Messages",
                column: "ChatUserID");

            migrationBuilder.CreateIndex(
                name: "IX_Messages_ConversationID",
                table: "Messages",
                column: "ConversationID");

            migrationBuilder.CreateIndex(
                name: "IX_SellerProfiles_ChatUserID",
                table: "SellerProfiles",
                column: "ChatUserID");

            migrationBuilder.CreateIndex(
                name: "IX_SellerProfiles_Products",
                table: "SellerProfiles",
                column: "Products");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_AffiliatedCompany",
                table: "UserProfiles",
                column: "AffiliatedCompany");

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_ChatUserID",
                table: "UserProfiles",
                column: "ChatUserID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Advertisements");

            migrationBuilder.DropTable(
                name: "Chats");

            migrationBuilder.DropTable(
                name: "Messages");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "ChatProfiles");

            migrationBuilder.DropTable(
                name: "SellerProfiles");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "UserChatIDs");
        }
    }
}

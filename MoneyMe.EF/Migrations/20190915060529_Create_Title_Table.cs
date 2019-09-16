using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MoneyMe.EF.Migrations
{
    public partial class Create_Title_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Titles",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Titles", x => x.ID);
                });

            migrationBuilder.InsertData(
                table: "Titles",
                columns: new[] { "Name" },
                values: new object[] { "Mr." });
            migrationBuilder.InsertData(
                table: "Titles",
                columns: new[] { "Name" },
                values: new object[] { "Ms." });
            migrationBuilder.InsertData(
                table: "Titles",
                columns: new[] { "Name" },
                values: new object[] { "Dr." });
            migrationBuilder.InsertData(
                table: "Titles",
                columns: new[] { "Name" },
                values: new object[] { "Engr." });


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Titles");
        }
    }
}

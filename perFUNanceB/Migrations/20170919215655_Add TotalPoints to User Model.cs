using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace perFunanceb.Migrations
{
    public partial class AddTotalPointstoUserModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotalPoints",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalPoints",
                table: "Users");
        }
    }
}

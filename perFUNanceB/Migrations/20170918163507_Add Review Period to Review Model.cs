using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace perFunanceb.Migrations
{
    public partial class AddReviewPeriodtoReviewModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ReviewPeriod",
                table: "Reviews",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ReviewPeriod",
                table: "Reviews");
        }
    }
}

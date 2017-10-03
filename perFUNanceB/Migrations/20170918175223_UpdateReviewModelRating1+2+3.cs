using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace perFunanceb.Migrations
{
    public partial class UpdateReviewModelRating123 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Rating1",
                table: "Reviews",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Rating2",
                table: "Reviews",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Rating3",
                table: "Reviews",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rating1",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "Rating2",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "Rating3",
                table: "Reviews");
        }
    }
}

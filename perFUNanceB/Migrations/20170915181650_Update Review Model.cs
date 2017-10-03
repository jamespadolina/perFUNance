using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace perFunanceb.Migrations
{
    public partial class UpdateReviewModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_SupervisorIdId",
                table: "Reviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_UserIdId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_SupervisorIdId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_UserIdId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "SupervisorIdId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "UserIdId",
                table: "Reviews");

            migrationBuilder.AddColumn<int>(
                name: "SupervisorId",
                table: "Reviews",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Reviews",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_SupervisorId",
                table: "Reviews",
                column: "SupervisorId");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_SupervisorId",
                table: "Reviews",
                column: "SupervisorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_UserId",
                table: "Reviews",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_SupervisorId",
                table: "Reviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_UserId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_SupervisorId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_UserId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "SupervisorId",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Reviews");

            migrationBuilder.AddColumn<int>(
                name: "SupervisorIdId",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserIdId",
                table: "Reviews",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_SupervisorIdId",
                table: "Reviews",
                column: "SupervisorIdId");

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_UserIdId",
                table: "Reviews",
                column: "UserIdId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_SupervisorIdId",
                table: "Reviews",
                column: "SupervisorIdId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_UserIdId",
                table: "Reviews",
                column: "UserIdId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

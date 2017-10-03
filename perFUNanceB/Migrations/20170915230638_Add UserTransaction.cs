using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace perFunanceb.Migrations
{
    public partial class AddUserTransaction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rewards_Transactions_TransactionId",
                table: "Rewards");

            migrationBuilder.DropIndex(
                name: "IX_Rewards_TransactionId",
                table: "Rewards");

            migrationBuilder.DropColumn(
                name: "TransactionId",
                table: "Rewards");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TransactionId",
                table: "Rewards",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Rewards_TransactionId",
                table: "Rewards",
                column: "TransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rewards_Transactions_TransactionId",
                table: "Rewards",
                column: "TransactionId",
                principalTable: "Transactions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

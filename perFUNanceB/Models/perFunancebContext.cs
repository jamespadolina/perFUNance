using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using perFunanceb.Model;

namespace perFunanceb.Models
{
    public class perFunancebContext : DbContext
    {
        public perFunancebContext (DbContextOptions<perFunancebContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Reward> Rewards { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<TransactionReward> TransactionRewards { get; set; }
        public DbSet<UserTransaction> UserTransactions { get; set; }
    }

}

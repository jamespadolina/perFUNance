using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perFunanceb.Model
{
    public class Transaction
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public List<TransactionReward> Rewards { get; set; }
        public int TotalCost { get; set; }
    }
}

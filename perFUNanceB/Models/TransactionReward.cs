using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using perFunanceb.Model;

namespace perFunanceb.Model
{
    public class TransactionReward
    {
        public int Id { get; set; }
        public Transaction Transaction { get; set; }
        public Reward Reward { get; set; }
    }
}

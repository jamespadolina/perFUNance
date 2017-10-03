using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perFunanceb.Model
{
    public class UserTransaction
    {
         public int Id { get; set; }
         public User User { get; set; }
         public Transaction Transaction { get; set; }
    }
}

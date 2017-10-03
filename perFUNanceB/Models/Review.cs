using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perFunanceb.Model
{
    public class Review
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int SupervisorId { get; set; }
        public int Rating1 { get; set; }
        public int Rating2 { get; set; }
        public int Rating3 { get; set; }
        public int TotalPoints { get; set; }
        public string ReviewPeriod { get; set; }
    }
}

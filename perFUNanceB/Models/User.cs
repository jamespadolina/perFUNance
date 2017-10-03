using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace perFunanceb.Model
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zip { get; set; }
        public DateTime BirthDate { get; set; }
        public string SocialSecurity { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public bool IsSuperVisor { get; set; }
        public string Position { get; set; }
        public string EmailAddress { get; set; }
        public List<UserTransaction> Transactions { get; set; }
        public int TotalPoints { get; set; }
    }
}

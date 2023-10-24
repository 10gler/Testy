using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using WebApiApp.Models;

namespace TestAutoryzacji.Models
{
    public class LoggedUser : User
    {
        public string Token { get; set; }
    }
}

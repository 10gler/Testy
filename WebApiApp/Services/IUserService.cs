using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestAutoryzacji.Models;
using WebApiApp.Models;

namespace TestAutoryzacji.Services
{
    public interface IUserService
    {
        LoggedUser Authenticate(string username, string password);
        IEnumerable<User> GetAll();
    }
}

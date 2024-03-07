using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebForTesting.Models;

namespace WebForTesting.Services
{
    public interface IUserService
    {
        LoggedUser Authenticate(string username, string password);
        IEnumerable<User> GetAll();
    }
}

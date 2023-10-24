using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TestAutoryzacji.Models;
using WebApiApp.Dao;
using WebApiApp.Models;

namespace TestAutoryzacji.Services
{
    public class UserService : IUserService
    {
        private List<UserDao> _users = new List<UserDao>
        {
            new UserDao { Id = 1, FirstName = "Test", LastName = "User", Username = "test", Password = "test" },
            new UserDao { Id = 2, FirstName = "Test2", LastName = "User2", Username = "test2", Password = "test2" }
        };
        private string _secret;

        public UserService()
        {
            _secret = "0123456789012345678901234567";
        }

        public LoggedUser Authenticate(string username, string password)
        {
            var user = _users.SingleOrDefault(x => x.Username == username && x.Password == password);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim("LastName", user.FirstName),
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            var tokenStr = tokenHandler.WriteToken(token);

            // remove password before returning
            user.Password = null;

            return new LoggedUser
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Token = tokenStr
            };
        }

        public IEnumerable<User> GetAll()
        {
            // return users without passwords
            return _users.Select(x => new User 
            {
                Id = x.Id,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Username = x.Username
            });
        }
    }
}
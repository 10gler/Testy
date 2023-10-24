using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestAutoryzacji.Models;
using TestAutoryzacji.Services;
using WebApiApp.Models;

namespace TestAutoryzacji.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost]
        [ProducesResponseType(typeof(LoggedUser), 200)]
        [ProducesResponseType(typeof(BadRequestResult), 400)]
        public ActionResult<LoggedUser> Authenticate(UserCredentials userCredentials)
        {
            var user = _userService.Authenticate(userCredentials.Username, userCredentials.Password);

            if (user == null)
                return BadRequest();

            return user;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<User>), 200)]
        [ProducesResponseType(401)]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }

}
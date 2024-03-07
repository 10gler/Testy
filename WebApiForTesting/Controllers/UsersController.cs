using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebForTesting.Models;
using WebForTesting.Services;

namespace WebForTesting.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(typeof(LoggedUser), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status401Unauthorized)]
        public ActionResult<LoggedUser> Post(UserCredentials userCredentials)
        {
            var user = _userService.Authenticate(userCredentials.Username, userCredentials.Password);

            if (user == null)
                return Unauthorized();

            return Ok(user);
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<User>), 200)]
        [ProducesResponseType(401)]
        [Authorize]
        public IActionResult Get()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
    }
}

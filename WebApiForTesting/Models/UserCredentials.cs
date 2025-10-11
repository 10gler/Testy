using System.ComponentModel.DataAnnotations;

namespace WebForTesting.Models
{
    public class UserCredentials
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}

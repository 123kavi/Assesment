using backendEx.Module;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices.Marshalling;
using backendEx.Module;
namespace backendEx.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<User>> Post([FromBody] User user)
            {
            if (User == null){
            return  BadRequest("invalid jason format");



    }
    user.ModifiedName  = $"My name is {user.Name}";
        return Ok(user);
        }
}

    }

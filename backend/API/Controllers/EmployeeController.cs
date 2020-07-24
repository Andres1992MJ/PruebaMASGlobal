using DataAccess.EmployeeRepositoy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace API.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public EmployeeController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        [HttpGet]
        [Route("GetAllEmployees")]
        public async Task<IActionResult> GetAllEmployees()
        {
            var dataAccess = new EmployeeRepository(Configuration);
            var responsePackage = await dataAccess.GetEmployeesAsync();
            return Ok(responsePackage);
        }

    }


}

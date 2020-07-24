
using BusinessLogic.EmployeeService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace API.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public EmployeeController(IConfiguration configuration, IEmployeeService employeeService)
        {
            Configuration = configuration;
            _employeeService = employeeService;
        }

        public IConfiguration Configuration { get; }
        private IEmployeeService _employeeService { get; }

        [HttpGet]
        [Route("GetAllEmployees")]
        public async Task<IActionResult> GetAllEmployees()
        {

            var responsePackage = await _employeeService.GetEmployeesAsync();
            return Ok(responsePackage);
        }

    }


}

using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BusinessLogic.EmployeeService
{
    public interface IEmployeeService
    {
        Task<List<EmployeeDto>> GetEmployeesAsync();
        Task<EmployeeDto> GetEmployeeByIdAsync(int id);


    }
}

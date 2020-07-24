using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccess.EmployeeRepositoy
{
    public interface IEmployeeRepository
    {

        Task<List<Employee>> GetEmployeesAsync();
        Task<Employee> GetEmployeeById(int id);


    }
}

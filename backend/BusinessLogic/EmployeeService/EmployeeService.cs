using BusinessLogic.CalcAnnualSalary;
using DataAccess.EmployeeRepositoy;
using Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BusinessLogic.EmployeeService
{
    public class EmployeeService : IEmployeeService
    {

        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;


        }

        public async Task<List<EmployeeDto>> GetEmployeesAsync()
        {
            var employees = await _employeeRepository.GetEmployeesAsync();
            var employeesDto = new List<EmployeeDto>();

            foreach (var employee in employees)
            {
                var filtro = CalcAnnualSalaryFactory.CalculateAnnualSalary(employee.ContractTypeName, employee.MonthlySalary, employee.HourlySalary);
                employeesDto.Add(new EmployeeDto
                {
                    Id = employee.Id,
                    Name = employee.Name,
                    ContractTypeName = employee.ContractTypeName,
                    RoleId = employee.RoleId,
                    RoleName = employee.RoleName,
                    RoleDescription = employee.RoleDescription,
                    HourlySalary = employee.HourlySalary,
                    MonthlySalary = employee.MonthlySalary,
                    AnnualSalary = filtro.Calculate()

                });
            }
            return employeesDto;
        }

        //public async Task<Employee> GetEmployeeById(int id)
        //{
        //    var employees = await GetEmployeesAsync();
        //    return employees.FirstOrDefault(e => e.Id == id);
        //}


    }
}

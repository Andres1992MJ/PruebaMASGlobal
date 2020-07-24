using Microsoft.Extensions.Configuration;
using Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace DataAccess.EmployeeRepositoy
{
    public class EmployeeRepository
    {
        private readonly IConfiguration _configuration;

        public EmployeeRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        private HttpClient BuildClient()
        {
            HttpClient client = new HttpClient();
            var baseURL = _configuration["BaseURL"];
            client.BaseAddress = new Uri(baseURL);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));

            return client;
        }

        public async Task<List<Employee>> GetEmployeesAsync()
        {
            List<Employee> employees = new List<Employee>();
            var client = BuildClient();
            HttpResponseMessage response = await client.GetAsync("api/Employees");
            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();
                employees = JsonConvert.DeserializeObject<List<Employee>>(jsonString);

            }
            return employees;
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            var employees = await GetEmployeesAsync();
            return employees.FirstOrDefault(e => e.Id == id);
        }

    }
}

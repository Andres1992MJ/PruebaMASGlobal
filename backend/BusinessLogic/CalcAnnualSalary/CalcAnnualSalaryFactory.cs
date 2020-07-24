namespace BusinessLogic.CalcAnnualSalary
{

    public enum ContractType { MonthlySalaryEmployee, HourlySalaryEmployee }
    public class CalcAnnualSalaryFactory
    {
        public static ICalcAnnualSalary CalculateAnnualSalary(string contractType, decimal monthlySalary, decimal hourlySalary)
        {
            switch (contractType)
            {
                case "HourlySalaryEmployee":
                    return new HourlySalary(hourlySalary);
                case "MonthlySalaryEmployee":
                    return new MonthlySalary(monthlySalary);
                default:
                    return new HourlySalary(hourlySalary);
            }
        }
    }
}

namespace BusinessLogic.CalcAnnualSalary
{
    public class HourlySalary : ICalcAnnualSalary
    {
        private decimal _salary;


        public HourlySalary(decimal salary)
        {
            _salary = salary;


        }
        public decimal Calculate()
        {
            return 120 * _salary * 12;
        }
    }
}

namespace BusinessLogic.CalcAnnualSalary
{
    public class MonthlySalary : ICalcAnnualSalary
    {
        private decimal _salary;

        public MonthlySalary(decimal salary)
        {
            _salary = salary;
        }


        public decimal Calculate()
        {
            return _salary * 12;
        }
    }
}

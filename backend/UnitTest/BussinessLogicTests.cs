using BusinessLogic.CalcAnnualSalary;
using NUnit.Framework;

namespace UnitTest
{
    public class BussinessLogicTests
    {
        private ICalcAnnualSalary _calcAnnualSalary;

        private ICalcAnnualSalary _calcMonthlyAnnualSalary;

        private decimal _hourlyAnnualSalary;
        private decimal _badAnnualSalary;
        
        private decimal _monthlyAnnualSalary;


        [SetUp]
        public void Setup()
        {
            _calcAnnualSalary = CalcAnnualSalaryFactory.CalculateAnnualSalary("HourlySalaryEmployee", 1000000, 50000);

            _hourlyAnnualSalary = 72000000;

            _badAnnualSalary = 52250000;

            _calcMonthlyAnnualSalary = CalcAnnualSalaryFactory.CalculateAnnualSalary("MonthlySalaryEmployee", 2000000, 50000);

            _monthlyAnnualSalary = 24000000;
           
        }

        #region hourlyTest
        [Test]
        public void CalculateHourlySalaryIsTrue()
        {
            var result = _calcAnnualSalary.Calculate();

            Assert.IsTrue(result == _hourlyAnnualSalary, "El valor es correcto");
        }

        [Test]
        public void CalculateHourlySalaryAreEqual()
        {
            var result = _calcAnnualSalary.Calculate();

            Assert.AreEqual(_hourlyAnnualSalary, result);
        }


        [Test]
        public void CalculateHourlySalaryIsFalse()
        {
            var result = _calcAnnualSalary.Calculate();

            Assert.IsFalse(result == _badAnnualSalary, "El valor es incorrecto");
        }
        #endregion hourlyTest 

        [Test]
        public void CalculateMonthlySalaryIsTrue()
        {
            var result = _calcMonthlyAnnualSalary.Calculate();

            Assert.IsTrue(result == _monthlyAnnualSalary, "El valor es correcto");
        }

        [Test]
        public void CalculateMonthlySalaryAreEqual()
        {
            var result = _calcMonthlyAnnualSalary.Calculate();

            Assert.AreEqual(_monthlyAnnualSalary, result);
        }


        [Test]
        public void CalculateMonthlySalaryIsFalse()
        {
            var result = _calcMonthlyAnnualSalary.Calculate();

            Assert.IsFalse(result == _badAnnualSalary, "El valor es incorrecto");
        }




    }
}
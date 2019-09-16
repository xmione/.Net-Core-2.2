using Microsoft.AspNetCore.Mvc;
using MoneyMe.BO;
using MoneyMe.EF.ViewModel;
using MoneyMe.EF.Models;

namespace MoneyMe.Web.Razor.Controllers
{
    public class QuoteCalculatorController : Controller
    {
        // GET: Calculator
        public ActionResult Index(int id)
        {
            BO_Calculator bo = new BO_Calculator();

            Quote quote = new Quote();
            quote = bo.Get(id);

            CalculatorView calculatorView = new CalculatorView();
            calculatorView.Amount = quote.Amount;
            calculatorView.EmailAddress = quote.EmailAddress;
            calculatorView.FirstName = quote.FirstName;
            calculatorView.ID = quote.ID;
            calculatorView.LastName = quote.LastName;
            calculatorView.MobileNo = quote.MobileNo;
            calculatorView.Rate = quote.Rate;
            calculatorView.RepaymentMonthly = quote.RepaymentMonthly;
            calculatorView.RepaymentWeekly = quote.RepaymentWeekly;
            calculatorView.Term = quote.Term;
            calculatorView.TermType = quote.TermType;
            calculatorView.Title = quote.Title;

            return View(calculatorView);
        }
    }
}
using Microsoft.AspNetCore.Mvc.Rendering;
using MoneyMe.EF.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using static MoneyMe.EF.Calculator;

namespace MoneyMe.EF.ViewModel
{
    public class CalculatorView
    {
        public int ID;
        public decimal Amount;
        public int Term;
        public TermTypes TermType;
        public decimal Rate;
        public decimal RepaymentMonthly;
        public decimal RepaymentWeekly;
        public string Title;
        public string FirstName;
        public string LastName;
        public string EmailAddress;
        public string MobileNo;
        private readonly List<Title> _titles;

        [Display(Name = "Title")]
        public int SelectedTitleID { get; set; }

        public IEnumerable<SelectListItem> FlavorItems
        {
            get { return new SelectList(_titles, "ID", "Name"); }
        }
    }
}

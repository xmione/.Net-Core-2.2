using MoneyMe.DO;
using MoneyMe.EF;
using MoneyMe.EF.Models;
using System;
using System.Collections.Generic;

namespace MoneyMe.BO
{
    public class BO_Calculator
    {
        private DO_Calculator _do;
        public BO_Calculator()
        {
            _do = new DO_Calculator();
        }
        public Quote Get(int id)
        {
            try
            {
                Quote quote = new Quote();
                quote = _do.GetQuote(id);
                return quote;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Quote Get(Quote model)
        {
            try
            {
                //int term = 0;

                //if (model.TermType == Calculator.TermTypes.Annually)
                //{
                //    term = model.Term;
                //}
                //else if(model.TermType == Calculator.TermTypes.Quarterly)
                //{
                //    term = model.Term * 4;
                //}
                //else if (model.TermType == Calculator.TermTypes.Monthly)
                //{
                //    term = model.Term * 12;
                //}

                //model.RepaymentMonthly = model.Amount * model.Rate / 12 / term;
                //model.RepaymentWeekly = model.Amount * model.Rate / 12 / 4 / term;

                return model;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Quote Calculate(Quote quote)
        {
            try
            {
                int term = 0;

                if (quote.TermType == Calculator.TermTypes.Annually)
                {
                    term = quote.Term;
                }
                else if (quote.TermType == Calculator.TermTypes.Quarterly)
                {
                    term = quote.Term * 4;
                }
                else if (quote.TermType == Calculator.TermTypes.Monthly)
                {
                    term = quote.Term * 12;
                }

                quote.RepaymentMonthly = quote.Amount * quote.Rate / 12 / term;
                quote.RepaymentWeekly = quote.Amount * quote.Rate / 12 / 4 / term;

                _do.PostQuote(quote);
                
                return quote;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Quote PostQuote(Quote quote)
        {
            try
            {
                return _do.PostQuote(quote);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<Title> GetTitles()
        {
            try
            {
                var titles = new List<Title>();
                titles = _do.GetTitles();
                return titles;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<Quote> GetQuoteDetails()
        {
            try
            {
                var quotes = new List<Quote>();
                quotes = _do.GetQuoteDetails();
                return quotes;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public void DeleteQuoteDetailsByID(int id)
        {
            try
            {
                _do.DeleteQuoteDetailsByID(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

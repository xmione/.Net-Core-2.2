using MoneyMe.EF;
using MoneyMe.EF.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MoneyMe.DO
{
    public class DO_Calculator
    {
        public Quote GetQuote(int id)
        {
            try
            {
                Quote quote = new Quote();
                using (var context = new MoneyMeContext())
                {
                    quote = context.Quotes.FirstOrDefault(q => q.ID.Equals(id));
                }

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
                using (var context = new MoneyMeContext())
                {
                    Quote foundQuote = context.Quotes.FirstOrDefault(q => q.ID.Equals(quote.ID));
                    if (foundQuote == null)
                    {
                        context.Quotes.Add(quote);
                    }
                    else
                    {
                        foundQuote.Amount = quote.Amount;
                        foundQuote.EmailAddress = quote.EmailAddress;
                        foundQuote.FirstName = quote.FirstName;
                        foundQuote.LastName = quote.LastName;
                        foundQuote.MobileNo = quote.MobileNo;
                        foundQuote.Rate = quote.Rate;
                        foundQuote.RepaymentMonthly = quote.RepaymentMonthly;
                        foundQuote.RepaymentWeekly = quote.RepaymentWeekly;
                        foundQuote.Term = quote.Term;
                        foundQuote.TermType = quote.TermType;
                        foundQuote.Title = quote.Title;
                    }
                    
                    context.SaveChanges();
                }

                return quote;
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
                using (var context = new MoneyMeContext())
                {
                    titles = context.Titles.ToList();
                }

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
                using (var context = new MoneyMeContext())
                {
                    quotes = context.Quotes.ToList();
                }

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
                Quote quote = new Quote();
                using (var context = new MoneyMeContext())
                {
                    quote = context.Quotes.FirstOrDefault(q => q.ID.Equals(id));
                    if (quote != null)
                    {
                        context.Remove(quote);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

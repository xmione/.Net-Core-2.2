using MoneyMe.EF.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MoneyMe.EF
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                using (var context = new MoneyMeContext())
                {

                    var quote = new Quote()
                    {
                        Amount = 5000,
                        EmailAddress = "test@test.com",
                        LastName = "Clinton",
                        MobileNo = "1234567890",
                        Rate = 10,
                        Term = 2,
                        Title = "Mr.",
                        FirstName = "Bill"
                    };

                    context.Quotes.Add(quote);
                    context.SaveChanges();
                    Console.WriteLine("Current Quote ID: " + quote.ID.ToString());

                    List<Quote> quotes = context.Quotes.ToList();
                    foreach (var q in quotes)
                    {
                        Console.WriteLine("Quote ID: " + q.ID.ToString());
                    }
                    Console.ReadLine();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex.Message);
            }
            
        }
    }
}

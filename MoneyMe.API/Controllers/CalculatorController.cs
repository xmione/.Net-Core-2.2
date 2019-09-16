using Microsoft.AspNetCore.Mvc;
using MoneyMe.API.Models;
using MoneyMe.BO;
using MoneyMe.EF.Models;
using Newtonsoft.Json.Linq;
using System;

namespace MoneyMe.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        [HttpGet("TestMethod")]
        public ReturnObject TestMethod()
        {
            ReturnObject ro = new ReturnObject();
            ro.Result = new string[] { "Custom", "Method" };
            return ro;
        }

        [HttpPost("TestMethod2")]
        public ReturnObject TestMethod2([FromBody]string test)
        {
            ReturnObject ro = new ReturnObject();
            ro.Result = new string[] { "Custom", "Method", test };
            return ro;
        }

        [HttpPost("PostQuote")]
        public ReturnObject PostQuote([FromBody]JObject jObject)
        {
            try
            {
                JToken parameters = jObject;

                Quote quote = new Quote();
                quote.Amount = parameters["Amount"].ToObject<decimal>();
                quote.Rate = 10;
                quote.Term = parameters["Term"].ToObject<int>();
                quote.Title = parameters["Title"].ToObject<string>();
                quote.FirstName = parameters["FirstName"].ToObject<string>();
                quote.LastName = parameters["LastName"].ToObject<string>();
                quote.EmailAddress = parameters["EmailAddress"].ToObject<string>();
                quote.MobileNo = parameters["MobileNo"].ToObject<string>();

                BO_Calculator bo = new BO_Calculator();
                ReturnObject ro = new ReturnObject();
                bo.PostQuote(quote);
                ro.Result = quote;

                return ro;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("GetQuote")]
        public ReturnObject GetQuote([FromBody] JObject jObject)
        {
            try
            {
                JToken parameters = jObject;


                Quote model = new Quote();
                model.Amount = parameters["Amount"].ToObject<decimal>();
                model.Rate = 10;
                model.Term = parameters["Term"].ToObject<int>();
                model.Title = parameters["Title"].ToObject<string>();
                model.FirstName = parameters["FirstName"].ToObject<string>();
                model.LastName = parameters["LastName"].ToObject<string>();
                model.EmailAddress = parameters["EmailAddress"].ToObject<string>();
                model.MobileNo = parameters["MobileNo"].ToObject<string>();

                ReturnObject ro = new ReturnObject();
                ro.Result = new BO_Calculator().Get(model);

                return ro;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("CalculateQuote")]
        public ReturnObject CalculateQuote([FromBody] JObject jObject)
        {
            try
            {
                JToken parameters = jObject;

                Quote quote = new Quote();
                quote.Amount = parameters["Amount"].ToObject<decimal>();
                quote.Rate = parameters["Rate"].ToObject<decimal>();
                quote.Term = parameters["Term"].ToObject<int>();
                quote.Title = parameters["Title"].ToObject<string>();
                quote.FirstName = parameters["FirstName"].ToObject<string>();
                quote.LastName = parameters["LastName"].ToObject<string>();
                quote.EmailAddress = parameters["EmailAddress"].ToObject<string>();
                quote.MobileNo = parameters["MobileNo"].ToObject<string>();

                ReturnObject ro = new ReturnObject();
                ro.Result = new BO_Calculator().Calculate(quote);

                return ro;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost("GetTitles")]
        public ReturnObject GetTitles()
        {
            try
            {

                ReturnObject ro = new ReturnObject();
                ro.Result = new BO_Calculator().GetTitles();

                return ro;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

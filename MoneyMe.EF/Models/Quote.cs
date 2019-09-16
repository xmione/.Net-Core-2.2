using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;
using static MoneyMe.EF.Calculator;
//using static MoneyMe.Entity.Calculator;

namespace MoneyMe.EF.Models
{
    //[DataContract]
    //public class Quote
    //{
    //    [DataMember]
    //    public int ID { get; set; }

    //    [DataMember]
    //    public decimal Amount { get; set; }

    //    [DataMember]
    //    public int Term { get; set; }

    //    [DataMember]
    //    public TermTypes TermType { get; set; }

    //    [DataMember]
    //    public decimal Rate { get; set; }

    //    [DataMember]
    //    public decimal RepaymentMonthly { get; set; }

    //    [DataMember]
    //    public decimal RepaymentWeekly { get; set; }

    //    [DataMember]
    //    public string Title { get; set; }

    //    [DataMember]
    //    public string FirstName { get; set; }

    //    [DataMember]
    //    public string LastName { get; set; }

    //    [DataMember]
    //    public string EmailAddress { get; set; }

    //    [DataMember]
    //    public string MobileNo { get; set; }
    //}

    public class Quote
    {
        public int ID { get; set; }
        public decimal Amount { get; set; }
        public int Term { get; set; }
        public TermTypes TermType { get; set; }
        public decimal Rate { get; set; }
        public decimal RepaymentMonthly { get; set; }
        public decimal RepaymentWeekly { get; set; }
        public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public string MobileNo { get; set; }
    }
}

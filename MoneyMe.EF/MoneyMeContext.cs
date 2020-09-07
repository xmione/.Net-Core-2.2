using Microsoft.EntityFrameworkCore;
using MoneyMe.EF.Models;

namespace MoneyMe.EF
{
    public class MoneyMeContext:DbContext
    {
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Title> Titles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Server=(localdb)\\mssqllocaldb;Database=ContosoUniversity2;Trusted_Connection=True;MultipleActiveResultSets=true
            //optionsBuilder.UseSqlServer(@"Server=(LocalDB)\MSSQLLocalDB;Database=MoneyMe;Trusted_Connection=True;MultipleActiveResultSets=True;");
            //AppDomain.CurrentDomain.SetData("DataDirectory", System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AppData"));
            //optionsBuilder.UseSqlServer(@"Server=(LocalDB)\MSSQLLocalDB;AttachDBFilename=C:\Projects\MoneyMe\MoneyMe.EF\AppData\MoneyMe.mdf;Database=MoneyMe;Trusted_Connection=Yes;");
            optionsBuilder.UseSqlServer(@"Server=(local);Database=MoneyMe;Trusted_Connection=Yes;");
        }
    }
}

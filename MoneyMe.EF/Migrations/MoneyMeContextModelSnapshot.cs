﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MoneyMe.EF;

namespace MoneyMe.EF.Migrations
{
    [DbContext(typeof(MoneyMeContext))]
    partial class MoneyMeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MoneyMe.Entity.EF.Models.Quote", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<decimal>("Amount");

                    b.Property<string>("EmailAddress");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("MobileNo");

                    b.Property<decimal>("Rate");

                    b.Property<decimal>("RepaymentMonthly");

                    b.Property<decimal>("RepaymentWeekly");

                    b.Property<int>("Term");

                    b.Property<int>("TermType");

                    b.Property<string>("Title");

                    b.HasKey("ID");

                    b.ToTable("Quotes");
                });
#pragma warning restore 612, 618
        }
    }
}

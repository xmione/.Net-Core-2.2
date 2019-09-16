﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;


namespace MoneyMe.EF.Migrations
{
    [DbContext(typeof(MoneyMeContext))]
    [Migration("20190915060529_Create_Title_Table")]
    partial class Create_Title_Table
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MoneyMe.Entity.EF.Models.Title", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("ID");

                    b.ToTable("Titles");

                    //b.HasData(
                    //            new { ID = 1, Name = "Mr." },
                    //            new { ID = 2, Name = "Ms." },
                    //            new { ID = 3, Name = "Mrs." },
                    //            new { ID = 4, Name = "Dr." },
                    //            new { ID = 5, Name = "Engr." }
                    //        );
                });

#pragma warning restore 612, 618
        }
    }
}

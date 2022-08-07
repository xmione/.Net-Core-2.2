# .Net-Core-2.2

Sample Implementation of .Net Core 2.2 Web API, Razor MVC, JQueryUI, EntityFramework 6.
Developed using Visual Studio 2017 and SQL Server 2016.

# Runing the sample application (In Visual Studio)
First build the Solution. 
Given there's no error, goto the Package Manager Console and select the MoneyMe.EF project.
Run the update-database -verbose command to create the MoneyMe database in you local sql server.
Make sure that both the API and Razor projects are set as start up projects.
To do this, right-click the solution file and select Set Startup Projects.
Select Multiple startup projects radio button.
Set the Action for API and Razor projects as Start or Start without debugging.
Rebuild solution then run!

#Trouble-shooting

If you find errors in running the projects, you probably should check the following if missing:

HTTP Error 502.5 - ANCM Out-Of-Process Startup Failure after upgrading to ASP.NET Core 2.2
- Download the net core 2.2 sdk



#ReactJS and Vue Web Application Version

There's an on-going development for ReactJS and Vue Javascript Frameworks Web Application version.
Please stand by for the upcoming updates.


Note: I'll improve this whenever I have time. ;)

Happy coding!

<a href="https://gitpod.io/#<your-project-url>">
  <img
    src="https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod"
    alt="Contribute with Gitpod"
  />
</a>

using System;
using System.Text;
using System.Web;

namespace MoneyMe.API.Test
{
	public class Global : System.Web.HttpApplication
	{

		protected void Application_Start()
		{
			//MapperHelper.RegisterMappings();
		}

		protected void Application_BeginRequest(object sender, EventArgs e)
		{
			//Allow cross site
			HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
			if ((HttpContext.Current.Request.HttpMethod == "OPTIONS"))
			{
				HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST,OPTIONS");
				HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
				HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
				HttpContext.Current.Response.End();
			}

			try
			{
				//Logs
				var bytes = new byte[HttpContext.Current.Request.InputStream.Length];
				HttpContext.Current.Request.InputStream.Read(bytes, 0, bytes.Length);
				HttpContext.Current.Request.InputStream.Position = 0;
				string content = Encoding.ASCII.GetString(bytes);
				string service = ((HttpApplication)(sender)).Request.Url.AbsoluteUri;

				//BO_ServiceLogs.WriteLog("", service, content);
			}
			catch { }
		}
	}
}
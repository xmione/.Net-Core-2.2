var minValue = 1;
var maxValue = 20000;
var selectedValue = 10;
var minTermValue = 1;
var maxTermValue = 100;
var selectedTermValue = 10;
//var baseURL = "http://localhost/MoneyMe/Calculator/v2"; // for IIS 7 Server deployment
var baseURL = "http://localhost:26344/api/Calculator/"; // for local IIS Express Server deployment
$(function () {
    
    $("#calculator-btn").click(function () {

        var jsonText = $("#json-text").val().trim();
        jsonText = JSON.parse(jsonText);

        var o = { Amount: jsonText.AmountRequired, Term: jsonText.Term, Title: jsonText.Title, FirstName: jsonText.FirstName, LastName: jsonText.LastName, EmailAddress: jsonText.Email, MobileNo: jsonText.Mobile };
        postQuote(o);
    });
    
    function postdata(url, data, successFunc, errorFunc) {
        $.ajax(
            {
                url: url,
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: successFunc,
                error: errorFunc
            }
        );
    }
    function testMethod() {
        var svcURL = baseURL + "TestMethod/";
        var methodType = "POST";
        var data = null;
        setTimeout(function () { xhrMethod(svcURL, data, methodType, testMethodSuccessFunc, defaultErrorFunc); }, 100);
    }

    function testMethod2() {
        var svcURL = baseURL + "TestMethod2/";
        var data = { test: "hello" };

        setTimeout(function () { postdata(svcURL, data, testMethodSuccessFunc, defaultErrorFunc); }, 100);
    }
    

    function getQuote(data) {
        var svcURL = baseURL + "GetQuote";
        var methodType = "POST";

        setTimeout(function () { xhrMethod(svcURL, data, methodType, getQuoteSuccessFunc, defaultErrorFunc); }, 100);
    }

    function postQuote(data) {
        var svcURL = baseURL + "PostQuote";
        var methodType = "POST";

        setTimeout(function () { xhrMethod(svcURL, data, methodType, postQuoteSuccessFunc, defaultErrorFunc); }, 100);
    }

    function testMethodSuccessFunc(data, status, jqXHR) {
        var quote = data.Result;
        $("#first-name").val(data.Result.Custom);
        $("#last-name").val(data.Result.Method);

        //setTimeout(endLoading, 1000);
    }

    function getQuoteSuccessFunc(data, status, jqXHR) {
        var quote = data.Result;
        $("#selectedValue").val(data.Result.Amount);
        $("#selectedTermValue").val(data.Result.Term);
        $("#rate").val(data.Result.Rate);
        $("#title").val(data.Result.Title);
        $("#first-name").val(data.Result.FirstName);
        $("#last-name").val(data.Result.LastName);
        $("#email-address").val(data.Result.EmailAddress);
        $("#mobile-no").val(data.Result.MobileNo);

        $("#first-name").prop("disabled", true);
        $("#last-name").prop("disabled", true);

        //setTimeout(endLoading, 1000);
    }

    function postQuoteSuccessFunc(data, status, jqXHR) {
        var quote = data.result;
        
        var url = "/QuoteCalculator/Index?id=" + quote.id;
        
        window.location.href = url;

        //$.ajax({
        //    url: '@Url.Content("~/Calculator/Index")',
        //    type: 'POST',
        //    data: JSON.stringify(quote),
        //    success: function (response) {
        //    },
        //    error: function (xhr, ajaxOptions, thrownError) { alert(xhr.status); alert(thrownError); }
        //});
        
        //setTimeout(endLoading, 1000);
    }

    function defaultErrorFunc(xhr) {
        if (xhr.status === 200 && xhr.readyState === 4) {
            alert("Error: status = 200, readyState = 4");
        }
        else {
            $("#divMessage").html(xhr.responseText);
        }

        //setTimeout(endLoading, 1000);
    }
});


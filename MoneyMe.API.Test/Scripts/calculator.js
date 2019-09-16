var minValue = 1;
var maxValue = 20000;
var selectedValue = 10;
var minTermValue = 1;
var maxTermValue = 100;
var selectedTermValue = 10;
//var baseURL = "http://localhost/MoneyMe/Calculator/v2"; // for IIS 7 Server deployment
var baseURL = "http://localhost:58327/Calculator/v2/"; // for local IIS Express Server deployment
$(function () {
    var handle = $("#custom-handle");
    $("#slider").slider({
        range: "min",
        value: selectedValue,
        min: minValue,
        max: maxValue,
        slide: function (event, ui) {
            handle.text("$" + ui.value);
            selectedValue = ui.value;
        }
    });
    $("#min-value").html("$" + minValue);
    $("#max-value").html("$" + maxValue);

    var termhandle = $("#term-custom-handle");
    $("#term-slider").slider({
        range: "min",
        value: selectedTermValue,
        min: minTermValue,
        max: maxTermValue,
        slide: function (event, ui) {
            termhandle.text(ui.value + (ui.value > 1 ? " years" : " year"));
            selectedTermValue = ui.value;
        }
    });
    $("#term-min-value").html(minTermValue + " year");
    $("#term-max-value").html(maxTermValue + " years");

    $("#calculator-btn").click(function () {

        var jsonText = $("#json-text").val().trim();
        jsonText = JSON.parse(jsonText);

        var o = { Amount: jsonText.AmountRequired, Term: jsonText.Term, Title: jsonText.Title, FirstName: jsonText.FirstName, LastName: jsonText.LastName, EmailAddress: jsonText.Email, MobileNo: jsonText.Mobile };
        postQuote(o);
    });
    $("#calculate-btn").click(function () {
        var title = $("#title").val();
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var emailAddress = $("#email-address").val();
        var mobileNo = $("#mobile-no").val();
        $("#max-value").html("$" + maxValue);
        var msgtxt = "Value        : " + selectedValue + "\r\n " +
            "Terms(years) : " + selectedTermValue + "\r\n " +
            "Name         : " + title + " " + firstName + " " + lastName + "\r\n " +
            "Email Address: " + emailAddress + "\r\n " +
            "Mobile Number: " + mobileNo;
        //alert(msgtxt);

        var o = { Amount: selectedValue, Term: selectedTermValue, Title:title, FirstName: firstName, LastName: lastName, EmailAddress: emailAddress, MobileNo: mobileNo };

        testMethod();
        getQuote(o);
    });

    $("input[type='text']").on("click", function () {
        $(this).select();
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

        getQuote(quote);
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


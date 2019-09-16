var minValue = 1000;
var maxValue = 20000;
var amountStep = 500;
var selectedValue = 10;
var minTermValue = 1;
var maxTermValue = 100;
var selectedTermValue = 10;
var minRateValue = 1;
var maxRateValue = 20;
var selectedRateValue = 5;
//var baseURL = "http://localhost/MoneyMe/Calculator/v2"; // for IIS 7 Server deployment
var baseURL = "http://localhost:26344/api/Calculator/"; // for local IIS Express Server deployment
$(function () {
    getModel(); 
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

         var o = { Amount: selectedValue, Term: selectedTermValue, Rate: selectedRateValue, Title:title, FirstName: firstName, LastName: lastName, EmailAddress: emailAddress, MobileNo: mobileNo };

        calculateQuote(o);
    });
    $("input[type='text']").on("click", function () {
        $(this).select();
    });
    function getModel() {
        selectedValue = $("#hdn-amount").val();
        selectedTermValue = $("#hdn-term").val();
        selectedRateValue = $("#hdn-rate").val();
        getSliders();
        getTitles();
    }
    function getSliders() {
        var handle = $("#custom-handle");
        handle.text("$" + selectedValue );

        $("#slider").slider({
            range: "min",
            value: selectedValue,
            min: minValue,
            max: maxValue,
            step: amountStep,
            slide: function (event, ui) {
                handle.text("$" + ui.value);
                selectedValue = ui.value;
            }
        });
        $("#min-value").html("$" + minValue);
        $("#max-value").html("$" + maxValue);

        var termhandle = $("#term-custom-handle");
        termhandle.text(selectedTermValue + (selectedTermValue > 1 ? " years" : " year"));

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

        var rateHandle = $("#rate-custom-handle");
        rateHandle.text(selectedRateValue + " %" );

        $("#rate-slider").slider({
            range: "min",
            value: selectedRateValue,
            min: minRateValue,
            max: maxRateValue,
            slide: function (event, ui) {
                rateHandle.text(ui.value + "%");
                selectedRateValue = ui.value;
            }
        });
        $("#rate-min-value").html(minRateValue + "%");
        $("#rate-max-value").html(maxRateValue + "%");
    }
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
    function calculateQuote(data) {
        var svcURL = baseURL + "CalculateQuote";
        var methodType = "POST";

        setTimeout(function () { xhrMethod(svcURL, data, methodType, calculateQuoteSuccessFunc, defaultErrorFunc); }, 100);
    }
    function testMethodSuccessFunc(data, status, jqXHR) {
        var quote = data.result;
        $("#first-name").val(quote.Custom);
        $("#last-name").val(quote.Method);

        //setTimeout(endLoading, 1000);
    }
    function getQuoteSuccessFunc(data, status, jqXHR) {
        var quote = data.result;
        $("#selectedValue").val(quote.amount);
        $("#selectedTermValue").val(quote.term);
        $("#rate").val(quote.rate);
        $("#title").val(quote.title);
        $("#first-name").val(quote.firstName);
        $("#last-name").val(quote.lastName);
        $("#email-address").val(quote.emailAddress);
        $("#mobile-no").val(quote.mobileNo);

        $("#first-name").prop("disabled", true);
        $("#last-name").prop("disabled", true);

        //setTimeout(endLoading, 1000);
    }
    function calculateQuoteSuccessFunc(data, status, jqXHR) {
        var quote = data.result;
        var url = "/QuoteInfo/Index?id=" + quote.id;

        window.location.href = url;
        //selectedValue = quote.amount;
        //selectedTermValue = quote.term;
        //$("#rate").val(quote.rate);
        //$("#title").val(quote.title);
        //$("#first-name").val(quote.firstName);
        //$("#last-name").val(quote.lastName);
        //$("#email-address").val(quote.emailAddress);
        //$("#mobile-no").val(quote.mobileNo);

        //$("#first-name").prop("disabled", true);
        //$("#last-name").prop("disabled", true);

        //$.ajax({
        //    url: '@Url.Content("~/Calculator/QuoteInfo")',
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
            alert("Error: " + xhr.responseText);
        }

        //setTimeout(endLoading, 1000);
    }
    function getTitles() {
        var svcURL = baseURL + "GetTitles";
        var methodType = "POST";
        var data = null;
        setTimeout(function () { xhrMethod(svcURL, data, methodType, getTitlesSuccessFunc, defaultErrorFunc); }, 100);
    }
    function getTitlesSuccessFunc(data, status, jqXHR) {
        var titles = data.result;
        populateTitles(titles);
        
        //setTimeout(endLoading, 1000);
    }
    function populateTitles(titles) {
        var $title = $("#title");

        $.each(titles, function () {
            $title.append($("<option />").val(this.id).text(this.name));
        });
        
        
    }

});


function passQuote(quote) {
    var firstName = quote.FirstName;
    alert("FirstName: " + firstName);
}
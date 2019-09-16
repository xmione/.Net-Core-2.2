//var baseURL = "http://localhost/MoneyMe/Leaves/v2"; // for IIS 7 Server deployment
var baseURL = "http://localhost:58327/Leaves/v2/"; // for local IIS Express Server deployment

function LeavesPage() {
    this.init = function () {
        $body = $("body");
    }
	this.bindMethods = function () {
		$("#btnGetCustomMethod").click(btnGetCustomMethod);
    }
    this.addHiddenFields = function () {
        $("#content-div").append("<div id='divMessage' />");
    }
    var self = this;
    self.init();
    self.bindMethods(self);
    self.addHiddenFields();
}

function btnGetCustomMethod()
{
    //var svcURL = baseURL + "GetCustomMethod";
    var svcURL = baseURL + "TestMethod";
	var data = null;
	var methodType = "POST";

	setTimeout(function () { xhrMethod(svcURL, data, methodType, defaultSuccessFunc, defaultErrorFunc); }, 100);
}

function defaultSuccessFunc(data, status, jqXHR) {
    var amazingRepeater = new Repeater("repeater-div", "responsive-table", "amazing-repeater", data.Result);

	setTimeout(endLoading, 1000);
}

function personalInformation2SuccessFunc(data, status, jqXHR) {
	
	var amazingRepeater = new Repeater("repeater-div", "responsive-table", "amazing-repeater", data);

	setTimeout(endLoading, 1000);
}

function defaultErrorFunc(xhr) {
    if (xhr.status === 200 && xhr.readyState === 4) {
		setTimeout(btnGetUserCollection, 1000);
    }
    else {
        $("#divMessage").html(xhr.responseText);
     }
    
    setTimeout(endLoading, 1000);
}

$(document).ready(function () {
	var leavesPage = new LeavesPage();
});




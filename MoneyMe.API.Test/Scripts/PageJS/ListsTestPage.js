//var baseURL = "http://localhost:88/Lists/v2"; // for IIS 7 Server deployment
var baseURL = "http://localhost:58327/Lists/v2/"; // for local IIS Express Server deployment

function ListsPage() {
    this.init = function () {
        $body = $("body");
    }
	this.bindMethods = function () {
		$("#btnGetSharePointList").click(btnGetSharePointList);
    }
    this.addHiddenFields = function () {
        $("#content-div").append("<div id='divMessage' />");
    }
    var self = this;
    self.init();
    self.bindMethods(self);
    self.addHiddenFields();
}

function btnGetSharePointList() {
	var svcURL = baseURL + "GetSharePointList";
	var data = null;
	var methodType = "POST";

	setTimeout(function () { xhrMethod(svcURL, data, methodType, defaultSuccessFunc, defaultErrorFunc); }, 100);
}

function defaultSuccessFunc(data, status, jqXHR) {
    var amazingRepeater = new Repeater("repeater-div", "responsive-table", "amazing-repeater", data.Result);

	setTimeout(endLoading, 1000);
}

function defaultErrorFunc(xhr) {
    if (xhr.status == 200 && xhr.readyState == 4) {
		setTimeout(btnGetUserCollection, 1000);
    }
    else {
        $("#divMessage").html(xhr.responseText);
     }
    
    setTimeout(endLoading, 1000);
}

$(document).ready(function () {
	var listsPage = new ListsPage();
});




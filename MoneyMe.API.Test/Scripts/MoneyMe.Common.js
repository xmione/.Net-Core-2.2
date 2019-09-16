var url = window.parent.location.href.toLowerCase();

var htmlParentElement = $(window.parent.document.body.parentElement);
var htmlHeadParentElement = $(window.parent.document.head);
var htmlBodyParentElement = $(window.parent.document.body);

var htmlElement = $(window.document.body.parentElement);
var htmlHeadElement = $(window.document.head);
var htmlBodyElement = $(window.document.body);

function pageViewerAutoHeight() {
    try {
        var iframe = window.frameElement;
        var html = htmlElement;
        var body = htmlBodyElement;
        
        html.css({
        	"overflow": "hidden"
        });

        var bodyHeight = (body.height() >= 750 ? body.height() : 750) + 25;

        $(iframe).parent().height(bodyHeight);
        $(iframe).height(bodyHeight);
    } catch (e) {
        alert(e.message);
    }
}

function addLayoutsInParent() {
    try {
        htmlParentElement
            .append("<link href='../Style%20Library/Scripts/CEB.Amazing.Common.js' rel='stylesheet' type='text/css' />")
            .append("<script src='../Style%20Library/Styles/CEB.Amazing.Common.css' type='text/javascript'></script>");
    } catch (e) {
        alert(e.message);
    }
}

function getSiteCollectionUrl() {
    try {
        return url.split("/").splice(0, 5).join("/");
    } catch (e) {
        alert(e.message)
    }
}

function getServiceUrl() {
    try {
		//return "http://rscvmeWsdv201:808/Amazing/AmazingServices.svc";
    
    	//var protocol = window.parent.location.protocol;
    	//var hostname = window.parent.location.hostname;
    	
    	//if (hostname == "iamceb.cebupacificair.com") {
    	//	return protocol + "//" + "cebsoa.cebupacificair.com/Amazing/AmazingServices.svc";
    	//}
    	
     //   return protocol + "//" + hostname + ":808/Amazing/AmazingServices.svc";
		//return "http://localhost:88"; // IIS 7 Server implementation
		return "http://localhost:58326"; // local VS IISExress Server implementation
		
    } catch (e) {
        alert(e.message)
    }
}

function getRequestQueryString() {
	try {
	    var search = (window.parent.location.search != "") ? window.parent.location.search.replace("?", "").split("&") : [];
	
	    var requestQueryString = {};
	    for (var i = 0; i < search.length; i++) {
	        var _search = search[i].split("=");
	        requestQueryString[_search[0]] = _search[1];
	    }
	
	    return requestQueryString;
    } catch (e) {
        alert(e.message)
    }
}

function showModalBackgroundInParent(showSpinner) {
    try {
        var spinner = $("<img></img>");
        spinner
            .attr("src", "Images/spinner.gif");

        var modalBackground = $("<div></div>");
        modalBackground
            .attr("id", "custom-modal-background")
            .attr("class", "custom-modal-background")
            .append(spinner);

        htmlBodyParentElement.append(modalBackground);

        modalBackground.fadeIn();

        spinner.position({
            my: "center",
            at: "center",
            of: htmlBodyParentElement
        });

        if (!showSpinner) {
            spinner.hide();
        }
    } catch (e) {
        alert(e.message);
    }
}

function showModalBackground(showSpinner) {
    try {
        var spinner = $("<img></img>");
        spinner
            .attr("src", "Images/spinner.gif");

        var modalBackground = $("<div></div>");
        modalBackground
            .attr("id", "custom-modal-background")
            .attr("class", "custom-modal-background")
            .append(spinner);

        htmlElement.append(modalBackground);

        modalBackground.fadeIn();

        spinner.position({
            my: "top+50",
            at: "top+50",
            of: htmlElement
        });

        if (!showSpinner) {
            spinner.hide();
        }
    } catch (e) {
        alert(e.message);
    }
}

function showModal(title, content) {
    try {
        var modal = 
            $("<div id='custom-modal' class='panel panel-primary custom-modal'>" +
                "<div class='panel-heading'>" +
                    title +
                    "<button type='button' title='Close' class='btn btn-primary btn-xs' onclick='closeModal();' style='float: right;'>" +
                        "<span class='glyphicon glyphicon glyphicon-remove' aria-hidden='true'></span>" +
                    "</button>" +
                "</div>" +
                "<div class='panel-body'>" +
                    "<form>" +
                        "<div class='form-group row'>" +
                            "<div class='col-sm-12'>" +
                                "<p>" + content + "</p>" +
                            "</div>" +
                        "</div>" +
                    "</form>" +
                "</div>" +
            "</div>");

        htmlElement.append(modal);

        modal.fadeIn();

        modal.position({
            my: "top+50",
            at: "top+50",
            of: htmlElement
        });
    } catch (e) {
        alert(e.message);
    }
}

function closeModal() {
    try {
        $(".custom-modal-background").remove();
        $(".custom-modal").remove();
    } catch (e) {
        alert(e.message);
    }
}

function setActive(event) {
	try {
		$(event).parent().find("a").removeClass("active");
		$(event).addClass("active");
			
		var id = $(event).attr("id");
		$("div.content").addClass("hide");
		$("div#" + id).removeClass("hide");
	} catch (e) {
		alert(e.message);
	}
}

function getWebServiceError(xhr, status, error) {
	try {
	    var p = $(xhr.responseText).find("p");
	
	    var exceptionMessage = "";
	    
	    $.each(p, function (index, element) {
	    	var errorMessage = $(element);
	    	
	    	if ($(errorMessage).is(':first-child') || $(errorMessage).is(':last-child')) {
	    		return;
	    	} else if (errorMessage.length != 0) {
		        exceptionMessage += $(errorMessage).html();
		    }
	    });
	    
	    if (exceptionMessage.length == 0) {
	    	exceptionMessage = " [" + xhr.status + "] " + xhr.statusText;
	    }
	
	    return exceptionMessage.replace("The exception stack trace is:", "");
	} catch (e) {
		alert(e.message);
	}
}

function getToken() {
    try {
	    var token = "testing token only";
		//var tokenUrl = "https://iamceb.cebupacificair.com/businesstools/amazing/_layouts/IAMCEB.Common.Token/UserToken.aspx/CreateToken";
		//$.support.cors = true;
	 //   $.ajax({
	 //       type: "POST",
		//	url: getSiteCollectionUrl() + "/_layouts/IAMCEB.Common.Token/UserToken.aspx/CreateToken",
	 //       async: false,
	 //       contentType: "application/json; charset=utf-8",
	 //       crossDomain: true,
	 //       data: "{}",
	 //       dataType: "json",
	 //       success: function (data) {
	 //           token = data.d;
	 //       },
	 //       error: function (xhr, status, error) {
		//		alert(" [" + xhr.status + "]: " + xhr.statusText);
	 //       }
	 //   });
	
	    return token;
    } catch (e) {
        alert(e.message)
    }
}

function xhrMethod(svcURL, data, methodType, success, error) {
	//startLoading();
	// just to make sure it is not cached, manipulate the url with date
	//svcURL += "?date=" + new Date($.now());

	//contentType: "application/json; charset=utf-8; application/x-www-form-urlencoded",
	$.support.cors = true;
	$.ajax({
		type: methodType,
		url: svcURL,
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		data: JSON.stringify(data),
		async: true,
		cache: false,
		success: success,
		error: error
	});

}

function startLoading() {
	$body.addClass("loading");
}

function endLoading() {
	$body.removeClass("loading");
}

function Repeater(containerID, tableCSS, id, resultData) {
	this.tableID = id;
	this.header = function () {
		$("#content-div").append("<input id='row-hdn' type='hidden' value='0'>");
		$("#" + containerID).html(""); // initialize/clear existing repeater-div
		$("#" + containerID).append("<table id='" + id + "' class='" + tableCSS + "'>");
		$("#" + id).append("<thead id='" + id + "-thead'>");
		$("#" + id + "-thead").append("<tr id='tr-head'>");
		$("#" + id).append("<tbody id='" + id + "-tbody'>");
	}
	this.body = function () {

		if (typeof (resultData) == "undefined") {
			return;
		}
		if (resultData.length > 0) {
			// get column header names
			$("#tr-head").append("<th scope='col'></th>");
			for (var columnName in resultData[0]) {
				$("#tr-head").append("<th scope='col'>" + columnName + "</th>");
			}
			// get row data
			rowInterval = setInterval(function () {
				getRowData(id, resultData);
			}, 100);
			
		}

	}
	this.repeater = this.header() + this.body();
}
function getRowData(id, resultData)
{
	var row = parseInt($("#row-hdn").val());
	
	setTimeout(
		function () {
			$("#" + id + "-tbody").append("<tr id='tr-" + row.toString() + "'>");
			$("#tr-" + row).append("<td><input id='chk_" + resultData[row].ID + "' type='checkbox'/></td>");
			for (var columnName in resultData[row]) {
				var colValue = resultData[row][columnName] == null ? "" : resultData[row][columnName].toString();
				$("#tr-" + row.toString()).append("<td>" + colValue + "</td>");
			}

			row++;
			if (row < resultData.length) {
				$("#row-hdn").val(row);
			}
			else {
				row = 0;
				clearInterval(rowInterval);
				$("#row-hdn").val(row.toString());

			}
		}
		, 50
	);
}


var rowInterval;
function testOnly() {
	var data = [];
	for (var i = 0; i < 1000; i++) {
		data.push({ "Data": i.toString() });
	}
	$("#content-div").append("<input id='row-hdn' type='hidden' value='0'>");
	$("#repeater-div").html("");

	rowInterval = setInterval(
		function () {
			getRow();
		}
		, 200
	);

	//var amazingRepeater = new Repeater("repeater-div", "responsive-table", "amazing-repeater", data);
	setTimeout(endLoading, 1000);
}

function getRow() {
	var row = parseInt($("#row-hdn").val());
	var divString = "<div>" + row.toString() + "</div>";
	setTimeout(
		function () {
			$("#repeater-div").append(divString);
			row++;
			if (row < 1000) {
				$("#row-hdn").val(row);
			}
			else {
				clearInterval(rowInterval);
			}
		},
		100);


}
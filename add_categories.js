function make_request(url) {
	http_req = new XMLHttpRequest();
	if (!http_req) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}

	http_req.onreadystatechange = append_categories;
	http_req.open('GET', url);
	http_req.setRequestHeader('Content-Type', 'text/html');
	http_req.send();
}

function append_categories() {
	if (http_req.readyState == 4 && http_req.status == 200) {
		var categories = document.querySelector("#categories");
		categories.innerHTML += "<br />" + http_req.responseText;
		color_links();
	} else {
		//alert('There was a problem with the request.');
	}
}

var http_req;
window.addEventListener("load", function(){
	make_request("categories-01.html");
	});

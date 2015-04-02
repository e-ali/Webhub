function change_header(element, state) {
	if (state)
		element.style.setProperty("color", "#6E92A1");
	else
		element.style.removeProperty('color');

	element.textContent =
		element.textContent.replace(/(.{3})(.{3})/, '$2$1');
}

function add_listener(){
	var footer = document.querySelector(".site-footer");
	footer.addEventListener("click", function(){
		var header = document.querySelector("#header"),
		content = header.textContent;
		change_header(header, content == "Webhub");
	});
}

function color_links(){
	var links = document.querySelectorAll(".list a");

	for (i = 0; i < links.length; i++)
		if (i % 2)
			links[i].style.setProperty("color", "#6E92A1");
		else
			links[i].style.setProperty("color", "#467386");
}

window.addEventListener("load", add_listener);
window.addEventListener("load", color_links);

// Add link copy functionality for sharing
function pageReady() {
	var currentUrl = window.location.href;
	var linkCopy = document.querySelector("#linkCopy");
	linkCopy.addEventListener("click", function() {
		navigator.clipboard.writeText(currentUrl);
	});
}

document.addEventListener("DOMContentLoaded", pageReady);
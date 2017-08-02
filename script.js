var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

console.log (navigator.userAgent);

window.addEventListener('scroll', stickyHeader);

function stickyHeader() {
	var header =document.getElementById('header');
	var distance = document.body.scrollTop;
	
	if(distance <= previousScroll && distance >= 1) {
		header.className = 'sticky-header';
	}else{
		header.className = 'static-header';
	}
	
	previousScroll=window.pageYOffset;
}

//Need to add function for images here.... use navigator.useragent to detect mobile browsers.

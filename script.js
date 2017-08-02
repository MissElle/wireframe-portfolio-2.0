var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

window.addEventListener('scroll', stickyHeader);

function stickyHeader() {
	var header =document.getElementById('header');
	var headerPos = header.offsetTop;
	var distance = document.body.scrollTop;
	
	console.log(headerPos +' ' +distance);
	
	if(distance <= previousScroll && distance >= 48) {
		header.className = 'sticky-header';
	}else{
		header.className = 'none';
	}
	
	previousScroll=window.pageYOffset;
}

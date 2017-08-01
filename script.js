var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

window.addEventListener('scroll', stickyHeader);

function stickyHeader() {
	var header =document.getElementById('header');
	var distance = document.body.scrollTop;;
	
	if(distance <= previousScroll) {
		header.className = 'sticky-header';
	}else{
		header.className = 'none';
	}
	
	previousScroll=window.pageYOffset;
}

 
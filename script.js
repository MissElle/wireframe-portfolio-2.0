var header = document.getElementById('header');
window.addEventListener('scroll', stickyHeader);

function stickyHeader() {
	var header =document.getElementById('header');
	var headerTop = header.offsetTop;
	var scrollAmount = window.pageYOffset;
	var distance = headerTop - scrollAmount;
	
	console.log('Function is read');
	
	if(distance <= -48) {
		console.log('if statement read' + distance);
		header.className = 'sticky-header';
	}else{
		console.log('else statement read' + distance);
		header.className = 'none';
	}
}

 
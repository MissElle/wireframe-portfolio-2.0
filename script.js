var previousScroll = 0; //This updates after every scroll to afix the header only if distance is less than is used to be, or "scroll up

var images = [
	{"name" : "test",
	"location" : "images/test-sad-dog.jpg",
	"description" : "<p>This is a test paragraph</p> <p> this is a second test paragraph</p>"},
	{"name" : "test-2",
	 "location" : "images/test-sad-cat.jpg",
	 "description" : "<p>This is a test paragraph</p> <p> this is a second test paragraph</p>"
	}];

window.addEventListener('scroll', stickyHeader);
window.addEventListener('load', isMobile);

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

function isMobile() {
	var figcaptions = document.getElementsByTagName('figcaption');
	var figures = document.getElementsByTagName('figure');
	
	for(var i=0; i<figcaptions.length; ++i) {
		if(/iPhone|iPad|iPod|Android| Blackberry|Opera Mini|IEMobile/i.test(navigator.userAgent)){
			figures[i].style.height = '21em';
			figcaptions[i].className = 'mobile';
		}else {
			figures[i].style.height = '15em';
			figcaptions[i].className = 'not-mobile';
		}
	}
}
											
//isMobile() test mostly derived from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
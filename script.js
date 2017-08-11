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
window.addEventListener('load', detectAspectRatio);
window.addEventListener('resize', detectAspectRatio);

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

function detectAspectRatio() {
	var docWidth = document.body.clientWidth;
	var docHeight = document.body.clientHeight;
	
	var imageSide = document.getElementById('image-side');
	var descriptionSide = document.getElementById('description-side');
	var imageBox = document.getElementById('image-box');
	
	if(docWidth >= docHeight) {
		imageSide.style.maxHeight = '90vh';
		descriptionSide.style.maxHeight = '90vh';
		imageBox.style.maxHeight = '90vh';
	}else if(docHeight < docWidth){
		imageSide.style.maxWidth = '90vh';
		descriptionSide.style.maxWidth = '10vh';
		imageBox.style.maxWidth = '100vh';
	}
	
}

//isMobile() test mostly derived from https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: true,
	autoplay: {
		delay: 4000,
	},
  pagination: {
    el: '.swiper-pagination',
		type: 'bullets',
		dynamicBullets: true,
		dynamicMainBullets: 1,
  },
});



function testWebP(callback) {

	let webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});
@@include('nouislider.min.js', {});

const swiper = new Swiper('.page__container', {
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

const swiperModel = new Swiper('.model-slider', {
	effect: 'fade',
	fadeEffect: {
    crossFade: true
  },
	zoom: {
		maxRatio: 1.5,
		minRatio: 1
	},
	thumbs: {
		swiper: {
			el: '.model-slider-mini',
			slidesPerView: 3
		}
	}
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

/*  */

let priceSlider = document.querySelector('.price-filter__range');
let input0 = document.querySelector('.price-filter__input-min');
let input1 = document.querySelector('.price-filter__input-max');
let inputs = [input0, input1];

noUiSlider.create(priceSlider, {
		start: [3750, 29500],
		connect: true,
		step: 50,
		tooltips: [false, false],
		range: {
			'min': 3750,
			'max': 29500
		}
});

priceSlider.noUiSlider.on('update', function (values, handle) {
	inputs[handle].value = values[handle];
});

// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

	input.addEventListener('change', function () {
		priceSlider.noUiSlider.setHandle(handle, this.value);
	});

});
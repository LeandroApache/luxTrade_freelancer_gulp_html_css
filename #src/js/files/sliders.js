//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let mainSLider = new Swiper('.main-slider__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	touchRatio: 1,
	simulateTouch: true,
	grabCursor: true,
	touchAngle: 45,
	loop: true,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	watchOverflow: true,

	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.swiper__pagination',
	// 	clickable: true,
	// },
	// Arrows
	navigation: {
		nextEl: '.slider-controls__arrow--next',
		prevEl: '.slider-controls__arrow--prev',
	},
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// },
});

let lotsSLider = new Swiper('.slider-lots__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	touchRatio: 1,
	simulateTouch: true,
	grabCursor: true,
	touchAngle: 45,
	loop: true,
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	watchOverflow: true,

	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.swiper__pagination',
	// 	clickable: true,
	// },
	// Arrows
	navigation: {
		nextEl: '.slider-lots__arrow--prev',
		prevEl: '.slider-lots__arrow--next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// },
});

let quotesSLider = new Swiper('.slider-quotes__body', {
	effect: 'fade',
	/*

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	// autoHeight: true,
	speed: 1800,
	// touchRatio: 1,
	// simulateTouch: true,
	// grabCursor: true,
	// touchAngle: 45,
	loop: true,
	// hashNavigation: {
	// 	watchState: true,
	// },
	// keyboard: {
	// 	enabled: true,
	// 	onlyInViewport: true,
	// 	pageUpDown: true,
	// },
	// watchOverflow: true,

	//preloadImages: false,
	//lazy: true,
	// Dotts
	// pagination: {
	// 	el: '.swiper__pagination',
	// 	clickable: true,
	// },
	// Arrows
	navigation: {
		nextEl: '.slider-quotes__btn',
	},
	breakpoints: {
		320: {
			autoHeight: true,
		},
		570: {
			autoHeight: false,
		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	// scrollbar: {
	// 	el: '.swiper-scrollbar',
	// 	draggable: true,
	// },
});


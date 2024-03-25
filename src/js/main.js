import BaseHelpers from './helpers/base-helpers';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();


import { Swiper, Parallax, Navigation, Pagination} from 'swiper'
Swiper.use([ Parallax, Navigation, Pagination ])

const swiper = new Swiper('.swiper', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


const swiperAdvantages = new Swiper('.swiper-advantages', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		640: {
		  slidesPerView: 3,
		  spaceBetween: 30
		},
	}
});

document.querySelector('.js-header__nav').addEventListener('click', function() {
	document.getElementById('nav-inner').classList.add('active');
});

document.querySelector('.js-nav-inner__close').addEventListener('click', function() {
	document.getElementById('nav-inner').classList.remove('active');
});

let last_scroll = 0;
let header = document.querySelector('.header');

window.onscroll = function(){
	if(window.scrollY > last_scroll){
		header.classList.remove('scroll-up')
	}else{
		header.classList.add('scroll-up')
	}
	last_scroll = window.scrollY;
}
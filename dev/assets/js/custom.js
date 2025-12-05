let button = {
	content: "Select 2025-10-02",
	className: "custom-button-classname",
	onClick: (dp) => {
		let date = new Date("2025-10-02");
		dp.selectDate(date);
		dp.setViewDate(date);
	},
};

new AirDatepicker("#date", {
	buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
});

new AirDatepicker("#modal-date", {
	buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
});

if (document.querySelector("select")) {
	NiceSelect.bind(document.getElementById("locations-select"), {
		searchable: true,
		placeholder: "Локация для тура",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
	NiceSelect.bind(document.getElementById("members-select"), {
		searchable: false,
		placeholder: "Участники",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
	NiceSelect.bind(document.getElementById("modal-locations-select"), {
		searchable: true,
		placeholder: "Локация для тура",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
	NiceSelect.bind(document.getElementById("modal-members-select"), {
		searchable: false,
		placeholder: "Участники",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
}

const forEach = function (t, o, r) {
	if ("[object Object]" === Object.prototype.toString.call(t))
		for (var c in t)
			Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
	else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

const hamburgers = document.querySelectorAll(".hamburger");
const burgerMenu = document.querySelector(".header__mobile-container");
const body = document.querySelector("body");

if (hamburgers.length > 0) {
	forEach(hamburgers, function (hamburger) {
		hamburger.addEventListener(
			"click",
			function () {
				this.classList.toggle("is-active");
				burgerMenu.classList.toggle("show");
				body.classList.toggle("overflow-hidden");
			},
			false
		);
	});
}

const inputTel = document.querySelectorAll('[type="tel"]')

inputTel.forEach(item => {
	const inputId = item.id
	IMask(
		document.getElementById(inputId), 
	{
		mask: "+{38}(000)000-00-00",
	}
	)
})

const swiperPopular = new Swiper('.swiper-popular', {
    loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 1000,
	navigation: {
    nextEl: '.swiper-popular-button-next',
    prevEl: '.swiper-popular-button-prev',
	},
	autoplay: {
		delay: 5000,
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		1025: {
			slidesPerView: 3,
		}
	}
});

function initBlog() {
	const breakpoint = window.matchMedia("(min-width:768px)");

	let swiperBlog;

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			console.log(breakpoint.matches);
			if (swiperBlog !== undefined) swiperBlog.destroy(true, true);
			return;
		} else if (breakpoint.matches === false) {
			return enableSwiper();
		}
	};

	const enableSwiper = function () {
		swiperBlog = new Swiper(".swiper-blog", {
			slidesPerView: 1,
			speed: 1000,
			loop: true,
			spaceBetween: 100,
			navigation: {
				nextEl: '.swiper-blog-button-next',
				prevEl: '.swiper-blog-button-prev',
			},
		});
		setupSwiperCounter(swiperBlog, '.swiper-blog-counter__current', '.swiper-blog-counter__total');
	};
	breakpoint.addListener(breakpointChecker);
	breakpointChecker();
}
initBlog()

function setupSwiperCounter(swiper, currentSelector, totalSelector) {
const updateCounter = () => {
    document.querySelector(currentSelector).innerHTML = `${swiper.realIndex + 1}&nbsp/`;
    document.querySelector(totalSelector).innerHTML = `&nbsp${swiper.slides.length}`;
};

updateCounter();

swiper.on('slideChange slidesLengthChange', updateCounter)
}

setupSwiperCounter(swiperPopular, '.swiper-popular-counter__current', '.swiper-popular-counter__total');

const initLightBox = () => {
	const galleryItems = document.querySelectorAll('.gallery-grid__item')
	const galleryOverlay = document.getElementById('galleryOverlay')
	const galleryImg = document.getElementById('galleryImage')
	const prevBtn = document.getElementById('galleryPrev')
	const nextBtn = document.getElementById('galleryNext')
	const closeBtn = document.getElementById('galleryClose')
	const counter = document.getElementById('galleryCounter')
	let current = 0

	galleryItems.forEach((item, index) => {
		item.addEventListener('click', event => {
			event.preventDefault()
			current = index
			galleryOverlay.classList.add('open')
			document.body.style.overflow = 'hidden'
			show(index)
		});
	});

	const show = (index) => {
		galleryImg.src = galleryItems[index].href
		galleryImg.alt = galleryItems[index].title
		counter.textContent = `${index + 1} / ${galleryItems.length}`
	}

	const next = () => {
		current = (current + 1) % galleryItems.length
		show(current)
	}

	const prev = () => {
		current = (current - 1 + galleryItems.length) % galleryItems.length
		show(current)
	}

	const close = () => {
		galleryOverlay.classList.remove('open')
		document.body.style.overflow = ''
	}

	nextBtn.addEventListener('click', next)
	prevBtn.addEventListener('click', prev)
	closeBtn.addEventListener('click', close)

	galleryOverlay.addEventListener('click', event => {
		event.target === galleryOverlay ? close() : null;
	});
};

initLightBox()

function initGallery() {
	const breakpoint = window.matchMedia("(min-width:768px)");

	let swiperGallery;

	const breakpointChecker = function () {
		if (breakpoint.matches === true) {
			if (swiperGallery !== undefined) swiperGallery.destroy(true, true);
			return;
		} 
		
		else if (breakpoint.matches === false) {
			return enableSwiper();
		}
	};

	const enableSwiper = function () {
		swiperGallery = new Swiper(".swiper-gallery", {
			slidesPerView: 1,
			speed: 1000,
			loop: true,
			spaceBetween: 10,
			navigation: {
				nextEl: '.swiper-gallery-button-next',
				prevEl: '.swiper-gallery-button-prev',
			},
		});
		setupSwiperCounter(swiperGallery, '.swiper-gallery-counter__current', '.swiper-gallery-counter__total');
	};
	breakpoint.addListener(breakpointChecker);
	breakpointChecker();
}

initGallery()
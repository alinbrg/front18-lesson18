const countries = [
	{
		name: "Georgia",
		currencies: {
			GEL: {
				name: "lari",
				symbol: "₾",
			},
		},
		capital: ["Tbilisi"],
		flag: "https://flagcdn.com/w320/ge.png",
		map: "https://goo.gl/maps/bvCaGBePR1ZEDK5cA",
	},
	{
		name: "Ukraine",
		currencies: {
			UAH: {
				name: "Ukrainian hryvnia",
				symbol: "₴",
			},
		},
		capital: ["Kyiv"],
		flag: "https://flagcdn.com/w320/ua.png",
		map: "https://goo.gl/maps/DvgJMiPJ7aozKFZv7",
	},
	{
		name: "Federal Republic of Germany",
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€",
			},
		},
		capital: ["Berlin"],
		flag: "https://flagcdn.com/w320/de.png",
		map: "https://goo.gl/maps/mD9FBMq1nvXUBrkv6",
	},

	{
		name: "United Kingdom of Great Britain and Northern Ireland",
		currencies: {
			GBP: {
				name: "British pound",
				symbol: "£",
			},
		},
		capital: ["London"],
		flag: "https://flagcdn.com/w320/gb.png",
		map: "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
	},
];

// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი.
// (ელემენტის წაშლისთვის ვიყენებთ remove() მეთოდს იმ ელემენტზე რომლის წაშლაც გვინდა)
// const deleteBtn = document.querySelector(".delete-btn");

// console.log(deleteBtn);

// deleteBtn.addEventListener("click", (e) => {
// 	deleteBtn.remove();
// });
// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ:  https://picsum.photos/id/1/200/300  სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ჯავასკრიპტით).
// const parentSection = document.querySelector(".for-js");
// const img = document.createElement("img");
// img.setAttribute("src", "https://picsum.photos/id/1/200/300");
// img.alt = "random image";

// parentSection.appendChild(img);

// 3. html-ში შექმენით <section id="countries-list"></section  >
const countriesSection = document.querySelector("#countries-list");

// 4.
//     4.1 ლექციაზე დაწერილ ფაილში => main.js ში ნახეთ countries   მასივი რომელიც შედგება 4 ობიექტისგან.
//     4.2. countries    მასივიდან .map ის საშულებით შექმენით html სტრინგი (როგორც ლექციაზე გავაკეთეთ) დიზაინი უნდა იყოს ქვემოთ ატვირთული ფოტოს მსგავსი (ფოტოზე მხოლოდ ორი ქვეყანაა, თქვენ ოთხივე უნდა დაამატოთ) (სტილები დაადეთ css ის საშუალებით, კლასები ჯავასკრიპტიდან).
//     4.3 ეს html სტრინგი ჩასვით ამ სექციაში: <section  id="countries-list"></section  >.
//     4.4 დიზაინში  country card ზე არის სურათი, ქვეყნის სახელი და დედაქალაქი (ასევე ღილაკები რომელიც მომდევნო დავალებისთვის გვჭირდება), თქვენ უნდა ჩასვათ  flag  , name   და   capital (ეს მასივია) რომელიც არის მასივის ობიექტ ელემენტში.

function renderCards() {
	const cardsHtmlString = countries
		.map((el) => {
			return `
			<div class="card">
				<img src="${el.flag}" alt="${el.name}'s flag" />
				<h2 class="country-name">${el.name}</h2>
				<h4 class="country-capital">${el.capital[0]}</h4>
				<a
					class="map-link"
					href="${el.map}"
					target="_blank"
					>see on map</a
				>
				<div class="btns">
					<button class="show btn">show more info</button>
					<button class="delete btn">delete card</button>
				</div>
			</div>
		`;
		})
		.join("");

	// console.log(cardsHtmlString);
	countriesSection.innerHTML = cardsHtmlString;

	const deleteBtns = document.querySelectorAll(".delete");
	const showBtns = document.querySelectorAll(".show");

	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			// console.log(btn.closest(".card"));
			btn.closest(".card").remove();
		});
	});

	showBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const card = btn.closest(".card");

			const mapLink = card.querySelector(".map-link");
			mapLink.classList.toggle("active");
			// console.log(mapLink);
		});
	});
}

// renderCards();

// 5.  (optional) #4 დავალებაში შექმნილ country   card - ზე დავამატოთ ღილაკები (წაშლა და ინფო -  ჯავასკრიპტიდან, წინა დავალებაში შექმნილ სტრინგთან ერთად, ფოტოზე როგორცაა), წაშლა ღილაკზე დაჭერით წავშალოთ შესაბამისი  country card-ი, ინფო ღილაკზე დაჭერის შედეგად ღილაკების ქვემოთ გამოვაჩინოთ რუკის ლინკი (map )

// *ჯავასკრიპტიდან შექმნილ ღილაკებზე eventListener-ის დამატება შეგვიძლია მათი html-ში ჩამატების შემდეგ

///////////////////////////////////

function syncFunction() {
	console.log("start function");

	for (let index = 0; index < 5; index++) {
		console.log(index);
	}

	console.log("after for");
	console.log("function end");
}

function asyncFunction() {
	console.log("start function");

	setTimeout(() => {
		for (let index = 0; index < 5; index++) {
			console.log(index);
		}
		console.log("after for");
	}, 2000);

	console.log("function end");
}

const startTimeout = document.querySelector(".btn1");
const stopTimeout = document.querySelector(".btn2");
const startInterval = document.querySelector(".btn3");
const stopInterval = document.querySelector(".btn4");

let timoutID;
let intervalID;

function startTimeoutFn() {
	console.log("start timeout function");
	timoutID = setTimeout(() => {
		console.log("start timeout");
	}, 4000);
}

function stopTimoutFn() {
	console.log("stop timeout function");
	if (timoutID) {
		clearTimeout(timoutID);
		timoutID = undefined;
	}
}

function startIntervalFn() {
	console.log("start inteval function");
	intervalID = setInterval(() => {
		console.log("start interval");
	}, 2000);
}

function stopIntervalFn() {
	console.log("stop interval function");
	if (intervalID) {
		clearInterval(intervalID);
		intervalID = undefined;
	}
}

startTimeout.addEventListener("click", startTimeoutFn);
stopTimeout.addEventListener("click", stopTimoutFn);

startInterval.addEventListener("click", startIntervalFn);
stopInterval.addEventListener("click", stopIntervalFn);

// slider

let activeSlide = 0;

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");
let autoSlideIntervalID;

function renderSlides() {
	slides.forEach((slide, index) => {
		if (index === activeSlide) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

function showNextSlide() {
	if (activeSlide === slides.length - 1) {
		activeSlide = 0;
	} else {
		activeSlide++;
	}

	// console.log(activeSlide);

	renderSlides();
}

function showPrevSlide() {
	if (activeSlide === 0) {
		activeSlide = slides.length - 1;
	} else {
		activeSlide--;
	}
	// console.log(activeSlide);

	renderSlides();
}

function startAutoSlideFn() {
	autoSlideIntervalID = setInterval(showNextSlide, 5000);
}

function stopAutoSlideFn() {
	if (autoSlideIntervalID) {
		clearInterval(autoSlideIntervalID);
		autoSlideIntervalID = undefined;
	}
}

function keyboardEvents() {
	document.addEventListener("keyup", (e) => {
		// console.log(e.code);

		if (e.code === "ArrowRight") {
			showNextSlide();
		}
		if (e.code === "ArrowLeft") {
			showPrevSlide();
		}
	});
}

function initSlider() {
	renderSlides();

	nextBtn.addEventListener("click", showNextSlide);
	prevBtn.addEventListener("click", showPrevSlide);

	startAutoSlides.addEventListener("click", startAutoSlideFn);
	stopAutoSlides.addEventListener("click", stopAutoSlideFn);

	keyboardEvents();
}

initSlider();

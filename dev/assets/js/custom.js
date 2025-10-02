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
	position: "top center",
});

let buttonProgram = {
	content: "Select 2025-10-02",
	className: "custom-button-classname",
	onClick: (dp) => {
		let date = new Date("2025-10-02");
		dp.selectDate(date);
		dp.setViewDate(date);
	},
};

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


const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
function navToggle() {
	if (nav.classList.contains("open")) {
		nav.classList.remove("open");
	} else {
		nav.classList.add("open");
	}
}
function hamburgerToggle() {
	if (hamburger.classList.contains("close")) {
		hamburger.classList.remove("close");
	} else {
		hamburger.classList.add("close");
	}
}
hamburger.addEventListener("click", () => {
	navToggle();
	hamburgerToggle();
});
nav.addEventListener("click", e => {
	if (hamburger.classList.contains("close")) {
		if (e.target.tagName.toLowerCase() == "a") {
			navToggle();
			hamburgerToggle();
		}
	}
});
window.addEventListener("resize", () => {
	if (window.innerWidth >= 900) {
		hamburger.classList.remove("close");
		nav.classList.remove("open");
	}
});

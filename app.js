const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
	// Button click active class toggle

	// OPTION 1

	// for (let i = 0; i < sectBtn.length; i++) {
	// 	sectBtn[i].addEventListener("click", function () {
	// 		let currentBtn = document.querySelectorAll(".active-btn");
	// 		currentBtn[0].className = currentBtn[0].className.replace(
	// 			"active-btn",
	// 			"",
	// 		);

	// 		this.className += " active-btn";
	// 	});
	// }

	// OPTION 2
	document.querySelectorAll(".control").forEach((btn) => {
		btn.addEventListener("click", function () {
			document.querySelector(".active-btn").classList.remove("active-btn");
			this.classList.add("active-btn");
		});
	});

	// All Section active class toggle
	allSections.addEventListener("click", (e) => {
		const id = e.target.dataset.id;
		if (id) {
			//Remove active/selected from other sections
			sectBtns.forEach((btn) => {
				btn.classList.remove("active");
			});
			// Add active/selected to current section
			e.target.classList.add("active");

			// Hide other sections
			sections.forEach((section) => {
				section.classList.remove("active");
			});
			// Show current section
			const element = document.getElementById(id);
			element.classList.add("active");
		}
	});
}

pageTransitions();

// // FINAL CODE
// (function () {
// 	[...document.querySelectorAll(".control")].forEach((button) => {
// 		button.addEventListener("click", function () {
// 			document.querySelector(".active-btn").classList.remove("active-btn");
// 			this.classList.add("active-btn");
// 			document.querySelector(".active").classList.remove("active");
// 			document.getElementById(button.dataset.id).classList.add("active");
// 		});
// 	});
// 	document.querySelector(".theme-btn").addEventListener("click", () => {
// 		document.body.classList.toggle("light-mode");
// 	});
// })();

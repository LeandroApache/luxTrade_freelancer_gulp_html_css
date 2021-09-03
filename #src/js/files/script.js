let userMenuIcon = document.querySelector(".user-menu__icon");
userMenuIcon.addEventListener("click", function (evt) {
	let userMenu = document.querySelector(".user-menu__list");
	userMenu.classList.toggle("_active");
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest(".user-menu")) {
		let userMenu = document.querySelector(".user-menu__list");
		userMenu.classList.remove("_active");
	}
});

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
var icon = document.getElementById('icon');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  if (icon.classList.contains('fa-bars')) {
		icon.classList.add('fa-times');
		icon.classList.remove('fa-bars');
	} else {
			icon.classList.add('fa-bars');
			icon.classList.remove('fa-times');
		}
});

const menu = document.querySelector('.nav');
const burgerButton = document.querySelector('#burger-menu');
burgerButton.addEventListener('click', displayMenu, false);

function displayMenu () {
	if (menu.classList.contains('is-active')){
	    menu.classList.remove('is-active');
	}else{
	    menu.classList.add('is-active');
	}
}


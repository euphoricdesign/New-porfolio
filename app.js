const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const hamburgerItems = document.querySelector('.hamburgerItems');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header,.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

hamburgerItems.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#1a1c1d';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

window.onscroll = function(){
    if(document.documentElement.scrollTop > 600){
        document.querySelector('.scrollup-content')
        .classList.add('show2');
    }else{
        document.querySelector('.scrollup-content')
        .classList.remove('show2');
    }
}

document.querySelector('.scrollup-content')
.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
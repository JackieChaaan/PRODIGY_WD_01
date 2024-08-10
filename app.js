window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = this.document.querySelector('#logo-img');
    const menuOpen = document.querySelector('#menu-open');
    const menuClose = document.querySelector('#menu-close');


    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        menuOpen.style.color='#212b36';
        menuClose.style.color='#212b36';
        logo.src = 'https://prodigyinfotech.dev/assets/images/logo/logo-2.svg';
        navLinks.forEach(link => {
            link.classList.add('nav-link-color')
        });

    } else {
        navbar.classList.remove('scrolled');
        menuOpen.style.color='#ffffff';
        menuClose.style.color='#ffffff';
        logo.src = 'https://prodigyinfotech.dev/assets/images/logo/logo.svg';
        navLinks.forEach(link => {
            link.classList.remove('nav-link-color');
        });
    }
});


function toggleHandler(element) {
    let down = element.querySelector('.down');
    let answer = element.querySelector('.answer');



    if (down && answer) {
        if (down.style.transform === 'rotate(180deg)') {
            down.style.transform = 'rotate(0deg)';
            answer.style.maxHeight = "0px";
            answer.style.paddingBottom = "0px";
        } else {
            down.style.transform = 'rotate(180deg)';
            answer.style.maxHeight = "200px";
            answer.style.paddingBottom = "30px";
        }
    } else {
        console.error('Element with class "lni" not found.');
    }
}


function goToTop() {
    document.documentElement.scrollTop = 0
}


const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menu = document.querySelector('.mobile-nav');
const mobNavLinks = document.querySelectorAll('.mob-nav-link');

menuOpen.addEventListener('click', () => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    menu.style.display = 'block';
})

menuClose.addEventListener('click', () => {
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
    menu.style.display = 'none';
})

mobNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.display = 'none';
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    });
});
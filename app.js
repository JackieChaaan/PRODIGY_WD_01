window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = this.document.querySelector('#logo-img');


    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.src = 'https://prodigyinfotech.dev/assets/images/logo/logo-2.svg';
        navLinks.forEach(link => {
            link.classList.add('nav-link-color')
        });

    } else {
        navbar.classList.remove('scrolled');
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

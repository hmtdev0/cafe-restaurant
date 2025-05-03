// navbar scroll fixing
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    } else {
        nav.classList.remove('scroll-on');
    }
}


// navbar closing function
let navbar = document.querySelectorAll('.nav-link');
let navcollapes = document.querySelector('.navbar-collapse');


navbar.forEach(function (a) {
    a.addEventListener('click', function () {
        navcollapes.classList.remove('show');
    })
});
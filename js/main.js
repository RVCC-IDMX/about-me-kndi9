/*Java Script for Hamburger menu*/
document.addEventListener('DOMContentLoaded', function () {
    let navBar = document.querySelector('.navbar');
    function toggleNav() {
        navBar.classList.toggle('open');
    }

    document.getElementById('navbar-toggle').addEventListener('click', function (e) {
        toggleNav();
    });

    document.querySelector('.navbar-links').addEventListener('click', function (e) {
        if (e.target.nodeName === 'A') {
            toggleNav();
        }
    })
});

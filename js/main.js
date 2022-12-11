document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    document.getElementById('navbar-toggle').addEventListener('click', function (e) {
        navbar.classList.toggle('open');
    });
});
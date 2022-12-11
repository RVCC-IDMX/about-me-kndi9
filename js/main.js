document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('navbar-toggle').addEventListener('click', function (e) {
        document.querySelector('.navbar').classList.toggle('open');
    });
});
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => link.addEventListener('click', toggleActiveTab));

function toggleActiveTab(e) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
}
// Function to scroll to selected section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = window.innerHeight * 0.2; // 20% of the viewport height
        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});

// Function to change color for navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.navLinks a').forEach(navItem => {
                    navItem.style.color = '';
                });
                const activeNav = document.querySelector(`#nav-${entry.target.id.split('-')[0]}`);
                if (activeNav) {
                    activeNav.style.color = '#ffff00';
                }
            }
        });
    }, options);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Navigation Links (Polyfill-like behavior if needed, but CSS scroll-behavior usually handles it)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function () {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    });
});

closeBtn.onclick = function () {
    lightbox.style.display = "none";
}

lightbox.onclick = function (e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
}
});

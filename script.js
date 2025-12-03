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

    // Smooth Scroll for Navigation Links
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

    // --- Dynamic Gallery Rendering ---
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderGallery(filter = 'all') {
        galleryGrid.innerHTML = ''; // Clear existing content

        const filteredItems = filter === 'all'
            ? galleryItems
            : galleryItems.filter(item => item.category === filter);

        filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'gallery-item';
            if (item.span) div.classList.add('span-2');

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            img.loading = 'lazy';

            // Re-attach Lightbox Click Event
            img.addEventListener('click', function () {
                openLightbox(this.src);
            });

            div.appendChild(img);
            galleryGrid.appendChild(div);
        });
    }

    // Initial Render
    if (typeof galleryItems !== 'undefined') {
        renderGallery();
    }

    // Filter Click Events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            renderGallery(filterValue);
        });
    });

    // --- Lightbox Functionality ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openLightbox(src) {
        lightbox.style.display = "block";
        lightboxImg.src = src;
    }

    closeBtn.onclick = function () {
        lightbox.style.display = "none";
    }

    lightbox.onclick = function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    }
});

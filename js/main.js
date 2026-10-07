// --- Global Application State ---
const AppState = {
    cart: JSON.parse(localStorage.getItem('sliceOfFireCart')) || [],
    orders: JSON.parse(localStorage.getItem('sliceOfFireOrders')) || [],
    
    saveCart() {
        localStorage.setItem('sliceOfFireCart', JSON.stringify(this.cart));
        this.updateCartBadge();
    },
    
    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        badges.forEach(badge => {
            badge.textContent = count;
            badge.classList.add('pop');
            setTimeout(() => badge.classList.remove('pop'), 300);
        });
    },
    
    addOrder(order) {
        this.orders.push(order);
        localStorage.setItem('sliceOfFireOrders', JSON.stringify(this.orders));
    }
};

// --- Loading Screen ---
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
});

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// --- Scroll Reveal Animation ---
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// --- Counter Animation ---
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = 200;
        const updateCount = () => {
            const current = +counter.innerText.replace(/,/g, '');
            const increment = target / speed;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment).toLocaleString();
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
};

// --- Parallax Effect ---
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed') || 0.5;
        const yPos = -(window.scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
});

// --- Initialize on Page Load ---
document.addEventListener('DOMContentLoaded', () => {
    AppState.updateCartBadge();
    revealElements();
    
    // Trigger counter animation when stats section is in view
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }
});
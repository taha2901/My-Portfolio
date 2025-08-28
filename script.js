// التحقق من تحميل الصورة
document.addEventListener('DOMContentLoaded', function () {
    const profileImage = document.querySelector('.profile-image');
    const img = new Image();

    // استبدل هذا المسار بمسار صورتك الحقيقي
    img.src = 'images/IMG_1693.jpg';

    img.onload = function () {
        // الصورة موجودة وتحملت بنجاح
        profileImage.classList.remove('no-image-loaded');
    };

    img.onerror = function () {
        // الصورة غير موجودة أو فشل التحميل
        profileImage.classList.add('no-image-loaded');
    };
});
// Loading Animation
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial call

// Header Background on Scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
        header.querySelectorAll('a').forEach(link => {
            if (!link.classList.contains('logo')) {
                link.style.color = '#333';
            } else {
                link.style.color = '#667eea';
            }
        });
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.backdropFilter = 'blur(10px)';
        header.querySelectorAll('a').forEach(link => {
            link.style.color = 'white';
        });
    }
});

// Skill Progress Animation
function animateSkills() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 100) {
            const progress = card.querySelector('.skill-progress');
            const width = progress.style.width;
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.width = width;
            }, 200);
        }
    });
}

window.addEventListener('scroll', animateSkills);

// Contact Form Handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Create email body
    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    // Create mailto link
    const mailtoLink = `mailto:tahahamada2901@gmail.com?subject=${encodeURIComponent(subject)}&body=${emailBody}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    alert('Email client opened! Please send the email to complete your message.');

    // Reset form
    form.reset();
}

// Typing Effect for Hero Section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function () {
    setTimeout(function () {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero .subtitle');

        if (heroTitle && heroSubtitle) {
            typeWriter(heroTitle, 'Taha Hamada', 150);
            setTimeout(() => {
                typeWriter(heroSubtitle, 'Flutter Developer & Mobile App Specialist', 80);
            }, 2000);
        }
    }, 1500);
});

// Particle Animation Background
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '1';

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';

        particlesContainer.appendChild(particle);
    }

    hero.appendChild(particlesContainer);
}

// Initialize particles
createParticles();

// Mobile Menu Toggle (if needed)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Add mobile menu button for smaller screens
if (window.innerWidth <= 768) {
    const nav = document.querySelector('nav');
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.style.background = 'none';
    menuButton.style.border = 'none';
    menuButton.style.color = 'white';
    menuButton.style.fontSize = '1.5rem';
    menuButton.style.cursor = 'pointer';
    menuButton.onclick = toggleMobileMenu;
    nav.appendChild(menuButton);
}

// Intersection Observer for better performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill card animation on hover
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        const progress = this.querySelector('.skill-progress');
        const currentWidth = progress.style.width;
        progress.style.width = '100%';
        setTimeout(() => {
            progress.style.width = currentWidth;
        }, 300);
    });
});

// Add some Easter eggs
let clickCount = 0;
document.querySelector('.logo').addEventListener('click', function (e) {
    e.preventDefault();
    clickCount++;
    if (clickCount === 5) {
        this.style.animation = 'spin 1s linear';
        setTimeout(() => {
            this.style.animation = '';
            clickCount = 0;
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(function () {
    animateOnScroll();
    animateSkills();
}, 10);

window.addEventListener('scroll', debouncedScroll);

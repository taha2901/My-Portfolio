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

// Enhanced JavaScript for Dark Mode Portfolio

// Loading Screen
window.addEventListener('load', function () {
    setTimeout(() => {
        const loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }, 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });

    // Animate elements on scroll
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

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Active navigation highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        const headerHeight = document.querySelector('header').offsetHeight;

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Form submission handler
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Create mailto link
        const mailtoLink = `mailto:tahahamada2901@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Show success message
        showNotification('Thank you! Your default email client should open now.', 'success');

        // Reset form
        event.target.reset();
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background: ${type === 'success' ? 'var(--primary-color)' : 'var(--accent-color)'};
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    box-shadow: var(--shadow);
                    z-index: 10000;
                    animation: slideInRight 0.3s ease;
                    max-width: 300px;
                    font-weight: 500;
                `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add slide animations to CSS
    const style = document.createElement('style');
    style.textContent = `
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
                
                .nav-links a.active {
                    color: var(--primary-color);
                    position: relative;
                }
                
                .nav-links a.active::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--primary-color);
                    border-radius: 1px;
                }
                
                /* Enhanced hover effects */
                .project-card:hover .project-image {
                    transform: scale(1.05);
                    transition: transform 0.3s ease;
                }
                
                .skill-card:hover .skill-icon {
                    transform: scale(1.2) rotate(10deg);
                    transition: transform 0.3s ease;
                }
                
                /* Parallax effect for hero section */
                @media (min-width: 768px) {
                    .hero {
                        background-attachment: fixed;
                    }
                }
                
                /* Enhanced mobile responsiveness */
                @media (max-width: 480px) {
                    .container {
                        padding: 0 1rem;
                    }
                    
                    .cv-buttons {
                        flex-direction: column;
                    }
                    
                    .cv-btn {
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .skills-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                    
                    .skill-card {
                        padding: 1.5rem 1rem;
                    }
                    
                    .hero-content h1 {
                        font-size: 2rem;
                    }
                    
                    .subtitle {
                        font-size: 1rem;
                    }
                }
            `;
    document.head.appendChild(style);

    // Add typing effect to hero subtitle
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing effect after loading
    window.addEventListener('load', () => {
        setTimeout(() => {
            const subtitle = document.querySelector('.subtitle');
            if (subtitle) {
                const originalText = subtitle.textContent;
                typeWriter(subtitle, originalText, 80);
            }
        }, 1500);
    });

    // Add scroll to top button
    function addScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--gradient-primary);
                    color: white;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    box-shadow: var(--shadow);
                    transition: all 0.3s ease;
                    opacity: 0;
                    visibility: hidden;
                    z-index: 1000;
                `;

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });

        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.transform = 'translateY(-3px) scale(1.1)';
        });

        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Initialize scroll to top button
    addScrollToTopButton();

    // Enhanced project cards interaction
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add particles background effect (optional)
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                `;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                        position: absolute;
                        width: 2px;
                        height: 2px;
                        background: rgba(0, 212, 255, 0.5);
                        border-radius: 50%;
                        animation: float ${5 + Math.random() * 10}s infinite linear;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                    `;
            particlesContainer.appendChild(particle);
        }

        // Add float animation
        if (!document.querySelector('#particles-style')) {
            const particleStyle = document.createElement('style');
            particleStyle.id = 'particles-style';
            particleStyle.textContent = `
                        @keyframes float {
                            0% {
                                transform: translateY(0px) rotate(0deg);
                                opacity: 1;
                            }
                            50% {
                                transform: translateY(-20px) rotate(180deg);
                                opacity: 0.5;
                            }
                            100% {
                                transform: translateY(0px) rotate(360deg);
                                opacity: 1;
                            }
                        }
                    `;
            document.head.appendChild(particleStyle);
        }

        hero.appendChild(particlesContainer);
    }

    // Initialize particles (uncomment if you want the effect)
    // createParticles();

    console.log('🚀 Portfolio loaded successfully! Dark mode activated.');
});
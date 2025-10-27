// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // In a real application, you would send the form data to a server here
        // For this example, we'll just show a success message
        alert('Message sent successfully! (This is a demo, no actual message was sent)');
        
        // Reset form
        contactForm.reset();
    });
}

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 20, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 20, 0.8)';
    }
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.glass-card, .hero-content, .hero-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.glass-card, .hero-content, .hero-image');
    
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation
    setTimeout(() => {
        animateOnScroll();
    }, 300);
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initialize animations
animateOnScroll();

// Glorious glowing mouse effect
document.addEventListener('DOMContentLoaded', () => {
    // Create the glowing circle element
    // const glowingCircle = document.createElement('div');
    // glowingCircle.classList.add('glowing-circle');
    // document.body.appendChild(glowingCircle);
    
    // // Add pulse animation class
    // glowingCircle.classList.add('pulse');
    
    // // Track mouse movement
    // document.addEventListener('mousemove', (e) => {
    //     glowingCircle.style.left = e.clientX + 'px';
    //     glowingCircle.style.top = e.clientY + 'px';
    // });
    
    // // Add active effect on mouse down
    // document.addEventListener('mousedown', () => {
    //     glowingCircle.classList.add('active');
    // });
    
    // // Remove active effect on mouse up
    // document.addEventListener('mouseup', () => {
    //     glowingCircle.classList.remove('active');
    // });
    
    // // Add extra glow on keyboard events
    // document.addEventListener('keydown', () => {
    //     if (!glowingCircle.classList.contains('key-pressed')) {
    //         glowingCircle.classList.add('active', 'key-pressed');
    //         setTimeout(() => {
    //             glowingCircle.classList.remove('active', 'key-pressed');
    //         }, 300);
    //     }
    // });
    
    // Add special effect when hovering over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            glowingCircle.style.boxShadow = '0 0 40px rgba(0, 180, 216, 1), 0 0 80px rgba(0, 180, 216, 0.8), 0 0 120px rgba(0, 180, 216, 0.6), 0 0 160px rgba(0, 180, 216, 0.4)';
            glowingCircle.style.width = '40px';
            glowingCircle.style.height = '40px';
        });
        
        element.addEventListener('mouseleave', () => {
            glowingCircle.style.boxShadow = '';
            glowingCircle.style.width = '';
            glowingCircle.style.height = '';
        });
    });
});

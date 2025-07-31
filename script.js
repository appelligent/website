// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll indicator click
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .service-card, .partner-card');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  const heroBg = document.querySelector('.hero-bg');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    if (heroBg) {
      heroBg.style.transform = `translateY(${rate}px)`;
    }
  });

  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          contactForm.reset();
        }, 2000);
      }, 1500);
    });
  }

  // Add hover effects to partner logos
  const partnerLogos = document.querySelectorAll('.partner-logo-img');
  partnerLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
      logo.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    logo.addEventListener('mouseleave', () => {
      logo.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  // Typing effect for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing effect after a delay
    setTimeout(typeWriter, 500);
  }

  // Add floating animation to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.animation = 'float 6s ease-in-out infinite';
  });

  // Add pulse effect to CTA buttons
  const ctaButtons = document.querySelectorAll('.btn-primary');
  ctaButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.animation = 'pulse 1s infinite';
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.animation = '';
    });
  });
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% {
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 4px 25px rgba(59, 130, 246, 0.6);
    }
    100% {
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }
  }
`;
document.head.appendChild(style); 
// Gigante Print Media - Enhanced JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        offset: 100,
        disable: false,
        startEvent: 'DOMContentLoaded',
        animatedClassName: 'aos-animate',
        disableMutationObserver: false
    });
    
    // Secure Spot Modal Functionality - Updated to use direct form opening
    const secureSpotBtn = document.getElementById('secure-spot-btn');
    const modal = document.getElementById('secure-spot-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    // Find the premium areas target button
    const premiumAreasBtn = document.querySelector('.service-area-cta .btn');
    
    // Direct form URL without embedding or cookies
    const googleFormDirectUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc3oIIraJ5bSLnqvbZav4maiUAi5ZmeAnDBb2gonLVxCLrnMg/alreadyresponded?1747451201903";
    
    // Create star burst effect and open form when clicking the "Secure My Spot" button
    if (secureSpotBtn) {
        secureSpotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create star burst effect
            createStarBurst(e, 'small');
            
            // Open Google Form in a new tab with cache-busting parameters after 3 seconds
            // This allows user to fully see the celebration effect
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "?usp=sf_link&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 3000); // 3 second delay to see the full effect
        });
    }
    
    // Add star burst effect to "Reserve Your Spot Today" button
    const reserveSpotBtn = document.getElementById('reserve-spot-btn');
    if (reserveSpotBtn) {
        reserveSpotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create star burst effect
            createStarBurst(e, 'large');
            
            // Open Google Form after animation (2-second delay)
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 2000); // 2 second delay
        });
    }
    
    // Add star burst effect to "Reserve Prime" button
    const reservePrimeBtn = document.getElementById('reserve-prime-btn');
    if (reservePrimeBtn) {
        reservePrimeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create star burst effect
            createStarBurst(e, 'large');
            
            // Open Google Form after animation (2-second delay)
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 2000); // 2 second delay
        });
    }
    
    // Add star burst effect to "Reserve Now" button
    const reserveNowBtn = document.getElementById('reserve-now-btn');
    if (reserveNowBtn) {
        reserveNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create star burst effect
            createStarBurst(e, 'large');
            
            // Open Google Form after animation (2-second delay)
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 2000); // 2 second delay
        });
    }
    
    // Add star burst effect to "Reserve your Spot Now" button
    const reserveSpotNowBtn = document.getElementById('reserve-spot-now-btn');
    if (reserveSpotNowBtn) {
        reserveSpotNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create star burst effect
            createStarBurst(e, 'large');
            
            // Open Google Form after animation (2-second delay)
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 2000); // 2 second delay
        });
    }
    
    // Add star burst effect to "Target These Premium Areas Now" button
    if (premiumAreasBtn) {
        premiumAreasBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a much bigger star burst effect
            createStarBurst(e, 'large');
            
            // After the animation, open the Google Form (shorter 2-second delay as requested)
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 2000); // 2 second delay as requested
        });
    }
    
    // Add star burst effect to footer "Get Your Spot Now" button
    const footerSpotBtn = document.getElementById('footer-spot-btn');
    if (footerSpotBtn) {
        footerSpotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create star burst effect
            createStarBurst(e, 'large');
            
            // Open Google Form after animation (3-second delay)
            setTimeout(() => {
                const uniqueUrl = googleFormDirectUrl + "&" + Date.now(); 
                window.open(uniqueUrl, '_blank');
            }, 3000); // 3 second delay to see the full effect
        });
    }
    
    // Function to create star burst effect
    function createStarBurst(e, size = 'small') {
        // Get button position
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;
        
        // Create container for stars if it doesn't exist
        let starContainer = document.querySelector('.star-container');
        if (!starContainer) {
            starContainer = document.createElement('div');
            starContainer.classList.add('star-container');
            document.body.appendChild(starContainer);
        }

        // Add an initial bright flash at the button position - bigger for large effect
        const flash = document.createElement('div');
        flash.classList.add('button-flash');
        if (size === 'large') {
            flash.classList.add('large-effect');
        }
        flash.style.left = `${buttonX}px`;
        flash.style.top = `${buttonY}px`;
        starContainer.appendChild(flash);
        
        setTimeout(() => {
            flash.remove();
        }, size === 'large' ? 1200 : 700);
        
        // Removing secondary flash for subtler effect
        /* 
        if (size === 'large') {
            setTimeout(() => {
                const secondaryFlash = document.createElement('div');
                secondaryFlash.classList.add('button-flash', 'large-effect');
                secondaryFlash.style.left = `${buttonX}px`;
                secondaryFlash.style.top = `${buttonY}px`;
                starContainer.appendChild(secondaryFlash);
                
                setTimeout(() => {
                    secondaryFlash.remove();
                }, 1000);
            }, 200);
        }
        */
        
        // Generate stars based on effect size
        const starCount = size === 'large' ? 33 : 33;
        
        // Create initial center burst - bigger for large effect
        const centralBurst = document.createElement('div');
        centralBurst.classList.add('central-burst');
        if (size === 'large') {
            centralBurst.classList.add('large-effect');
        }
        centralBurst.style.left = `${buttonX}px`;
        centralBurst.style.top = `${buttonY}px`;
        starContainer.appendChild(centralBurst);
        
        setTimeout(() => {
            centralBurst.remove();
        }, size === 'large' ? 1400 : 800);
        
        // Removing multiple bursts for subtler effect
        /*
        if (size === 'large') {
            setTimeout(() => {
                const secondBurst = document.createElement('div');
                secondBurst.classList.add('central-burst', 'large-effect');
                secondBurst.style.left = `${buttonX}px`;
                secondBurst.style.top = `${buttonY}px`;
                starContainer.appendChild(secondBurst);
                
                setTimeout(() => {
                    secondBurst.remove();
                }, 1200);
            }, 300);
            
            setTimeout(() => {
                const thirdBurst = document.createElement('div');
                thirdBurst.classList.add('central-burst', 'large-effect');
                thirdBurst.style.left = `${buttonX}px`;
                thirdBurst.style.top = `${buttonY}px`;
                starContainer.appendChild(thirdBurst);
                
                setTimeout(() => {
                    thirdBurst.remove();
                }, 1000);
            }, 600);
        }
        */
        
        // Create stars in waves for a dramatic effect - more waves for large effect
        const waveCount = size === 'large' ? 5 : 3;
        for (let wave = 0; wave < waveCount; wave++) {
            // Distribute stars across waves with more in the first waves for large effect
            let starsInWave;
            if (size === 'large') {
                starsInWave = wave === 0 ? 20 : wave === 1 ? 18 : wave === 2 ? 16 : wave === 3 ? 16 : wave === 4 ? 14 : wave === 5 ? 14 : wave === 6 ? 16 : 16;
            } else {
                starsInWave = wave === 0 ? 13 : wave === 1 ? 10 : 10;
            }
            const waveDelay = wave * (size === 'large' ? 150 : 100); // more time between waves for large effect
            
            setTimeout(() => {
                for (let i = 0; i < starsInWave; i++) {
                    // Create star element
                    const star = document.createElement('div');
                    star.classList.add('celebration-star');
                    
                    // Vary size based on wave (closer stars are larger) - scaled down 75%
                    const baseSize = wave === 0 ? 8 : wave === 1 ? 6 : 4;
                    const size = baseSize + Math.floor(Math.random() * 4); 
                    
                    // Longer travel distance for outer waves - reduced by 75%
                    const baseDistance = wave === 0 ? 40 : wave === 1 ? 75 : 110;
                    const maxRandomDistance = wave === 0 ? 40 : wave === 1 ? 50 : 60;
                    const distance = baseDistance + Math.random() * maxRandomDistance;
                    
                    // Faster animation for outer waves
                    const baseSpeed = wave === 0 ? 1.5 : wave === 1 ? 1.9 : 2.3;
                    const duration = baseSpeed + Math.random() * 0.4;
                    
                    // Colors - more bright white/gold for central, more varied for outer
                    let color;
                    if (wave === 0) {
                        // Central wave: bright white/gold
                        color = `hsl(${45 + Math.random() * 15}, ${90 + Math.random() * 10}%, ${90 + Math.random() * 10}%)`;
                    } else if (wave === 1) {
                        // Middle wave: gold/yellow
                        const hue = 40 + Math.random() * 20;
                        color = `hsl(${hue}, 100%, ${75 + Math.random() * 20}%)`;
                    } else {
                        // Outer wave: more varied colors
                        const colorType = Math.floor(Math.random() * 3);
                        if (colorType === 0) {
                            // Gold
                            color = `hsl(${40 + Math.random() * 15}, 100%, ${70 + Math.random() * 25}%)`;
                        } else if (colorType === 1) {
                            // White/bright
                            color = `hsl(60, ${20 + Math.random() * 30}%, ${85 + Math.random() * 15}%)`;
                        } else {
                            // Orange-gold
                            color = `hsl(${30 + Math.random() * 15}, 100%, ${60 + Math.random() * 30}%)`;
                        }
                    }
                    
                    // Star shapes - more circular for central burst, more varied for outer
                    const starType = wave === 0 ? 
                                    Math.floor(Math.random() * 2) + 2 : // Mostly circles and diamonds for center
                                    Math.floor(Math.random() * 4);      // All types for outer waves
                    
                    // Set base star style
                    star.style.width = `${size}px`;
                    star.style.height = `${size}px`;
                    star.style.backgroundColor = color;
                    star.style.position = 'fixed';
                    star.style.left = `${buttonX}px`;
                    star.style.top = `${buttonY}px`;
                    star.style.zIndex = '9999';
                    
                    // Apply different star shapes with enhanced glows
                    if (starType === 0) {
                        // Four-pointed star
                        star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
                        star.classList.add('star-shape-1');
                        // Extra intense glow for these stars
                        star.style.boxShadow = `0 0 ${size}px ${color}, 0 0 ${size/1.5}px ${color}, 0 0 ${size*2}px white`;
                    } else if (starType === 1) {
                        // Simple 4-point star
                        star.style.clipPath = 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)';
                        star.classList.add('star-shape-2');
                        star.style.boxShadow = `0 0 ${size/1.2}px ${color}, 0 0 ${size}px white`;
                    } else if (starType === 2) {
                        // Circle star with intense glow
                        star.style.borderRadius = '50%';
                        star.style.boxShadow = `0 0 ${size/1.5}px ${color}, 0 0 ${size}px ${color}, 0 0 ${size*2}px rgba(255,255,255,0.8)`;
                        star.classList.add('star-shape-3');
                    } else {
                        // Diamond star
                        star.style.transform = 'rotate(45deg)';
                        star.style.boxShadow = `0 0 ${size/1.8}px ${color}, 0 0 ${size}px rgba(255,255,255,0.9)`;
                        star.classList.add('star-shape-4');
                    }
                    
                    // Calculate exact burst direction for perfect radial pattern
                    // Divide the circle evenly based on star count in this wave
                    const angle_rad = ((i * (360 / starsInWave)) + (wave * 15)) * Math.PI / 180;
                    const directionX = Math.cos(angle_rad);
                    const directionY = Math.sin(angle_rad);
                    
                    // Add controlled randomness to make it natural but still radial
                    const angleVariance = (Math.random() * 15 - 7.5) * Math.PI / 180;
                    const finalDirectionX = Math.cos(angle_rad + angleVariance);
                    const finalDirectionY = Math.sin(angle_rad + angleVariance);
                    
                    // Randomize distance slightly while maintaining the burst pattern
                    const distanceVariance = 0.85 + Math.random() * 0.3; // 0.85-1.15
                    
                    // Set animation with easing that starts fast and slows down
                    star.style.animation = `
                        starBurst${starType + 1} ${duration}s cubic-bezier(0.05, 0.9, 0.25, 1.0) forwards,
                        starRotate ${duration * 1.2}s ease-out forwards,
                        starFade ${duration * 0.9}s ease-out forwards,
                        starScale ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1.0) forwards
                    `;
                    
                    // Use transform to move in calculated direction
                    star.style.setProperty('--move-x', `${finalDirectionX * distance * distanceVariance}px`);
                    star.style.setProperty('--move-y', `${finalDirectionY * distance * distanceVariance}px`);
                    star.style.setProperty('--rotate', `${(Math.random() * 2 - 1) * 720}deg`); // -720 to 720 degrees
                    star.style.setProperty('--scale-factor', `${1.5 + Math.random()}`); // 1.5-2.5
                    
                    // Add to container
                    starContainer.appendChild(star);
                    
                    // Remove star after animation completes
                    setTimeout(() => {
                        star.remove();
                    }, duration * 1000 + 100);
                }
            }, waveDelay);
        }
    }
    
    // Helper function to generate points for a star shape
    function generateStarPoints(points) {
        let starPoints = '';
        for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? 50 : 25; // Outer and inner radius
            const angle = Math.PI * i / points;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            starPoints += `${x}% ${y}%, `;
        }
        return starPoints.slice(0, -2); // Remove trailing comma and space
    }
    
    // The following modal functionality is no longer used but preserved for reference
    // since we're now opening the form in a new tab instead of embedding it
    
    // Close modal when clicking the close button
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside of modal content
    window.addEventListener('click', function(event) {
        if (modal && event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Simple form validation
    const simpleForm = document.getElementById('simple-contact-form');
    if (simpleForm) {
        simpleForm.addEventListener('submit', function(e) {
            const phoneInput = document.getElementById('phone-simple');
            const emailInput = document.getElementById('email-simple');
            
            let isValid = true;
            
            // Simple phone validation
            if (phoneInput && phoneInput.value.trim().length < 10) {
                isValid = false;
                phoneInput.style.borderColor = 'red';
                alert('Please enter a valid phone number (at least 10 digits)');
                e.preventDefault();
                return false;
            }
            
            // Simple email validation
            if (emailInput && !emailInput.value.includes('@')) {
                isValid = false;
                emailInput.style.borderColor = 'red';
                alert('Please enter a valid email address');
                e.preventDefault();
                return false;
            }
            
            if (isValid) {
                alert('Thank you for your submission! Your default email client will open with your information. Please send the email to complete your reservation.');
                // Form will naturally submit and open email client
            }
        });
    }
    
    // Animate section dividers on scroll
    const addDividerAnimations = () => {
        const dividers = document.querySelectorAll('.section-divider');
        
        dividers.forEach(divider => {
            // Check if already processed
            if (divider.dataset.animated === 'true') return;
            
            // Get the SVG element inside divider
            const svg = divider.querySelector('svg');
            if (!svg) return;
            
            // Mark as processed
            divider.dataset.animated = 'true';
            
            // Add entrance animation
            divider.style.opacity = '0';
            divider.style.transform = divider.classList.contains('bottom') 
                ? 'translateY(20px)' 
                : 'translateY(-20px)';
            divider.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // Create observer for entrance animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        divider.style.opacity = '1';
                        divider.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(divider);
        });
    };
    
    // Run on page load and when scrolling
    addDividerAnimations();
    window.addEventListener('scroll', addDividerAnimations);
    
    // Animate number counters
    function animateCounters() {
        const counterElements = document.querySelectorAll('.counter');
        
        counterElements.forEach(counter => {
            const target = parseInt(counter.innerText.replace(/[^0-9]/g, ''));
            const prefix = counter.innerText.startsWith('$') ? '$' : '';
            let count = 0;
            const duration = 2000; // Animation duration in milliseconds
            const step = Math.ceil(target / (duration / 30)); // Frames per step
            
            // Reset counter to zero for new animation
            counter.innerText = prefix + '0';
            
            function updateCount() {
                if (count < target) {
                    count = Math.min(count + step, target);
                    counter.innerText = prefix + count.toLocaleString();
                    requestAnimationFrame(updateCount);
                }
            }
            
            updateCount();
        });
    }
    
    // Initial counter animation when page loads
    const serviceArea = document.getElementById('service-area');
    if (serviceArea) {
        // Check if in viewport on page load
        const rect = serviceArea.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(animateCounters, 1000);
            serviceArea.classList.add('counter-animated');
        }
    }
    
    // Refresh AOS when scrolling to ensure animations trigger properly
    window.addEventListener('scroll', function() {
        AOS.refresh();

        // Reset counters when service area scrolls in and out of view
        const serviceArea = document.getElementById('service-area');
        if (serviceArea) {
            const rect = serviceArea.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if (!serviceArea.classList.contains('counter-animated')) {
                    serviceArea.classList.add('counter-animated');
                    setTimeout(animateCounters, 500);
                }
            } else {
                serviceArea.classList.remove('counter-animated');
            }
        }
        
        // Back to top button functionality
        const backToTopButton = document.querySelector('.back-to-top');
        const pricingSection = document.getElementById('pricing');
        const serviceAreaSection = document.getElementById('service-area');
        const sideMenuButton = document.querySelector('.side-menu-button');
        
        // Show back to top button when user scrolls past the "Sizes & Investment" section
        if (pricingSection && window.pageYOffset >= pricingSection.offsetTop) {
            backToTopButton.classList.add('show');
        } else if (backToTopButton) {
            backToTopButton.classList.remove('show');
        }
        
        // Show side menu button when user scrolls past the "Service Area Overview" section
        if (serviceAreaSection && window.pageYOffset >= serviceAreaSection.offsetTop) {
            sideMenuButton.classList.add('show');
        } else if (sideMenuButton) {
            sideMenuButton.classList.remove('show');
        }
    });
    
    // Add click event for back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Side menu functionality
    const sideMenuButton = document.querySelector('.side-menu-button');
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuClose = document.querySelector('.side-menu-close');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'side-menu-overlay';
    body.appendChild(overlay);
    
    // Add phone contact click event
    const phoneContact = document.querySelector('.phone-contact-float');
    if (phoneContact) {
        phoneContact.addEventListener('click', function() {
            window.location.href = 'tel:+15623445051';
        });
    }
    
    // Open side menu
    if (sideMenuButton) {
        sideMenuButton.addEventListener('click', function() {
            sideMenu.classList.add('open');
            overlay.classList.add('show');
            body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    // Close side menu
    if (sideMenuClose) {
        sideMenuClose.addEventListener('click', function() {
            closeSideMenu();
        });
    }
    
    // Close side menu when overlay is clicked
    overlay.addEventListener('click', function() {
        closeSideMenu();
    });
    
    // Close side menu when menu item is clicked
    const menuLinks = document.querySelectorAll('.side-menu-content a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeSideMenu();
        });
    });
    
    function closeSideMenu() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        body.style.overflow = ''; // Restore scrolling
    }
    
    // Loading Animation
    const loaderWrapper = document.querySelector('.loader-wrapper');
    
    if (loaderWrapper) {
        setTimeout(function() {
            loaderWrapper.classList.add('loaded');
            document.body.classList.add('loaded-body');
            
            // Start animations after page load
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => {
                el.style.opacity = 1;
            });
        }, 1500);
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    function updateHeaderClass() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', updateHeaderClass);
    updateHeaderClass();
    
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a nav link
    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
    
    // Side Navigation Highlighting
    const sideNavItems = document.querySelectorAll('.side-nav-item');
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Highlight side nav item
                sideNavItems.forEach(item => {
                    if (item.dataset.target === sectionId) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                
                // Highlight main nav item
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // Initialize side navigation click events
    sideNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Close all other accordion items
            document.querySelectorAll('.accordion-item').forEach(accItem => {
                if (accItem !== item) {
                    accItem.classList.remove('active');
                }
            });
            
            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });
    
    // Language Toggle (English/Spanish)
    const languageToggle = document.querySelector('.language-toggle');
    const englishContent = document.querySelectorAll('.en');
    const spanishContent = document.querySelectorAll('.es');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            document.body.classList.toggle('spanish');
            
            if (document.body.classList.contains('spanish')) {
                englishContent.forEach(el => el.style.display = 'none');
                spanishContent.forEach(el => el.style.display = 'block');
                languageToggle.querySelector('span').textContent = 'English';
            } else {
                englishContent.forEach(el => el.style.display = 'block');
                spanishContent.forEach(el => el.style.display = 'none');
                languageToggle.querySelector('span').textContent = 'Español';
            }
        });
    }
    
    // Initialize with English as default
    if (spanishContent.length > 0) {
        spanishContent.forEach(el => el.style.display = 'none');
    }
    
    // Countdown Timer
    const countdown = document.querySelector('.countdown');
    if (countdown) {
        // Set the deadline date (14 days from now)
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 14);
        
        function updateCountdown() {
            const now = new Date();
            const diff = deadline - now;
            
            if (diff <= 0) {
                // Countdown is over
                document.getElementById('days').textContent = '0';
                document.getElementById('hours').textContent = '0';
                document.getElementById('minutes').textContent = '0';
                return;
            }
            
            // Calculate days, hours, minutes
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            // Display the calculated values
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        }
        
        // Update the countdown every minute
        updateCountdown();
        setInterval(updateCountdown, 60000);
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    function updateParallax() {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
    
    // Particles background (if enabled)
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        // Create particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 15 + 5;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Set styles
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = opacity;
            
            // Append to container
            particlesContainer.appendChild(particle);
            
            // Create animation
            animateParticle(particle);
        }
    }
    
    function animateParticle(particle) {
        // Random movement
        const duration = Math.random() * 10 + 5;
        const xMove = Math.random() * 100 - 50;
        const yMove = Math.random() * 100 - 50;
        
        particle.style.transition = `transform ${duration}s linear`;
        particle.style.transform = `translate(${xMove}px, ${yMove}px)`;
        
        // Reset after animation completes
        setTimeout(() => {
            particle.style.transition = 'none';
            particle.style.transform = 'translate(0, 0)';
            
            // Start new animation
            setTimeout(() => {
                animateParticle(particle);
            }, 50);
        }, duration * 1000);
    }
    
    // Initialize any carousels or sliders (if using a library)
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonial-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }
    
    // Chatbot Functionality
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatContainer = document.querySelector('.chatbot-container');
    const closeChat = document.querySelector('.close-chat');
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const messagesContainer = document.querySelector('.chatbot-messages');
    
    // Predefined responses based on keywords - English and Spanish
    const responses = {
        'hello': 'Hello there! How can I help you with your direct mail campaign?',
        'hi': 'Hello there! How can I help you with your direct mail campaign?',
        'hey': 'Hello there! How can I help you with your direct mail campaign?',
        'price': 'Our standard flyer is $530 for a 3"×4½" size, and our premium option is $935 for a 4½"×6" size. Would you like more details?',
        'pricing': 'Our standard flyer is $530 for a 3"×4½" size, and our premium option is $935 for a 4½"×6" size. Would you like more details?',
        'cost': 'Our standard flyer is $530 for a 3"×4½" size, and our premium option is $935 for a 4½"×6" size. Would you like more details?',
        'service': 'We deliver your ads to 10,000 local households in Whittier and Santa Fe Springs. Our flyers wrap around regular mail for maximum visibility.',
        'contact': 'You can reach us at (562) 344-5051 or email cesarjames@giganteprintmedia.com',
        'help': 'I can help with pricing information, explain our services, or connect you with our team. What would you like to know?',
        'area': 'We currently serve Whittier (ZIP 90602) and Santa Fe Springs (ZIP 90670), reaching 10,000 selected homes.',
        'design': 'Our service includes free professional design with unlimited revisions!',
        'timeline': 'After you secure your spot, we need about 2 weeks for design approval and production before your mailers are delivered.',
        'thanks': 'You\'re welcome! Let me know if you need anything else.',
        'thank': 'You\'re welcome! Let me know if you need anything else.'
    };
    
    // Spanish responses
    const responsesEs = {
        'hola': '¡Hola! ¿Cómo puedo ayudarte con tu campaña de correo directo?',
        'buenos': '¡Hola! ¿Cómo puedo ayudarte con tu campaña de correo directo?',
        'precio': 'Nuestro volante estándar cuesta $530 para un tamaño de 3"×4½", y nuestra opción premium es $935 para 4½"×6". ¿Te gustaría más detalles?',
        'costo': 'Nuestro volante estándar cuesta $530 para un tamaño de 3"×4½", y nuestra opción premium es $935 para 4½"×6". ¿Te gustaría más detalles?',
        'servicio': 'Entregamos tus anuncios a 10,000 hogares locales en Whittier y Santa Fe Springs. Nuestros volantes se envuelven alrededor del correo regular para máxima visibilidad.',
        'contacto': 'Puedes comunicarte con nosotros al (562) 344-5051 o por correo electrónico a cesarjames@giganteprintmedia.com',
        'ayuda': 'Puedo ayudarte con información de precios, explicar nuestros servicios o conectarte con nuestro equipo. ¿Qué te gustaría saber?',
        'área': 'Actualmente atendemos a Whittier (ZIP 90602) y Santa Fe Springs (ZIP 90670), llegando a 10,000 hogares seleccionados.',
        'diseño': '¡Nuestro servicio incluye diseño profesional gratuito con revisiones ilimitadas!',
        'tiempo': 'Después de asegurar tu lugar, necesitamos aproximadamente 2 semanas para la aprobación del diseño y la producción antes de que se entreguen tus correos.',
        'gracias': '¡De nada! Avísame si necesitas algo más.',
        'gracia': '¡De nada! Avísame si necesitas algo más.'
    };
    
    // Toggle chatbot visibility
    if (chatbotButton) {
        chatbotButton.addEventListener('click', function() {
            chatContainer.classList.add('active');
        });
    }
    
    // Close chatbot
    if (closeChat) {
        closeChat.addEventListener('click', function() {
            chatContainer.classList.remove('active');
        });
    }
    
    // Variables for Spanish chat
    const chatInputEs = document.getElementById('chat-input-es');
    const sendButtonEs = document.getElementById('send-button-es');
    
    // Send message function
    function sendMessage() {
        const isSpanish = document.body.classList.contains('spanish');
        const message = isSpanish ? chatInputEs.value.trim() : chatInput.value.trim();
        
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user', isSpanish);
        
        // Clear input
        if (isSpanish) {
            chatInputEs.value = '';
        } else {
            chatInput.value = '';
        }
        
        // Get response after a small delay
        setTimeout(() => {
            const response = getBotResponse(message, isSpanish);
            addMessage(response, 'bot', isSpanish);
        }, 600);
    }
    
    // Add message to chat
    function addMessage(text, sender, isSpanish) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender + '-message');
        
        // Add language class
        if (isSpanish) {
            messageDiv.classList.add('es');
        } else {
            messageDiv.classList.add('en');
        }
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        
        messageDiv.appendChild(paragraph);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    // Get bot response based on user input
    function getBotResponse(userInput, isSpanish) {
        userInput = userInput.toLowerCase();
        
        // Use appropriate response dictionary based on language
        const responseDict = isSpanish ? responsesEs : responses;
        
        // Check for keywords
        for (const [keyword, response] of Object.entries(responseDict)) {
            if (userInput.includes(keyword)) {
                return response;
            }
        }
        
        // Default response if no keyword matches
        return isSpanish 
            ? "Me encantaría ayudarte con eso. Para preguntas específicas sobre nuestros servicios de correo directo, llama al (562) 344-5051 o ¿te gustaría saber sobre nuestros precios o áreas de servicio?" 
            : "I'd be happy to help with that. For specific questions about our direct mail services, please call us at (562) 344-5051 or would you like to know about our pricing or service areas?";
    }
    
    // Send button click event - English
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    // Send button click event - Spanish
    if (sendButtonEs) {
        sendButtonEs.addEventListener('click', sendMessage);
    }
    
    // Enter key press in input field - English
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Enter key press in input field - Spanish
    if (chatInputEs) {
        chatInputEs.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
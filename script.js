document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Management with localStorage ---
    const body = document.body;
    const THEME_STORAGE_KEY = 'mee-center-theme';
    let vantaEffect;

    function applyTheme(themeName, isInitialLoad = false) {
        // Apply the class to the body
        body.className = ''; // Clear existing theme classes
        if (themeName !== 'dark-purple') {
            body.classList.add(`theme-${themeName}`);
        }

        // Save the theme to localStorage if it's a user action
        if (!isInitialLoad) {
            localStorage.setItem(THEME_STORAGE_KEY, themeName);
        }

        // Get the color for Vanta from the newly applied CSS
        const vantaColor1 = parseInt(getComputedStyle(body).getPropertyValue('--vanta-color1').trim().replace('0x', ''), 16);

        // Update Vanta.js effect
        if (vantaEffect) {
            // Use setOptions for instant, non-blocking updates
            vantaEffect.setOptions({
                color: vantaColor1
            });
        }
    }

    function initializeThemeAndVanta() {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark-purple'; // Default to dark-purple
        
        // Temporarily set the class to get the right initial color for Vanta
        body.className = '';
        if (savedTheme !== 'dark-purple') {
            body.classList.add(`theme-${savedTheme}`);
        }
        
        const initialVantaColor = parseInt(getComputedStyle(body).getPropertyValue('--vanta-color1').trim().replace('0x', ''), 16);

        // Initialize Vanta ONCE on page load with the correct theme color
        vantaEffect = VANTA.WAVES({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: initialVantaColor,
            shininess: 50.00,
            waveHeight: 15.00,
            waveSpeed: 0.80,
            zoom: 0.75
        });

        // Attach event listeners for theme switching
        document.getElementById('theme-dark-purple').addEventListener('click', () => applyTheme('dark-purple'));
        document.getElementById('theme-light').addEventListener('click', () => applyTheme('light'));
        document.getElementById('theme-red-black').addEventListener('click', () => applyTheme('red-black'));
    }

    // Run the theme and Vanta initialization
    initializeThemeAndVanta();

    // --- Initialize AOS (Animate On Scroll) ---
    AOS.init({
        duration: 800,
        once: true,
        mirror: false
    });

    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // --- Optimized Resize Handler ---
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 992) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }, 150);
    });

    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl.fromTo(".hero-logo", { opacity: 0, scale: 0.5, y: -50 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" }, 0.3)
          .fromTo(".hero-section h1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
          .fromTo(".tagline-container", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, 0.8)
          .fromTo(".scroll-indicator", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, repeat: -1, yoyo: true }, 1.5);

    // --- OPTIMIZED LOTTIE ANIMATIONS ---
    async function loadLottieAnimation(container, path) {
        if (!container) return;
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Failed to fetch ${path}`);
            const animationData = await response.json();
            lottie.loadAnimation({
                container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData
            });
        } catch (error) {
            console.error('Lottie load error:', error);
            container.style.display = 'none';
        }
    }
    // Remember to host your Lottie files locally for best performance!
    loadLottieAnimation(document.getElementById('lottie-rocket'), 'https://lottie.host/76089b4e-df9f-4363-a2bb-97d1a1f06352/otLXi2aTI5.json');


    // --- Counter Animations ---
    document.querySelectorAll('.counter').forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: "top 85%",
            once: true,
            onEnter: () => {
                let startCount = { val: 0 };
                gsap.to(startCount, {
                    val: counter.dataset.count,
                    duration: 2,
                    ease: "power1.out",
                    onUpdate: () => {
                        counter.textContent = Math.floor(startCount.val).toLocaleString();
                    }
                });
            }
        });
    });

    // --- Vanilla-Tilt Initialization ---
    VanillaTilt.init(document.querySelectorAll(".teacher-card"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
    });

    // --- SMOOTH TYPEWRITER EFFECT (setTimeout version) ---
    const typewriterText = document.getElementById("typewriter-text");
    if (typewriterText) {
        const sentences = [
            { text: "Your Guide to the Future  ", bg: "var(--dynamic-text-bg-1)", color: "white", font: "var(--font-script)" },
            { text: "Education for Everyone  ", bg: "var(--dynamic-text-bg-2)", color: "black", font: "var(--font-display)" },
            { text: "Shaping Future Leaders  ", bg: "var(--dynamic-text-bg-3)", color: "white", font: "var(--font-signature)" },
        ];
        let sentenceIndex = 0;
        let charIndex = 0;
        let isTyping = true;

        function type() {
            const currentSentence = sentences[sentenceIndex % sentences.length];
            const fullText = currentSentence.text;

            // Set styles for the current sentence
            typewriterText.style.background = currentSentence.bg;
            typewriterText.style.color = currentSentence.color;
            typewriterText.style.fontFamily = currentSentence.font;

            if (isTyping) {
                // Typing forward
                if (charIndex < fullText.length) {
                    typewriterText.textContent = fullText.substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(type, 80); // Typing speed
                } else {
                    // Finished typing, pause then start deleting
                    isTyping = false;
                    setTimeout(type, 2000); // Pause at end of sentence
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    typewriterText.textContent = fullText.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(type, 40); // Deleting speed
                } else {
                    // Finished deleting, move to next sentence
                    isTyping = true;
                    sentenceIndex++;
                    setTimeout(type, 500); // Pause before new sentence
                }
            }
        }
        
        // Start the effect
        type();
    }
});
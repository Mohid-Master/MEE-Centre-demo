# Ignite: MEE Center Website

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Vanta.js](https://img.shields.io/badge/Vanta.js-0078D4?style=for-the-badge)

Ignite is a modern, fully-responsive, and performance-optimized landing page designed for the **MEE English Centre**. This project aims to captivate visitors with stunning, interactive animations while ensuring a fast, smooth, and accessible user experience across all devices.

Developed by **Mohid**.

---

## 🚀 Live Demo & Preview

A picture is worth a thousand words, and a GIF is worth a million!

**[➡️ View Live Demo](https://i-am-mohid.netlify.app/)** _(Replace with your actual live demo link)_

<!-- 
  RECOMMENDATION: Create a high-quality GIF of the website in action. 
  Record your screen scrolling through the page, showing off the animations and theme switcher.
  Then, replace the image link below.
-->
![MEE Center Ignite Demo GIF](https://i.ibb.co/L5hY5B1/mee-center-demo.gif)

---

## ✨ Key Features

This website is packed with features designed to create an immersive and professional online presence.

*   **🎨 Multi-Theme System:**
    *   Users can choose between three distinct themes: **Dark Purple**, **Light**, and **Red & Black**.
    *   The selected theme is saved in `localStorage`, so the user's preference is remembered on their next visit.

*   **🌌 Dynamic Vanta.js Background:**
    *   A beautiful and interactive WebGL wave animation serves as the hero background.
    *   The animation's color dynamically updates in real-time when the theme is changed, without lag or page reloads.

*   **🎬 Advanced GSAP Animations:**
    *   Smooth, sequenced entrance animations for hero section elements.
    *   Scroll-triggered animations using **ScrollTrigger** for number counters and timeline events, ensuring they only run when in view.

*   **✍️ Engaging Typewriter Effect:**
    *   A classic, smooth typewriter effect cycles through the center's key taglines, complete with a blinking cursor and dynamic background colors for each phrase.

*   **🚀 Lottie-Powered Illustrations:**
    *   Lightweight, high-quality vector animations (like the CTA rocket) are loaded asynchronously to prevent blocking page render.

*   **✨ Interactive UI Elements:**
    *   **Animate On Scroll (AOS)** for subtle fade and slide effects on section content.
    *   **Vanilla-Tilt.js** provides a 3D tilting effect on the teacher cards for a modern, tactile feel.
    *   Floating WhatsApp button for easy contact.

*   **📱 Fully Responsive Design:**
    *   A mobile-first approach ensures a flawless experience on all screen sizes, from small phones to large desktops.
    *   Includes a responsive hamburger menu for seamless navigation on mobile.

*   **⚡ Performance Optimized:**
    *   Carefully optimized JavaScript to eliminate lag, with event handlers and animations running smoothly without blocking the main thread.

---

## 🛠️ Technology Stack

This project leverages a combination of foundational web technologies and powerful animation libraries.

*   **Frontend:** HTML5, CSS3 (with Custom Properties for Theming), JavaScript (ES6+)
*   **Animation Libraries:**
    *   [**GSAP (GreenSock Animation Platform)**](https://greensock.com/gsap/): The core animation engine for hero animations and scroll-triggered counters.
    *   [**Vanta.js**](https://www.vantajs.com/): For the interactive WebGL background.
    *   [**Lottie-web**](https://airbnb.io/lottie/): For rendering high-performance vector animations.
    *   [**AOS (Animate On Scroll)**](https://michalsnik.github.io/aos/): For simple, declarative scroll animations.
    *   [**Vanilla-Tilt.js**](https://micku7zu.github.io/vanilla-tilt.js/): For the 3D card tilt effect.
*   **Icons & Fonts:**
    *   [**Font Awesome**](https://fontawesome.com/): For all icons.
    *   [**Google Fonts**](https://fonts.google.com/): For web-safe, high-quality typography.

---

## ⚡ Performance Optimizations Implemented

A key focus of this project was to ensure that the heavy use of animations did not compromise performance.

1.  **Non-Blocking Theme Changes:** The Vanta.js background colors are updated using its `setOptions()` method instead of destroying and recreating the entire canvas, reducing the theme-change click handler from ~3500ms to <5ms.
2.  **Asynchronous Lottie Loading:** Lottie animation JSON files are loaded asynchronously using the `fetch` API, preventing them from blocking the initial page load.
3.  **Debounced Resize Handler:** The window `resize` event is debounced to prevent excessive calculations and layout thrashing during window resizing.
4.  **Deferred Script Loading:** All JavaScript libraries are loaded with the `defer` attribute, allowing the browser to parse and render the HTML and CSS without being blocked.
5.  **Efficient Animation Timings:** All animations are carefully sequenced and triggered to run only when necessary, minimizing their impact on the browser's main thread.

---

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mee-center-ignite.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd mee-center-ignite
    ```

3.  **Open `index.html` in your browser.**
    *   For the best experience and to avoid any potential CORS issues with local file loading, it's recommended to use a local server. If you have VS Code, the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension is a great option.

---

## 👤 Author

Crafted with ❤️ by **Mohid**.

*   **Portfolio:** [i-am-mohid.netlify.app](https://i-am-mohid.netlify.app/)
*   **GitHub:** [@your-github-username](https://github.com/your-github-username)
*   **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/your-linkedin-profile/)

---

## 📄 License
This project is licensed under the MIT License - see the `LICENSE` file for details.
# Ignite ME English Center project demo to get more reviews on my  web development skills

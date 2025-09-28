// 1. Set the Current Year in the Footer
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// 2. Add an Action to the CTA Button
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Smoothly scroll down to the projects section when the button is clicked
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// You can add more JavaScript here for things like a simple dark mode toggle, 
// form validation, or fetching data from an API.
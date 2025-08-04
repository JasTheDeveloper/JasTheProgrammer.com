document.addEventListener('DOMContentLoaded', () => {
    const phoneLink = document.getElementById('phone-link');
    const emailDisplay = document.getElementById('email-display');
    const myEmail = 'jasthadeveloper@gmail.com'; // **IMPORTANT: Replace with your actual email**
    const typingSpeed = 70; // Milliseconds per character
    const displayDuration = 1500; // How long email stays visible before popping up email client (milliseconds)

    let isAnimating = false;

    phoneLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        if (isAnimating) {
            return; // Don't do anything if animation is already running
        }

        isAnimating = true;
        emailDisplay.style.opacity = '1';
        emailDisplay.textContent = ''; // Clear any previous text
        emailDisplay.style.width = '0'; // Reset width for animation

        let i = 0;
        const typeEmail = () => {
            if (i < myEmail.length) {
                emailDisplay.textContent += myEmail.charAt(i);
                emailDisplay.style.width = emailDisplay.scrollWidth + 'px'; // Expand width
                i++;
                setTimeout(typeEmail, typingSpeed);
            } else {
                // Once typing is complete, wait for a moment then open email client
                setTimeout(() => {
                    window.location.href = `mailto:${myEmail}`;
                    // Reset display after a short delay for a cleaner look, or immediately if you prefer
                    setTimeout(() => {
                        emailDisplay.style.width = '0';
                        emailDisplay.style.opacity = '0';
                        emailDisplay.textContent = '';
                        isAnimating = false;
                    }, 500); // Short delay before hiding
                }, displayDuration);
            }
        };

        typeEmail(); // Start the typing animation
    });
});
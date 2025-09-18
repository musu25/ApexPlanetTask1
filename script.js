document.addEventListener('DOMContentLoaded', () => {
    // Select the contact form and email input field
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');

    // Check if the form exists on the page before adding the event listener
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the default form submission behavior

            // Regular expression for basic email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            // Validate the email format
            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                return; // Stop the function if validation fails
            }

            // If validation passes, show a success message and reset the form
            alert('Thank you for contacting ApexPlanet! Your message has been sent.');
            contactForm.reset();
        });
    }
});
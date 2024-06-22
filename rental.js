document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#booking form');
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Booking successful!');
        bookingForm.reset();
    });

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});

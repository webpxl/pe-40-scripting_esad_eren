document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log('Form submission:', formData);

    // Clear form
    this.reset();

    // Show success message
    alert('Message sent successfully!');
});
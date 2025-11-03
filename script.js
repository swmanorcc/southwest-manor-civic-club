document.getElementById('volunteer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for signing up! We’ll follow up at ' + email + '.');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
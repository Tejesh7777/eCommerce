// Handle form submission and show confirmation message
document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const card = document.getElementById('card').value;

    // Simple form validation (basic check for empty values)
    if (!name || !email || !address || !card) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate form submission (for now, just show a confirmation message)
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = 'Thank you, Your order has been successfully placed. We will send a confirmation to your email.';

    // Optionally, disable the form and button after successful purchase
    document.querySelector('button.submit-btn').disabled = true;
    document.querySelector('button.submit-btn').textContent = "Purchase Complete";

    // Clear the form
    document.getElementById('purchase-form').reset();
});
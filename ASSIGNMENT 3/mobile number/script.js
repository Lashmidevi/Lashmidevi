document.getElementById('mobileForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const mobileNumber = document.getElementById('mobileNumber').value;
    const message = document.getElementById('message');

    
    const regex = /^\d{10}$/;

    if (regex.test(mobileNumber)) {
        message.textContent = 'Mobile number is valid!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please enter a valid 10-digit mobile number.';
        message.style.color = 'red';
    }
});

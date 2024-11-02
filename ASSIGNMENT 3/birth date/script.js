document.addEventListener("DOMContentLoaded", function () {
    const dobInput = document.getElementById('dob');
    const errorMessage = document.getElementById('error-message');
    const defaultDate = '2020-01-01';

    
    dobInput.value = defaultDate;

    
    document.getElementById('dobForm').addEventListener('submit', function (event) {
        const selectedDate = new Date(dobInput.value);
        const minDate = new Date('2000-01-01');
        const maxDate = new Date('2020-09-01');

        
        errorMessage.textContent = '';

        
        if (selectedDate < minDate || selectedDate > maxDate) {
            event.preventDefault(); 
            errorMessage.textContent = `Please select a date between 01.01.2000 and 01.09.2020.`;
        }
    });
});

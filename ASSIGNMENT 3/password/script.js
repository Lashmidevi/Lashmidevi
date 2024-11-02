function generatePassword() {
    const length = 8;
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digits = '0123456789';
    const allChars = upperCaseChars + lowerCaseChars + digits;

    let password = '';

    
    for (let i = 0; i < 2; i++) {
        password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    }

   
    password += digits[Math.floor(Math.random() * digits.length)];

   
    for (let i = password.length; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

   
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    return password;
}

document.getElementById('generateBtn').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('password').textContent = `Generated Password: ${password}`;
});

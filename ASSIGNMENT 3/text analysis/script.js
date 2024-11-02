function analyzeText() {
    const text = document.getElementById('textInput').value;
    let alphabets = 0, digits = 0, specialChars = 0;

    for (let char of text) {
        if (/[a-zA-Z]/.test(char)) {
            alphabets++;
        } else if (/[0-9]/.test(char)) {
            digits++;
        } else if (/[^a-zA-Z0-9\s]/.test(char)) {
            specialChars++;
        }
    }

    document.getElementById('resultAlphabets').innerText = `Number of Alphabets: ${alphabets}`;
    document.getElementById('resultDigits').innerText = `Number of Digits: ${digits}`;
    document.getElementById('resultSpecial').innerText = `Number of Special Characters: ${specialChars}`;
}

function changeBackgroundColor() {
    const bgColor = document.getElementById('bgColor').value;
    document.getElementById('textInput').style.backgroundColor = bgColor;
}

function changeTextColor() {
    const textColor = document.getElementById('textColor').value;
    document.getElementById('textInput').style.color = textColor;
}

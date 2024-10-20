let count = 0;
let intervalId;

const counterDisplay = document.getElementById('counter');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');

startButton.addEventListener('click', () => {
    if (!intervalId) { 
        intervalId = setInterval(() => {
            count++;
            counterDisplay.textContent = count;
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; 
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    count = 0;
    counterDisplay.textContent = count;
});

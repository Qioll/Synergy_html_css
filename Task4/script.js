document.addEventListener('DOMContentLoaded', () => {
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const resultDisplay = document.getElementById('result');
    const messageDisplay = document.getElementById('message');

    let count = 0;

    function updateDisplay() {
        resultDisplay.textContent = count;
        if (count > 0) {
            resultDisplay.style.backgroundColor = 'yellow';
        } else if (count < 0) {
            resultDisplay.style.backgroundColor = 'green';
        } else {
            resultDisplay.style.backgroundColor = 'red';
        }

        if (count === 10) {
            plusButton.disabled = true;
            messageDisplay.textContent = 'Вы достигли экстремального значения';
        } else if (count === -10) {
            minusButton.disabled = true;
            messageDisplay.textContent = 'Вы достигли экстремального значения';
        } else {
            plusButton.disabled = false;
            minusButton.disabled = false;
            messageDisplay.textContent = '';
        }
    }

    minusButton.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    plusButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    updateDisplay();
});
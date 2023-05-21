// pin generating function
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        console.log(pin);
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    document.getElementById('pin-display').value = getPin();
}

// keypad
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    console.log(number);
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = '';
        }
    }
    else {
        const previouseNumber = calcInput.value;
        const newNumber = previouseNumber + number;
        calcInput.value = newNumber;
    }
})
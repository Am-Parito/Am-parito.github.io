const calcButton = document.getElementById("calculate");

calcButton.addEventListener('click', () => {
    const x = document.getElementById('inputNumber').value;
    const a = document.getElementById('inputBase').value
    const output = Math.log(x)/Math.log(a);
    document.getElementById('result').innerHTML = output;
});

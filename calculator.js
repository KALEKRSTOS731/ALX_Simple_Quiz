function add(number1, number2) {
    return number1 + number2;
}

document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
function sub(number1, number2) {
    return number1 - number2;

    document.getElementById('sub').addEventListener('click', function() {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        const result = sub(number1, number2);
        document.getElementById('calculation-result').textContent = result;
    });
}
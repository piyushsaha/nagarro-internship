const convertBtn = document.querySelector('#convertBtn');
const error = document.querySelector('#error');
const output = document.querySelector('#output');
const gramsInput = document.querySelector('#gramsInput');

convertBtn.addEventListener('click', () => {
    if(gramsInput.value === '') {
        error.innerHTML = 'Enter weight in grams!';
        return;
    }
    error.innerHTML = '';
    const ans = gramsInput.value/1000;
    output.innerHTML = `${gramsInput.value} g = ${ans} kg`;
});
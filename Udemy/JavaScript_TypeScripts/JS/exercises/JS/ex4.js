const numberInput = Number(prompt('Please insert a number: '));
const titleNumber = document.getElementById('number-input');
const texts = document.getElementById('texts');

titleNumber.innerHTML = numberInput;
texts.innerHTML = '';
texts.innerHTML += `<p><b>Double is: </b> ${numberInput * 2}.</p>`;
texts.innerHTML += `<p><b>Half is: </b> ${numberInput * 0.5}.</p>`;
texts.innerHTML += `<p><b>Square root is: </b> ${numberInput ** 0.5}.</p>`;
texts.innerHTML += `<p><b>Is integer? </b> ${Number.isInteger(numberInput)}.</p>`;
texts.innerHTML += `<p><b>Is it NaN? </b> ${Number.isNaN(numberInput)}.</p>`;
texts.innerHTML += `<p><b>Rounding up: </b> ${Math.ceil(numberInput)}.</p>`;
texts.innerHTML += `<p><b>Rounding down: </b> ${Math.floor(numberInput)}.</p>`;
texts.innerHTML += `<p><b>Two decimal: </b> ${numberInput.toFixed(2)}.</p>`;

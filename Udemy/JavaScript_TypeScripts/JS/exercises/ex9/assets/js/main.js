const textos = document.querySelector('.textos');
const paragrafos = textos.querySelectorAll('p');

const capturaEstilo = getComputedStyle(document.body);
const backGrounColor = capturaEstilo.backgroundColor;

for (p of paragrafos) {
    p.style.backgroundColor = backGrounColor;
    p.style.color = '#325';
}
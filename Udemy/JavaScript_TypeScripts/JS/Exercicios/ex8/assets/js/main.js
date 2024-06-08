const elementos = [
    { tag: 'p', texto: 'frase 1 - p' },
    { tag: 'div', texto: 'frase 2 - div' },
    { tag: 'section', texto: 'frase 3 - section' },
    { tag: 'footer', texto: 'frase 4 - footer' },
];

const texts = document.querySelector('.secao');

const saidas = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criaTag = document.createElement(tag);
    criaTag.innerHTML = texto;
    saidas.appendChild(criaTag);
}

texts.appendChild(saidas);
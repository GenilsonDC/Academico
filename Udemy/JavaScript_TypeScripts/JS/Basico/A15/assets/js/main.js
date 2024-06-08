const inputTarefa = document.querySelector('.input-new-item');
const btnAdd = document.querySelector('.btn-add');
const list = document.querySelector('.lists');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaItem(inputText) {
    const li = criaLi();
    li.innerText = inputText;
    list.appendChild(li);
    btnRemoveItem(li);
    salvarItensdaLista();

};

btnAdd.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaItem(inputTarefa.value);
    clearInput();
});

document.addEventListener('click', function (event) {
    const element = event.target;
    if (element.classList.contains('btnRemove')) {
        element.parentElement.remove();
        salvarItensdaLista();
    }

});

inputTarefa.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaItem(inputTarefa.value);
        clearInput();
    }
});

function clearInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}
function btnRemoveItem(li) {
    li.innerText += ' ';
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'X';
    btnRemove.setAttribute('class', 'btnRemove');
    btnRemove.setAttribute('title', 'Apagar item da lista');
    li.appendChild(btnRemove);
}

function salvarItensdaLista() {
    const lisCriados = list.querySelectorAll('li');
    const arrayLis = [];

    for (let item of lisCriados) {
        let lisTexto = item.innerText;
        lisTexto = lisTexto.replace('X', '').trim();
        arrayLis.push(lisTexto);
    }
    const listaJSON = JSON.stringify(arrayLis);
    localStorage.setItem('listadeItens-My-List', listaJSON);
}

function readSevadList() {
    const itens = localStorage.getItem('listadeItens-My-List');
    const itensList = JSON.parse(itens);
    for (let item of itensList) {
        criaItem(item);
    }
}
readSevadList();
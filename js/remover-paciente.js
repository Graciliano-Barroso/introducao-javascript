let tabela = document.querySelector('table');

tabela.addEventListener('dblclick', (event)=> {

    event.target.parentNode.classList.add('fadeOut');

    setTimeout( ()=> {
        event.target.parentNode.remove();
    }, 500);

    

    /* let alvoEvento1 = event.target;
    let paiDoAlvo1 = alvoEvento1.parentNode;
    paiDoAlvo1.classList.add('fadeOut');

    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove(); */
});

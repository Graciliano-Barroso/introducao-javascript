let tabela = document.querySelector('table');

tabela.addEventListener('dblclick', (event)=> {
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;
    paiDoAlvo.remove();
});

/* let pacientes = document.querySelectorAll('.paciente');

pacientes.forEach( (paciente)=> {
    paciente.addEventListener('dblclick', ()=> {
        console.log("fui clicado com um duplo click");
        paciente.remove();
    });
}); */

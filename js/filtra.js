let campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', ()=> {
    console.log(campoFiltro.value);
    let pacientes = document.querySelectorAll('.paciente');

    if (campoFiltro.value.length > 0) {

        for(let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            let expressao = new RegExp(campoFiltro.value, "i");

            if (!expressao.test(nome)) {
                paciente.classList.add('invisivel');
            }else {
                paciente.classList.remove('invisivel');
            }
        }
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
});
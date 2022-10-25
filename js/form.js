let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', (event)=> {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);
    let pacienteTr = montaTr(paciente); 

    let erros = validaPaciente(paciente);
    
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML ="";

});

function obtemPacienteDoFormulario(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente (paciente){

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo nome está vazio");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso está inválido");
    }

    if(paciente.peso.length == 0) {
        erros.push("O campo peso está vazio");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura está inválida");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo altura está vazio");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo gordura está vazio");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach((erro)=> {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

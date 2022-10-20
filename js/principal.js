let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelectorAll(".paciente");

for(let i = 0; i < paciente.length; i++) {

    let document = paciente[i];

    let tdPeso = document.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = document.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = document.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;

    if(peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente[i].classList.add("paciente-invalido");
    } 

    if(altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente[i].classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', (event)=> {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})







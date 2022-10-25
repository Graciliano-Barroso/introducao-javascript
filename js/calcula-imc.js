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

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if(!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente[i].classList.add("paciente-invalido");
    } 

    if(!alturaValida) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente[i].classList.add("paciente-invalido");
    }

    if(alturaValida && pesoValido) {
        let imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    }else {
        return false;
    }
}

function calculaImc(peso,altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

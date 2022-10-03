let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");

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
} 

if(altura <= 0 || altura >= 1000) {
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if(alturaValida && pesoValido) {
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}



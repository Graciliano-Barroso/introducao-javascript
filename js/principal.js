let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = document.querySelector(".info-peso");
let peso = tdPeso.textContent;

let tdAltura = document.querySelector(".info-altura");
let altura = tdAltura.textContent;

let tdImc = document.querySelector(".info-imc");

let imc = peso / (altura * altura);

tdImc.textContent = imc;
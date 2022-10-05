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





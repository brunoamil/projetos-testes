var nome = document.querySelector(".titulo");
nome.textContent = "Bruno Lima";



//selecionando os pacientes
var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

//loop for
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add('paciente-invalido');
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura invalida");
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida";
        paciente.classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

// funcao para calcular IMC
function calculaImc(peso,altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}



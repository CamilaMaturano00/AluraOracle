
//Construyo variables para obtener html que necesito
var pacientes = document.querySelectorAll(".paciente");
// Iteracion sobre el array de pacientes que traigo en la linea de arriba
for(var i = 0; i <= pacientes.length; i++){
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; // Obtengo solo el texto sin etiquetas
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
    //Valido que los datos cargados sean correctos segun los parametros
    var pesoEsValido = true;
    var alturaEsValido = true;
    if(peso <=0 || peso >=1000){
        console.log("Peso incorrecto");
        tdImc.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto")
    }
    if(altura <=0 || altura >= 2.5){
        console.log("Altura incorrecta");
        tdImc.textContent = "Altura incorrecto";
        alturaEsValido = false;
        paciente.classList.add("paciente-incorrecto")
    }
    //Si uno de los valores es incorrecto no realizara la operacion
    if(pesoEsValido && alturaEsValido){
        tdImc.textContent = calcularIMC(peso,altura); 
    }    
}

function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

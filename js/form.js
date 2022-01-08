var botonAdicionar = document.querySelector("#adicionar-paciente");
botonAdicionar.addEventListener("click",function(){ //Escuchar eventos
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);

    var tabla = document.querySelector("#tabla-pacientes") //Selecionar la tabla
    //Creo los td y tr
    var pacienteTr = document.createElement("tr"); // Crear elemento de fila
    var nombreTd = document.createElement("td"); // Crear elemento de columnas 
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //Asigno valores a la propiedad textContent
    nombreTd.textContent = nombre; //Asigno los valores a los elementos
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura);
    //Asigno al tr  los td y  a la tabla el tr
    pacienteTr.appendChild(nombreTd); //añado los elementos con los valores ya cargados a mi objeto 
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    tabla.appendChild(pacienteTr); // Añado mi objeto a una posicion en la tabla


});
function capturarDatosPaciente(form){
    //Capturo datos del formulario
    
    var nombre = form.nombre.value; //asignar el valor del formulario a una variable
    var peso  = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    return 
}
var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){ //Capturo el click
    var xhr= new XMLHttpRequest; //Creo un objeto
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json"); //paso la url de donde quiero extraer
    xhr.addEventListener("load",function(){
        var errorAjax = document.querySelector("#error-ajax");
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes= JSON.parse(respuesta); //Convierto los string de respuesta en un JSON
            pacientes.forEach(function (paciente){ //Itero entre todos los pacientes 
              adicionarPaciente(paciente);
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
    xhr.send();
});


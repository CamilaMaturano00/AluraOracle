var pacientes = document.querySelectorAll(".paciente");
var tabla = document.querySelector("#tabla-pacientes");
//Con un evento escucho el doble click y con el target.remove procedo a eliminar lo clickeado
tabla.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();//Capturo el evento en cada elemento
    },500); 
});

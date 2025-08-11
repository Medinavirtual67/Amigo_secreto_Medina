// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración del arreglo principal (donde se guardan los amigos)
let amigos =[];


//Declaración de funciones
//El HTML va a llamar esta función para agregar a la lista los amigos
function agregarAmigo(){
//Registra los intorducido en la caja de introducir amigos
let amigoAgregado = document.getElementById("amigo").value;
console.log (amigoAgregado);


//valida sin no se escribe algun nombre en la caja de introducir amigos
if(amigoAgregado===""){
    alert("Por favor, inserte un nombre");
    return;
}
amigos.push(amigoAgregado);
limpiarCaja();
mostrarAmigoNuevo()
}
//fin de la función agregar amigos

//Función limpiar caja
function limpiarCaja (){
document.querySelector("#amigo").value="";
}


//fin de la función limpiar caja

//funcion para mostrar amigos
function mostrarAmigoNuevo(){
    //donde se veran los amigos registrados
    let validacionAmigo = document.querySelector("#listaAmigos");
    //Limpia la lista a partir de la modificación del HTML con .innerHTML
    validacionAmigo.innerHTML="";
    //validación de la lista 
    for(let cont=0; cont< amigos.length; cont++){
        //crea un elemento li
        let item=document.createElement("li");
        //en este elemento agregara a los amigos de acuerdo a su numero de posición
        item.textContent=amigos[cont];
        //Sigue agregando a los amigos 
        validacionAmigo.appendChild(item);
        }
}
//fin de la función limpiar caja


function sortearAmigo(){
//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
if (amigos.length===0){
    alert("Por favor agregue un amigo a la lista");
}
//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
let posicionAmigoSecreto= Math.floor(Math.random()*amigos.length);
//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
let amigoSecreto=amigos[posicionAmigoSecreto];
//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
let resultado=document.getElementById("resultado");
resultado.innerHTML=`Tu amigo secreto es: ${amigoSecreto}`;

}


// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (!nombre) {
        alert("Escribe un nombre válido");
        return;
    }

    friends.push(nombre);
    input.value = ""; // Limpiar input

    actualizarLista(); // Llamar a la función que actualiza la lista
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = friends[friends.length - 1]; // Último agregado
    ul.appendChild(li);
}

function sortearAmigo(){
    //document.getElementById("resultado").innerHTML="";

    //alert(friends[(Math.floor(Math.random() * friends.length))]+" es el amigo secreto");
    //return document.getElementById("resultado").appendChild( document.createTextNode(friends[(Math.floor(Math.random() * friends.length))]+" es el amigo secreto"));
    const ul = document.getElementById("resultado");
     ul.innerHTML = ""; // Limpiar la lista antes de agregar el nuevo resultado
    
    const li = document.createElement("li"); // Crear un nuevo <li>
    const amigoSecreto = friends[Math.floor(Math.random() * friends.length)]; // Seleccionar un amigo aleatorio
    
    li.textContent = amigoSecreto + " es el amigo secreto"; // Asignar el texto al <li>
    ul.appendChild(li); // Agregar el <li> al <ul>

}
/*------------------------------------------------------------*/
// querySelector
const heading = document.querySelector('h2'); //0 o 1 elementos
//heading.textContent = 'Nuevo heading';
//console.log(heading);
/*------------------------------------------------------------*/


/*------------------------------------------------------------*/
//querySelectorAll
const enlaces = document.querySelectorAll('a'); //Todos los elementos
//enlaces[0].textContent = 'Nuevo enlace';
//console.log(enlaces);
/*------------------------------------------------------------*/


/*------------------------------------------------------------*/
//Generar un nuevo enlace
//<a href="https://youtube.com" class="navegacion__enlace">Esto es un nuevo enlace</a>
const nuevoEnlace = document.createElement('a');

//Agregar href
nuevoEnlace.href = 'https://youtube.com';

//Agregar texto
nuevoEnlace.textContent = 'Esto es un nuevo enlace';

//Agregar una clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
/*const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);*/


//Seleccionar elementos y asociarles un evento
/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('enviando formulario');
});*/
/*------------------------------------------------------------*/


/*----------------------------------------------------------*/
//Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e){

    datos[e.target.id] = e.target.value;

    //console.log(datos);
}
/*------------------------------------------------------------*/


/*------------------------------------------------------------*/
//Evento submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario
    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    //enviar el formulario
    mostrarExito('Se ha enviado correctamente');

});
/*------------------------------------------------------------*/


/*------------------------------------------------------------*/
//Mostrar un mensaje de error por pantalla
//<p class="error">Todos los campos son obligatorios</p>
function mostrarError(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    //Desaparecer mensaje despues de 3 segundos
    setTimeout(()=>{
        error.remove();
    }, 3000);

}
/*------------------------------------------------------------*/


/*------------------------------------------------------------*/
//Mostrar un mensaje de exito por pantalla
//<p class="exito">Se ha enviado correctamente</p>
function mostrarExito(mensaje){
    const exito = document.createElement('p');
    exito.textContent = mensaje;
    exito.classList.add('exito');

    formulario.appendChild(exito);

    //Desaparecer mensaje despues de 3 segundos
    setTimeout(()=>{
        exito.remove();
    }, 3000);

}
/*------------------------------------------------------------*/

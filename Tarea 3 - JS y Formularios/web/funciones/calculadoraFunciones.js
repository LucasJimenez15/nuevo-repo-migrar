//lo primero que hacemos es crear 2 constantes
const display = document.querySelector("#display"); //en esta instruccion seleccionamos todos los elementos con la id display
const buttons = document.querySelectorAll("button") //esta constante para que tome todos los botones que tenemos

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else {
            display.value += btn.id
        }
    })
})

/*Aquí se definen dos constantes:
 display: Selecciona el elemento HTML con el id display, que es donde se muestra el resultado de la calculadora.
 buttons: Selecciona todos los elementos <button> del documento.
 
 Agregar Event Listeners a los Botones, Los "event listeners" (escuchadores de eventos) son funciones que se utilizan 
 en JavaScript para detectar y manejar eventos que ocurren en un elemento HTML, como clics del mouse, 
 pulsaciones de teclas, cambios en el contenido, etc. Cuando se añade un event listener a un elemento HTML, se especifica 
 qué evento se está esperando y qué función se ejecutará cuando ese evento ocurra. Esto permite que el código responda de
 manera dinámica a las acciones del usuario o a otros eventos que ocurran en la página web.
 
 en este caso    btn.addEventListener("click" () => {cuerpo de la funcion}) lo que hace es que cuando el usuairio precione 
 un boton este lo enviara a realizar la funcion definida entre los corchetes

 se utiliza el método forEach() para iterar sobre cada botón. 
 forEach es un método de los arrays en JavaScript que te permite ejecutar una función en cada elemento del array. 
 Funciona de la siguiente manera:
 *Toma un array como su argumento principal.
 *Itera sobre cada elemento del array.
 *Por cada elemento, ejecuta una función que tú proporcionas.

 Se agrega un event listener para el evento de clic a cada botón.
 
 Lógica de la Calculadora:
 Se verifica el id del botón clickeado para determinar qué acción realizar.
 Si el id es "=", se evalúa la expresión matemática en el display y se muestra el resultado.
 Si el id es "ac" (que significa "clear" o "borrar todo"), se borra el contenido del display.
 En cualquier otro caso, se agrega el valor del botón clickeado al contenido del display.
 */
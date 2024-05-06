let animales = ["gato","perro","rex"];
animales.tamaño = "grande";


//este es decir el in muestra el nombre de la posicion del elemento en el array, y tambien muestra las propiedades como la de tamaño
for (animal in animales) {
        document.write(animal+`<br>`);
    }
//para mostrar los animales aqui cambiamos animal por animales[animal], ya que animal se usa como variable de contador 

document.write(`<br>`);

//este es decir el of muestra directamente el valor de dicha posicion    
    for (animal of animales) {
        document.write(animal + `<br>`);
    }
document.write(animales.tamaño);

/*esto nos ahorra tener que crear el for normal, es decir en vez de hacer todo esto con un of o un in ya es suficiente para mostrar
todo el arreglo*/
/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
} */

//las instrucciones break; y continue; en bucles son importantes, continue pora saltarnos una vuelta o iteracion de un bucle
//y break para salir directamente de este, label se usa junto con el break y sirve para poder decir hasta que parte queremos que
//se cierre el bucle por ejemplo

/*label:
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    break label;
}*/




document.write(`Arrays normales <br>`);
let frutas = ["banana","manzana","pera",2,5,12];
document.write(frutas[1]);
document.write(`<br>`);
let pc2 = ["lucas","intel core i7","16gb"];
document.write(pc2);
document.write(`<br>`);

/*este tipo de array lo que hace es cambiar el nombre de la poscion , es decir, a la posicion 0 por ejemplo para accederla
supongamos que le ponemos el nombre lucas a la poscion 0 , entonces lo hariamos de la siguiente manera frutas["lucas"], en
vez de frutas[0]*/
let pc1 = {
    nombre: "lucas",
    procesador: "intel core i7",
    ram: "16 gb",
}

document.write(`<br><br>Array asociativo <br>`);
document.write(pc1["nombre"]);
document.write("    "+ pc1["procesador"]);

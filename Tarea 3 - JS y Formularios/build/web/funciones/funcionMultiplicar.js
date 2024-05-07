
const numero = parseInt(prompt("Ingrese un numero para saber su tabla de multiplicar"));

const multiplicar = (numero) =>{
    
    for (var i = 0; i <= 10; i++) {
        document.write(numero+" X "+i+" = "+numero * i+ " <br> ");
    }
    
}

multiplicar(numero);

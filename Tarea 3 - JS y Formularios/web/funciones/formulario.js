
const escribirEnLetras = () => {
    numeroInput = document.getElementById("numero");
    numero = parseInt(numeroInput.value);
    if (!isNaN(numero)) {
        const letras = convertirNumeroALetras(numero);
        alert(letras);
    } else {
        alert('Por favor ingrese un número válido.');
    }
}

/*const convertirNumeroALetras = (numero) => {
 cadenanumero = numero.toString();
 cadena = cadenanumero.split('');
 let numero_en_letras = [];
 let i = 0;
 while (i < cadena.length) {
 switch (cadena[i]) {
 case '0':
 numero_en_letras[i] = "cero ";
 break;
 case '1':
 numero_en_letras[i] = "uno ";
 break;
 case '2':
 numero_en_letras[i] = "dos ";
 break;
 case '3':
 numero_en_letras[i] = "tres ";
 break;
 case '4':
 numero_en_letras[i] = "cuatro ";
 break;
 case '5':
 numero_en_letras[i] = "cinco ";
 break;
 case '6':
 numero_en_letras[i] = "seis ";
 break;
 case '7':
 numero_en_letras[i] = "siete ";
 break;
 case '8':
 numero_en_letras[i] = "ocho ";
 break;
 case '9':
 numero_en_letras[i] = "nueve ";
 break;
 default:
 break;
 }
 i++;
 }
 return numero_en_letras;
 }*/

function convertirNumeroALetras(numero) {
    let unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    let decenas = ['diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    let especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince'];

    if (numero < 10) {
        return unidades[numero];
    } else if (numero < 20) {
        if (numero < 16) {
            return especiales[numero - 10];
        } else {
            return decenas[0] + ' y ' + unidades[numero - 10];
        }


    } else if (numero < 100) {
        let decena = Math.floor(numero / 10); //math floor redondea al numero mas cercano, hacemos esto para obtener la decena
        let resto = numero % 10; //y con el resto = 0 podremos darnos cuenta de si es una decena pura por asi decirlo o no
        if (resto === 0) {
            return decenas[decena - 1]; //quiere decir que es una decena, (-1 porque arrancamos desde )
        } else {
            return decenas[decena - 1] + ' y ' + unidades[resto]; //es una decena y una unidad
        }
        
        
    } else if (numero < 1000) {
        let centena = Math.floor(numero / 100);
        let resto = numero % 100;
        if (resto === 0) {
            return unidades[centena] + 'cientos';
        } else {
            return unidades[centena] + 'cientos ' + convertirNumeroALetras(resto);
        }
    } else {
        return 'Número fuera de rango';
    }
}




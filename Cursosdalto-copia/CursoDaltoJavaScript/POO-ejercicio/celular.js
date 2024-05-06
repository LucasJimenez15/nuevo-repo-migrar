class Celular {

    constructor(color, peso, resolucionPantalla, ResolucionCamara, memoriaRam) {
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.ResolucionCamara = ResolucionCamara;
        this.memoriaRam = memoriaRam;
        this.estado = false;
    }

    set setEstado(newEstado){
        this.estado = newEstado;
    }

    get getEstado(){
        return this.estado;
    }

    prender(){
        if(getEstado() = true){
            alert("Encendido");
        }else if(getEstado(false)){
            alert("El celular se esta encendiendo");
            setEstado(true);
        }
    }

    apagar(){
        if(getEstado() = true){
            alert("Apagando");
            setEstado(false);
        }else{
            console.log("El celular ya esta apagado");
        }
    }

    reiniciar(){
        if(getEstado() = true){
            alert("Reiniciando");
            setEstado(false);
            setEstado(true);
        }else{
            setEstado(true);
        }
    }

    tomarFoto(){
        alert(`se tomo una foto con una resolucion de camara de ${this.ResolucionCamara}`)
    }

    grabarVideo(){
        alert(`se grabo un video con una resolucion de pantalla de ${this.resolucionPantalla}`)
    }

    mobileInfo(){
        return `
            <p><strong>El color del telefono es: ${this.color}</strong><br>
            <strong>El peso del telefono es: ${this.peso}</strong><br>
            <strong>la resolucion de pantalla del telefono es: ${this.resolucionPantalla}</strong><br>
            <strong>la resolucion de camara del telefono es: ${this.ResolucionCamara}</strong><br>
            <strong>la memoria ram del telefono es: ${this.memoriaRam}</strong></p>
        `
    }
}

c1 = new Celular("Rojo","100g","5'","Full HD",2);
c2 = new Celular("Verde","120g","4.4'","Full HD",1);

document.write(`<b> Telefono 1 </b>`);
document.write(c1.mobileInfo());
document.write(`<b> Telefono 2 </b>`);
document.write(c2.mobileInfo());
document.write(`<br><br><br><br><br><br><br>`)

/*document.write(`<br><br><br><br><br><br><br><br><br><br><br><br>`);
let nombre = `<h1>lucas</h1>`;
document.write(nombre);
alert(`'hola' "soy" ${nombre}`);*/

class CelularesAltaGama extends Celular{

constructor(color, peso, resolucionPantalla, ResolucionCamara, memoriaRam,camaraExtra,reconocimientoF){
    super(color, peso, resolucionPantalla, ResolucionCamara, memoriaRam);
    this.camaraExtra = camaraExtra;
    this.reconocimientoFacial = reconocimientoF;
}

grabarVideoLento(){
    alert("Estas grabando en camara lenta");
}

tomarReconocimientoFacial(){
    alert("Tomando reconocimiento facial");
}

mobileInfo(){
    return `
            <p><strong>El color del telefono es: ${this.color}</strong><br>
            <strong>El peso del telefono es: ${this.peso}</strong><br>
            <strong>la resolucion de pantalla del telefono es: ${this.resolucionPantalla}</strong><br>
            <strong>la resolucion de camara del telefono es: ${this.ResolucionCamara}</strong><br>
            <strong>la memoria ram del telefono es: ${this.memoriaRam}</strong><br>
            <strong>camaras extra del telefono: ${this.camaraExtra}</strong><br>
            <strong>el telefono tiene reconocimeiento facial: ${this.reconocimientoFacial}</strong></p> `
}

}


celularaltagama1 = new CelularesAltaGama ("Verde","120g","4.4'","Full HD",1,"1 camara extra 4K","si");
celularaltagama2 = new CelularesAltaGama ("Rojo","100g","5'","Full HD",2,"2 camara extra 4K","si");

document.write(`<b> Telefono de alta gama 1 </b>`);
document.write(celularaltagama1.mobileInfo());
document.write(`<b> Telefono de alta gama 2 </b>`);
document.write(celularaltagama2.mobileInfo());
document.write(`<br><br><br><br><br><br><br>`)

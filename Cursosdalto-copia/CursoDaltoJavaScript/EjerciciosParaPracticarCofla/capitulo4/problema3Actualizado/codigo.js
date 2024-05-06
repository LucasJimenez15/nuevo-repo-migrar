let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}

const obtenerInformacion = (materia)=>{
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else {
		return materias;
	}
}

const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);
    if (informacion !== false) {
	    let profesor = informacion[0][0];
	    let alumnos = informacion[0];
        alumnos.shift();
	    document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
		Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
		`);
        alumnos.unshift(profesor);
    }

}

const inscripcionMaterias = (alumno) =>{
    alert("En que materia te deseas inscribir " + alumno + "?");
    let res = parseInt(prompt("1-Fisica  2-Programacion  3-logica  4-quimica"));

    switch (res) {
        case 1:
            if((materias.fisica.length - 1) < 20){
                materias.fisica.push(alumno);
            }else{
                alert("No se puede inscribir en la materia ya que hay 20 alumnos");
            }     
            break;     
        case 2:
            if((materias.programacion.length - 1) < 20){
                materias.programacion.push(alumno);
            }else{
                alert("No se puede inscribir en la materia ya que hay 20 alumnos");
            }     
            break; 
        case 3:
            if((materias.logica.length - 1) < 20){
                materias.logica.push(alumno);
            }else{
                alert("No se puede inscribir en la materia ya que hay 20 alumnos");
            }     
            break; 
        case 4:
            if((materias.quimica.length - 1) < 20){
                materias.quimica.push(alumno);
            }else{
                alert("No se puede inscribir en la materia ya que hay 20 alumnos");
            }     
            break; 
        default: alert("se ingreso una opcion incorrecta");
            break;
    }
};

document.write("<b> Este es el arreglo 'Materias' antes de ser modificado </b> <br><br>");
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

inscripcionMaterias("Lucas Jimenez");

document.write("<br><br><b> Este es el arreglo 'Materias' despues de ser modificado </b> <br><br>");
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");


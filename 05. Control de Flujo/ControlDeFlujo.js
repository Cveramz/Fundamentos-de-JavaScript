/* Control de flujo en Javascript */

// Estructura if if(Condicion){Instrucciones}

var edad = 18;
if(edad >= 18){
    console.log("Eres mayor de edad");
}

// Estructura if-else if(Condicion){Instrucciones} else {Instrucciones}

var edad = 18;
if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}


// Switch

var dia = 1;
switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("No es un dia de la semana");
        break;
}


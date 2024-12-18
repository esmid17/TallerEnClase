/*---------------------------------------------------------------------- 
                            SENTENCIAS DE CONTROL
----------------------------------------------------------------------*/

//if/else

//var, let, const
let numero = 10;

if (numero == 1){
    console.log("Numero 1");
}else if (numero == 2){
    console.warn("Numero 2")
}
else if (numero == 3){
    console.warn("Numero 3");
}else{
    console.log("No es un numero")
}

//Ejercicio referente a las estaciones del año
//Invierno, Otoño, Primavera, Verano

let mes = 4;
let estacion;

if (mes== 1 || mes == 2 || mes == 3) {
    estacion = "Invierno";
}else if (mes == 4 || mes == 5 || mes == 6) {
    estacion = "Otoño";
}else if (mes == 7 || mes == 8 || mes == 9) {
    estacion = "Primavera";
}else if (mes == 10 || mes == 11 || mes == 12) {
    estacion = "Verano";
}else{
    estacion = "No corresponde a una estacion";
}
console.warn(estacion);

//Ejercicio
//Calcular la hora del dia

/*
6am - 11am ==> Buenos dias
12am - 18pm ==> Buenas tardes
19pm - 23pm ==> Buenas noches
24am - 6am ==> Durmiendo 
*/

let horaDia = 13;
let mensaje;

if(horaDia >= 6 && horaDia <= 11) {
    mensaje = "Buenos dias";
}else if (horaDia >= 12 && horaDia <= 18) {
    mensaje = "Buenas tades";
}else if (horaDia >= 19 && horaDia <= 23) {
    mensaje = "Buenas noches"
}else if (horaDia >= 0 && horaDia < 6) {
    mensaje = "Durmiendo"
}else{
    mensaje = "No es una hora correspondiente";
}
console.warn(mensaje);

//Switch
let mesE = 11;
let estacionI = 'Estacion desconocida';

switch(mesE){
    case 1: case 2: case 3:
        estacionI = 'Invierno';
        break;

    case 4: case 5: case 6:
        estacionI = 'Otoño';
        break;

    case 7: case 8: case 9:
        estacionI = 'Primavera';
        break;

    case 10: case 11: case 12:
        estacionI = 'Verano';
        break;

    default:
        estacionI = 'Valor incorrecto';
}

console.log(estacionI);

//Otra forma de utilizar el if 

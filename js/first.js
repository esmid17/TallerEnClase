var nombre ="Ricardo";
var edad;
edad = 25;
var apellido="Vargas"
console.log("Mi nombre es: "+ nombre +" "+ apellido);
console.log("Mi edad es: "+ edad);
let x = 10;
let y =20;
let z= x + y;
console.log(z);

//Variables tipo String
let nombrePersona1;
nombrePersona1 = "Ricardo";
console.log(nombrePersona1);

let numero = 1000;
console.log(numero);

//Tipo de datos Objeto object
let persona = {
    nombre: 'Ricardo',  //Se púede usar tanto ' como "
    apellido: "Vargas",
    edad: 25
}

console.log(persona);

//Tipo de dato typeof
let let1 = "Ricardo";
console.log(typeof let1);

let let2 = 25;
console.log(typeof let2);

let let3 = true;
console.log(typeof let3);

let let4 = BigInt(123);
console.log(typeof let4);

let let5 = [1, 2, 3, 4, 5, 6, , 8, 9];
console.log(typeof let5);

//Tipop de dato tipo funcion
function saludar() {}
console.log(typeof saludar);

//Tipo de dato symbol
let simbolo = Symbol("Mi simbolo"); //Puede ser utilizado por un identificador único
console.log(typeof simbolo);

//Tipo de dato tipo clase, que es lo mismo que una función
class Persona { //Declaración de la clase
    constructor(nombres, apellidos, edad){ //Atributos del constructor
        this.nombres = nombres; //Propiedades: atributos
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

console.log(typeof Persona);

//Tipo de dato undefined, se puede utilizar como un valor
let variable;
console.log(variable);
console.log(typeof variable);

//Tipo de dato null, quiere decir que tiene ausencia de valor
let variable1 = null;
console.log(variable1);
console.log(typeof variable1);

//Tipo de dato de arreglos en JS
let autos = ["BMW", "Mercedes Benz", "Audi"];
console.log(autos);
console.log(typeof autos);

//Tipo de datos son los generados por cadenas vacías
let cadenaVacia = "";
console.log(cadenaVacia);
console.log(typeof cadenaVacia);

//Reglas de JS para declarar variables
//No se puede iniciar con números
//No se puede iniciar con símbolos
//No se puede iniciar con mayúsculas

//Formas correctas de declarar una variable
let nombresCompletos = "Ricardo Vargas";
let nombres_Completos = "Ricardo Vargas";
let $nombresCompletos = "Ricardo Vargas";
let _nombresCompletos = "Ricardos Vargas";
let nombresCompletos_ = "Ricardo Vargas";
let a1nombresCompletos = "Ricardo Vargas";

//Formas incorrectas de declarar una variable
/*let 1nombresCompletos = "Ricardo Vargas";
let nombrescompletos = "Ricardo Vargas";
let #nombresCompletos = "Ricardo Vargas";
let 1bnombresCompletos = "Ricardo Vargas";*/

//Existen palabras reservadas en JS
//var
//let
//const, entre otras

/*---------------------------------------------------------------------- 
                            Operadores en JS
----------------------------------------------------------------------*/

//Operadores aritméticos
//Suma +
//Resta -
//Multiplicación * 
//Division /
//Modulo %
//Exponenciación **

let numero1 = 3;
let numero2 = 2;
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
console.log(numero1 % numero2);
console.log(numero1 ** numero2);

//Operadores de incremento y decremento

//Incremento ++, se utiliza para aumentar en 1
//Decremento --, se utiliza para disminuir en 1

let numero3 = 3, numero4 = 2;
let numero5 = numero3 + numero4;

//Incremento

//Pre-incremento (El operador ++ ocurre antes de la variable)
numero5 = ++numero3;
console.log(numero3);
console.log(numero5);

//Post-incremento (El operador ++ ocurre después de la variable)
numero5 = numero4++;
console.log(numero4);
console.log(numero5);

//Decremento

//Pre-decremento (El operador ++ ocurre antes de la variable)
numero5 = --numero3;
console.log(numero3);
console.log(numero5);

//Post-decremento (El operador ++ ocurre después de la variable)
numero5 = numero4--;
console.log(numero4);
console.log(numero5);

//Precedencia de operadores
//Se ejecutan de izquierda a derecha o de derecha a izquierda, según sea el caso

let pre1 = 2, pre2 = 3, pre3 = 4, pre4 = 5;

let pre5 = (pre1 + pre2) * pre3;
console.log(pre5);

let pre6 = pre3 * (pre1 + pre2);
console.log(pre6);

let pre7 = pre1 + pre2 * pre3;
console.log(pre7);

let pre8 = (pre1 * pre3) + pre2 * pre4 / (pre1 + pre2);
console.log(pre8);

//Operadores de asignación

//Asignación =
//Suma +=
//Resta -==
//Multiplicación *=
//División /=
//Modulo %=
//Exponente **=

let operador1 = 3, operador2 = 2;
operador1 += operador2; //operador1 = operador1 + operador2
console.log(operador1);

operador1 -= operador2; //operador1 = operador1 - operador2
console.log(operador1);

//Operadores de comparación

//Igual == o ===,
//El == se utiliza para comparar si dos variables son iguales (no estricto)
//El === se utiliza para comparar si dos variables son iguales y del mismo tipo (si es estricto)
//Distinto !=
//Mayor que >
//Menor que <
//Mayor o igual que >=
//Menor o igual que <=

let operador3 = 3, operador4 = "3";
console.log(typeof operador3);

let operador10 = operador3 == operador4;
console.log(operador10);

let operador11 = operador3 === operador4;
console.log(operador11);

if(operador3 == operador4) {
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

//Determinar si un numero es para o impar

let numeroPI = 12;

if(numeroPI % 2 == 0){
    console.log("Es par")
}else{
    console.log("Es impar")
}

//Determinar si una persona es mayor de edad

let edadP = 6

if(edadP >= 18){
    console.log("Es mayor de edad")
}else{
    console.log("Es menor de dad")
}

//De un conjunto de valores [12 ,14, 14, 16,...] de 10 valores, determinar cuántos son pares y cuantos son impares

let arrayN = [9, 3, 1, 9, 4, 6, 8, 4, 3, 7];

let pares = 0;
let impares = 0;

for (let i = 0; i < arrayN.length; i++) {
    if (arrayN[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Números impares:", pares);
console.log("Números impares:", impares);

//Operadores lógicos

//AND &&
//OR ||
//NOT !

let s = 12;

let valMin = 12; valMax = 20;

if(s >= valMin && s <= valMax){
    console.log("El valor está dentro del rango");
}else{
    console.log("El valor no está dentro del rango");
}

if(s >= valMin || s <= valMax){
    console.log("El valor está dentro del rango")
}else{
    console.log("El valor no está dentro del rango");
}

//Operadores ternarios

let resultado = (s >= valMin && s <= valMax) ? "El valor está dentro del rango" : "El valor no está dentro del rango";
console.log(resultado);

/*---------------------------------------------------------------------- 
                        Conversión de tipos
----------------------------------------------------------------------*/

let miNumero = "20";
console.log(typeof miNumero);

let miNumero2 = Number(miNumero);
console.log(typeof miNumero2);
console.log(miNumero2);

let miNumero3 = parseInt(miNumero);
console.log(typeof miNumero3);
console.log(miNumero3);

//parseInt() convierte un string a un entero (sin decimales)
//Number convierte un valor en un número (puede ser entero o flotante)

console.log(parseInt("42px")); //Solo la parte numérica del String se convierte en entero
console.log(parseInt(3.1415)); //Convierte solo la parte entera
console.log(parseInt("abc")); //No existe un valor numérico para la conversión

console.log(Number("42px")); //No se puede convertir toda la cadena
console.log(Number(3.1415)); //Convierte el número en flotante
console.log(Number("abc")); //No hay ningún número en la cadena

console.log(Number(true)); //true se convierte en 1
console.log(Number(false)); //false se convierte en 0
console.log(Number(null)); //null se convierte en 0
console.log(Number(undefined)); //undefined se convierte en NaN
console.log(parseFloat("z4.558"))

if(isNaN(miNumero2)){
    console.log("No es un número");
}else{
    console.log("Es un número");
}

console.log(isNaN(miNumero2));
console.log(miNumero2);

if(undefined == miNumero2){
    console.log("No es un número");
}else{
    console.log("Es un número");
}
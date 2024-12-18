/*---------------------------------------------------------------------- 
                                ARREGLOS
----------------------------------------------------------------------*/

//Declaración

const arr = new Array(10);
const arr1 = [];
console.log (arr1);

const numeros = [1, 2, 3, 4, 5];
let colores = ["Rojo", "Verde", "Azul"];

//Ejercicio

let videoJuegos = ["Mario 3", "Megaman", "Zelda"];
console.log(videoJuegos[0]);

let arregloCosas = [
    true, //Booleanos
    123, //Numéricos
    'Fernando', //Strings
    1 + 2, //Operaciones
    function(){}, //Funciones
    ()=>{}, //Asignaciones de funciones
    ['S', 'Películas'] //Array de arrays
];

console.log(arregloCosas);
console.log(arregloCosas[0]);

//Métodos

//Métodos funcionales
//map(), filter(), reduce()

//map() Transforma los elementos de un arreglo
let numerosMap = [1, 2, 3, 4, 5, 6];
let cuadrados = numerosMap.map(num => num * num);
console.log(cuadrados);

//filter() Filtra los elementos que cumplen algún tipo de condición
let numerosFilter = [1, 2, 3, 4, 5, 6];
let pares = numerosFilter.filter(num => num % 2 == 0);
console.log(pares);

//reduce() Reduce todos los elementos a un solo valor
let numerosReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let valMax = numerosReduce.reduce((acumular, num) => (num > acumular ? num : acumular), numerosReduce[0]);
console.log(valMax);

//Ventajas
//Son ideales para trabajar con transformación y manipulaciones complejas de datos dentro de un array
//Permiten un estilo de programación funcional más limpia y fácil de leer
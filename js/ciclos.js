/*---------------------------------------------------------------------- 
                                CICLOS
----------------------------------------------------------------------*/

//Ciclo for

const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquamana"];

console.warn("***** For tradicional *****");

for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

console.warn("***** For in *****");

for (let i in heroes) {
    console.warn (heroes[i]);
}

console.warn("***** For of *****");

for (let heroe of heroes) {
    console.warn(heroe);
}

//Uso de la declaración for

//Se usa el for tradicional cuando necesitamos el control total de los índices del array
//Se usa el for..in para el manejo de objetos, es decir para iterar un objeto lo los indices del array
//Se usa for..of para iterar los valores directamente de un iterable(arrays, cadenas de texto(string),
//map, set, nodelist)

//Uso del continue y break dentro de un ciclo for

/*for(let contador = 0; contador < 10; contador++) {
    if (contador % 2 != 0) {
        continue; //Ir a la siguiente iteración
    }
    console.log(contador);
}*/

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

for(let contador = 0; contador < carros.length; contador++) {
    if (contador == 2) {
        continue; //Ir a la siguiente iteración
    }
    console.log(carros[contador]);
}

//Uso de la declaración while

let i = 0;

while (carros[i]) {
    if (i == 1) {
        i++;
        continue;
    }
    console.warn(carros[i]);
    i++;
}
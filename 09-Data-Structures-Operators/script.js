'use strict';

// Datos necesarios para un ejercicio posterior
const weekdays = ['Lunes', 'Martes', 'Miercoles', 'Jueves',
  'Viernes', 'Sabado', 'Domingo']

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

// Datos necesarios para la primera parte de la sección
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //? ES6 objeto mejorados
  openingHours,

  /*
  order: function (entranteInicio, menuPrincipal) {
    return [this.starterMenu[entranteInicio], this.mainMenu[menuPrincipal]];
  },
 */
  order(entranteInicio, menuPrincipal) {
    return [this.starterMenu[entranteInicio], this.mainMenu[menuPrincipal]];
  },

  entregaPedidos({ entranteInicio, menuPrincipal, tiempo, direccion }) {
    console.log(`Orden recivida! ${this.starterMenu[entranteInicio]} y ${this.mainMenu[menuPrincipal]} sera entregado a ${direccion} a las ${tiempo} `);
  },

  //metodo para pedir solo pasata usando SPREAD{...pasta}
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Aquí está su deliciosa pasta con ${ing1}, ${ing2} y ${ing3}`);
  },

  ordenPizza: function (primerIngrediente, ...restoIngredientes) {
    console.log(primerIngrediente);
    console.log(restoIngredientes);
  },
};

//const airLine = "TAP Air Portugal";
//const plane = "A320";

function filterArray(numbers, value) {
  // Change code below this line
  let newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    // Change this line
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));


// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('Portugal'));

//Metodo de Corte
//console.log(airLine.slice(4));
//console.log(airLine.slice(4, 7));

//console.log(airLine.slice(0, airLine.indexOf(' ')));
//console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

//console.log(airLine.slice(-2));
//console.log(airLine.slice(1, -1));
/*

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('Tienes el asiento del medio (●\'◡\'●)');
  else console.log('Has tenido suerte ヾ(⌐■_■)ノ♪');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/


/* 
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// ejercicio 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// ejercicio 2
gameEvents.delete(64);

// ejercicio 3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
 */
/*

function filterArray(numbers, value) {
    // Change code below this line
    let pushArray = [];

    for (let i = 0; i < numbers.length; i++) {
       numbers[i];
    }
    return numbers;

}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
*/


/*

function createArrayOfNumbers(min, max) {
    const numbers = [];

    // Change code below this line
    for (let i = 0; i <= max; i++) {
        if ((i >= min) && (i <= max )) {
            numbers.push(i);
        }
    }
    return numbers;
    // Change code above this line
}
console.log(createArrayOfNumbers(3, 8));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
*/


/*

function findLongestWord(string) {
    const secuenciaArray = string.split(" ");
    let largo = string[0];

    for (let i = 0; i < secuenciaArray.length; i++) {
        if (largo.length < secuenciaArray[i].length) {
            largo = secuenciaArray[i];
        }
    }
    return largo;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
*/

/*
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risoto',
    'Pasta',
    'Pizza'
]);
console.log(ordersSet);
ordersSet.add('Pan de Ajo');
ordersSet.add('Pan de Ajo');

for (const order of ordersSet) {
    console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Maneger', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Maneger', 'Chef', 'Waiter']).size);

console.log(new Set('CristianRodriguezQuintero').size);*/
/*
//Nombre de propiedades, Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `Nosotros estamos abiertos en ${properties.length} dia: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES, VAORES de propiedad
const values = Object.values(openingHours);
console.log(values);

// Entire object, Objeto Completo
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`El ${key} abrimos a las ${open} y cerramos a las ${close}`);
}
*/


//? operador valor nulo

/*

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*
if (restaurant.openingHours && restaurant.
  openingHours.lunes) console.log
(restaurant.openingHours.Lunes.open);

console.log(restaurant.openingHours.Lunes?.open); //! Error sin encadenamiento opcional
 */
/*
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves',
'Viernes', 'Sabado', 'Domingo']

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `close`; //operador de fucion para que el cero corrija
  console.log(`El ${day}, abrimos en ${open}`);
}
 */
//encadenamiento con metodo
/*

console.log(restaurant.order?.(0, 1) ??
'El metodo no existe');
console.log(restaurant.orderRisotto?.(0, 1) ??
'El metodo no existe');

const users = [{name: 'Jonas', email: 'hello@jonas'}];

console.log(users[0]?.name ?? 'Usuario en el array');
*/

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//for (const item of menu) //console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
 */
/*
const rest1  = {
  name: 'Capri',
  numGuests: 0,
}

const rest2 = {
  name: 'La piazza',
  owner: 'Cristian Rodriguez',
}

OR opereador asisgancion
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

 rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

// AND assignment operator
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);
 */

/*
//! rest funcion ordenPizza
restaurant.ordenPizza('chicharron', 'queso', 'arina', 'carne', 'cebolla');

//! 1) Destructuracion
 */
/*
//?  SPREAD, porque en el lado DERECHO de =
const arr = [1, 2, ...[3, 4]];

//? REST, porque en el lado izauierdo de =
const [a, b, ...otros] = [1, 2, 3, 4, 5, 6];
console.log(a, b, otros);
 */

/*
//? Otro ejemplo
const [pizza, , risotto, ...otrosProductos] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otrosProductos);


//? rest en Objetos

const { sat, ...diasSemana } = restaurant.openingHours;
console.log(diasSemana);
*/

/*
//! 2) Rest Funciones
//? parametros de descanso

const add = function (...numeros) {
  console.log(numeros);
};

add(1, 2);
add(3, 4, 5, 6);
add(7, 8, 9, 10, 11, 12);

const add = function (...numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  console.log(suma);
};

add(1, 2);
add(3, 4, 5, 6);
add(7, 8, 9, 10, 11, 12);

const x = [25, 5, 7];
add(...x); //? llamamos a la funcion con spreed propagacion y la funcion en uso del rest (resto)
//?  toma los nuemeros de la variable x.
*/

/*
//quiero solicitar los ingredientes desde una ventana solicitud emergente
//Ejamplo del mundo real objeto -> spred
const ingredients = [
  prompt('¡hagamos pastas! ¿ingrediente 1?'),
  prompt('¡hagamos pastas! ¿ingrediente 2?'),
  prompt('¡hagamos pastas! ¿ingrediente 3?'),
];
*/
/*
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //sin spred solucion
restaurant.orderPasta(...ingredients); //con spred de forma mas simple solucion moderna ES6

//Objeto
const nuevoRestaurante = {
  añoFundacion: 1992,
  ...restaurant,
  fundador: 'Cristian',
};
console.log(nuevoRestaurante);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

restaurant.entregaPedidos({
  tiempo: '22:30',
  direccion: 'Via del Sole casa 21,',
  menuPrincipal: 2,
  entranteInicio: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Varables por defecto
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutando Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // sin parentesis que cierre el corchete del objeto ocurre error
console.log(a, b);

//objetos anidados
const {
  fri: { open: Q, close: L },
} = openingHours;
console.log(Q, L);
*/

// Tarea de desestructuracion

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [primero, , tercero] = restaurant.categories;
console.log(primero, tercero);

//cambuiar los resultado con destructuracion

[primero, tercero] = [tercero, primero];
console.log(primero, tercero);

const [entrante, menu] = restaurant.order(2, 0);
console.log(entrante, '-', menu);

const anidada = [1, 2, [3, 4]];
const [a1, , a3] = anidada;
console.log(a1, a3);

const anidada2 = [5, 6, [7, 8]];
const [b1, , [c1, c2]] = anidada2;
console.log(b1, c1, c2);

const arr = [7, 8, 9];
const nuvArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(nuvArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Frijoles'];
console.log(newMenu);

//copy array
const newMenuCopy = [...restaurant.mainMenu];

const menuCopy = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCopy);

//Iterables ejem cadena
const str = 'cristian';
const letters = [...str, 'r.', 'q.'];
console.log(letters);
 */

/*
Estructuras de datos, operadores modernos y cadenas
Desafio de codificacion 1
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Tarea 1
const [players1, players2] = game.players;
//console.log(players1, players2);

// Tarea 2
const [gk, ...fieldPlayers] = players1;
//console.log(gk);
//console.log(fieldPlayers);

// Tarea 3
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

//Tarea 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);

//Tarea 5
const {
  odds: { team1, x: draw, team2 },
} = game;
//console.log(team1, draw, team2);

//Tarea 6
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

printGoals(...game.scored);

//Tarea 7
team1 < team2 && console.log('Team 1 is more likely to win');
*/

//conding challenge #2
/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// Tarea 1
console.log("Tarea 1");
for (const [indice, scored] of game.scored.entries() ) {
  console.log(`Gol ${indice + 1}: ${scored}`);
}

// Tarea 2
console.log("Tarea 2");
const odd = Object.values(game.odds);
let iterador = 0;

for (const number of odd) {
  iterador += number;
}
const longitudOdds = odd.length;

iterador /= longitudOdds;
console.log(iterador);

// Tarea 3
console.log("Tarea 3");
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/




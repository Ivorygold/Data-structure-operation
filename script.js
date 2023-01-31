'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
//object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//when dealing with 3rd party data (API) we may be faced with the option of renaming our variable
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags); // IF COMPARED with the previous result we can see that its the same.

//when the data is not had coded especially when making an api calls
//I.E Default Values

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter); //the menu didn't throw an undefined bcus it was equated to an object bracket

//mutating variables while destructuring objects
let a = 111;
let b = 456;
const obj = { a: 12, b: 67, c: 15 };
({ a, b } = obj); //if we fail to wrap this with parenthesis, it will throw an error b/c JS will expect a code block
console.log(a, b);

//Nested object
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//SPREAD OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const fineArr = [5, 6, ...arr];
console.log(fineArr);

//join Arr
const Menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(Menu);

// for of loop
for (const item of Menu) console.log(item);

//IN OTHER TO MAKE EACH ITEM APPEAR AS AN ARRAY WITH THE INDEX
for (const [i, el] of Menu.entries()) {
  console.log(`${i + 1}:${el}`);
}

//set
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);
console.log(ordersSet);
//check if a string exist
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
//to add
ordersSet.add('garlic bread');
console.log(ordersSet);

//to delete
ordersSet.delete('risotto');
console.log(ordersSet);

//set can be looped over too
for (const order of ordersSet) {
  console.log(order); //this will print each values
}

//Map fundamental
const rest = new Map();
rest.set('name', 'Classico Italliano');
rest.set(1, 'firenze,Italy');
rest.set(2, 'lisbon,portugal');
console.log(rest.set(2, 'lisbon,portugal')); //this is chainable

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest.get(false));

//string comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);

console.log(email === normalizeEmail);

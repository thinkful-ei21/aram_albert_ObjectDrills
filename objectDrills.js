'use strict';

// //Object initializers and methods

// const loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function () {
//     return (this.water / this.flour) * 100;
//   },
// };

// console.log('Flour: ' + loaf.flour);
// console.log('Water: ' + loaf.water);
// console.log('Hydration: ' + loaf.hydration());

// Iterating over an object's properties
const someObject = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
};

for (let key in someObject) {
  console.log(key);
}
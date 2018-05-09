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
// const someObject = {
//   foo: 'foo',
//   bar: 'bar',
//   fum: 'fum',
//   quux: 'quux',
//   spam: 'spam'
// };

// for (let key in someObject) {
//   console.log(key);
// }

//Arrays in objects

// const hobbit = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(hobbit.meals[3]);

// Array of objects

const person1 = {
  name: 'Luke',
  jobTitle: 'Jedi',
};

const person2 = {
  name: 'Han',
  jobTitle: 'Smuggler',
};

const person3 = {
  name: 'Chewie',
  jobTitle: 'Carpet',
};

const starWarsCast = [person1, person2, person3];

starWarsCast.forEach((each) => {
  console.log(`The name is ${each.name}, and he is a ${each.jobTitle}`);
});

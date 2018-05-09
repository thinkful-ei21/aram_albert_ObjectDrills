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
// const person1 = {
//   name: 'Luke',
//   jobTitle: 'Jedi',
//   boss: 'Leia',
// };

// const person2 = {
//   name: 'Han',
//   jobTitle: 'Smuggler',
//   boss: 'Leia',
// };

// const person3 = {
//   name: 'Chewie',
//   jobTitle: 'Carpet',
//   boss: 'Leia',
// };

// const person4 = {
//   name: 'Leia',
//   jobTitle: 'Awkward love interest'
// };

// const starWarsCast = [person1, person2, person3, person4];

// starWarsCast.forEach((each) => {
//   if (each.boss) {
//     console.log(`${each.jobTitle} ${each.name} reports to ${each.boss}.`);
//   } else {
//     console.log(`${each.jobTitle} ${each.name} doesn't report to anybody.`);
//   }


// });


// Cracking the code

// const cipher = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 5,
// };

// const string = 'craft block argon meter bells brown croon droop';

// function decodeWords(code) {
// const cipher = {
//   two: 'a',
//   a: 1,
//   three: 'b',
//   b: 2,
//   four: 'c',
//   c: 3,
//   five: 'd',
//   d: 4,

// };

//   const cipher = {
//     a: {
//       letter: 'a',
//       index: 1,
//     },
//     b: {
//       letter: 'b',
//       index: 2,
//     },
//     c: {
//       letter: 'c',
//       index: 3,
//     },
//     d: {
//       letter: 'd',
//       index: 4,
//     },
//   };


//   let words = code.split(' ');
//   let answer = '';

//   for (let i = 0; i < words.length; i++) {
//     if (words[i][0] === cipher.a.letter) {
//       answer = answer.concat(words[i][cipher.a.index]);
//     } else if (words[i][0] === cipher.b.letter) {
//       answer = answer.concat(words[i][cipher.b.index]);
//     } else if (words[i][0] === cipher.c.letter) {
//       answer = answer.concat(words[i][cipher.c.index]);
//     } else if (words[i][0] === cipher.d.letter) {
//       answer = answer.concat(words[i][cipher.d.index]);
//     } else {
//       answer = answer.concat(' ');
//     }
//   }
//   return answer;
// }

// console.log(decodeWords(string));


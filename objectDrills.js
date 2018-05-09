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

// function createCharacter(name, nickname, race, origin, weapon, attack, defense) {
//   return {
//     name,
//     nickname,
//     race,
//     origin,
//     weapon,
//     attack,
//     defense,
//     describe: function () {
//       //return `${this.name} is a ${this.race} from ${this.origin}.`;
//       console.log(`${this.name} is a ${this.race} of ${this.origin} who uses ${weapon}.`);
//     },
//     evaluateFight: function (character) {
//       let damageDealt = this.attack - character.defense;
//       let damageTaken = character.attack - this.defense;
//       return `Your opponent takes ${damageDealt} damage and you receive ${damageTaken} damage`;
//     }
//   };
// }



// let characterSheet = [
//   createCharacter('Zargon', 'Zargy', 'Mini Elf', 'the Shelf', 'Blibber Blaster', 11, 2),
//   createCharacter('Iron Man', 'Stark', 'Man', 'Earth', 'Repulsor Blast', 5, 5),
//   createCharacter('Gandalf', 'Gandalf the Grey', 'Mair', 'Middle Earth', 'Staff', 10, 6),
//   createCharacter('Frodo Baggins', 'Mr. Frodo', 'Hobbit', 'The Shire', 'The Ring', 2, 1),
//   createCharacter('Samwise Gamgee', 'Sam', 'Hobbit', 'The Shire', 'Sting', 3, 2),
//   createCharacter('Aragorn', 'Strider', 'Man', 'Dunnedain', 'Sword', 6, 8),
//   createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow', 8, 5),
// ];

// console.log(characterSheet[0].describe());



// class Animal {
//   constructor(type, size) {
//     const validTypes = ['dog', 'cat'];
//     if (!type || !size) throw new TypeError('Missing required attributes');
//     if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

//     this.type = type;
//     this.size = size;
//   }

//   speak() {
//     return this.type === 'dog' ? 'Woof' : 'Meow';
//   }
// }

// const dog = new Animal('dog', 'large');
// console.log(dog);
// console.log(dog.speak());

// function createCharacter(name, nickname, race, origin, attack, defense) {
//   return {
//     name,
//     nickname,
//     race,
//     origin,
//     attack,
//     defense,
//     describe: function () {
//       return `${this.name} is a ${this.race} from ${this.origin}.`;
//     },
//     evaluateFight: function (character) {
//       let damageDealt = this.attack - character.defense;
//       let damageTaken = character.attack - this.defense;
//       return `Your opponent takes ${damageDealt} damage and you receive ${damageTaken} damage`;
//     }
//   };
// }

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {

}

console.log(findOne(HEROES, { id: 1 }));
// console.log(findOne(HEROES, { squad: 'Justice League' }));
// expected { id: 1, name: 'Captain America', squad: 'Avengers' }
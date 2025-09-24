'use strict';


// console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// /*
// In this hour, we'll explore:
// 1. How JavaScript executes code (execution contexts)
// 2. Where variables are accessible (scoping)
// 3. Why some code works before declaration (hoisting)
// 4. How to avoid common pitfalls (TDZ and strict mode)

// This foundation is crucial for understanding JavaScript's behavior!
// */

// // console.log('Starting program');

// // function alpha() {
// //     console.log('alpha:start');
// //     beta();
// //     console.log('alpha:end')
// // }

// // function beta() {
// //     console.log('beta');
// // }

// // alpha();

// const outer = 'global';

// function demoScope() {
//     const inner = 'function';
//     if(true) {
//         const blockConst = 'block';
//         var functionVar = 'var-function-scoped';

//         console.log(outer, inner, blockConst, functionVar);
//     }

//     console.log(outer,inner,functionVar);
// }

// demoScope();

// const name = 'GlobalName';

// function a() {
//     const name = 'FunctionName';

//     function b() {
//         console.log(name);
//     }

//     b();
// }

// a();

// console.log(varX);
// // console.log(letX);
// // console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDecl (2,3));
// console.log(addExpr (2,3));

// function addDecl(a, b) {
//     return a + b ;
// }

// const addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a+ b;


//  const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet(); // "Hello, I am Jonas"


// const anotherPerson = {
//     name: 'Sarah',
// }

//     anotherPerson.greet = person.greet;
//     anotherPerson.greet();

// // Detached function call
// const greetFunction = person.greet;
// greetFunction(); // "Hello, I am undefined" (in strict mode)


// // This breaks in event handlers
// const button = document.querySelector('button');
// button.addEventListener('click', person.greet); // `this` becomes the button element!

// // Fix: use arrow function wrapper
// button.addEventListener('click', () => person.greet());
// // Or bind the method
// button.addEventListener('click', person.greet.bind(person));



// const obj = {
//   name: 'Object',

//   regularMethod: function () {
//     console.log('Regular:', this.name); // this = obj
//   },

//   arrowMethod: () => {
//     console.log('Arrow:', this.name); // this = global (undefined in strict mode)
//   },
// };

// obj.regularMethod(); // "Regular: Object"
// obj.arrowMethod(); // "Arrow: undefined"


// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };

// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?

// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // Modern approach with arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`); // this works!
//     }, 1500);
//   },
// };

// timer.start(); // Uses self = this approach
// timer.startModern(); // Uses arrow function approach


// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// user.printHobbiesBad(); // Fails - this.name is undefined
// user.printHobbiesGood(); // Works - shows all hobbies

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length:', arguments.length);
//     console.log('First argument:', arguments[0]);
//   },

//   arrowFunction: () => {
//     // console.log(arguments); // ReferenceError: arguments is not defined
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// let age = 30; // primative
// let oldAge = age; //making independent copy

// age = 31;

// console.log('age:' , age);

// console.log('oldAge:', oldAge);

// // OBJECTS IN HEAP
// const me = { name: 'Jonas', age: 30 };
// const friend = me; // Shared reference

// friend.age = 27;

// console.log('me:', me); // { name: 'Jonas', age: 27 }
// console.log('Friend:', friend); // { name: 'Jonas', age: 27 }


function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson); // { name: 'Sarah', age: 30 } - Changed!
console.log('updated:', updatedPerson); // { name: 'Sarah', age: 30 } - Same object!
console.log('same object?:', originalPerson === updatedPerson); // true

const original = {
    name: 'Alice',
    age: 28,
    hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name:', original.name);

console.log('copy name:', shallowCopy.name);

// But nested objects are still shared
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies); // ['reading', 'coding', 'gaming'] - Changed!
console.log('copy hobbies:', shallowCopy.hobbies); // ['reading', 'coding', 'gaming'] - Same array!

// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);


const deepOriginal = {
    name: 'Charlie',
    age: 32,
    address: { city: 'Paris', country: 'France'},
    hobbies: ['travel', 'photography'],
};


const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('Cooking');

console.log('original address:', deepOriginal.address); // { city: 'Paris', country: 'France' }
console.log('copy address:', deepCopy.address); // { city: 'London', country: 'France' }
console.log('original hobbies:', deepOriginal.hobbies); // ['travel', 'photography']
console.log('copy hobbies:', deepCopy.hobbies); // ['travel', 'photography', 'cooking']
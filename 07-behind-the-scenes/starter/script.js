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

console.log(varX);
// console.log(letX);
// console.log(constX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl (2,3));
console.log(addExpr (2,3));

function addDecl(a, b) {
    return a + b ;
}

const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a+ b;

 
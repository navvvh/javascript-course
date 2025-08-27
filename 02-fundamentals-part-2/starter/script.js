console.log("Part 2: Functions ready!");

// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");


function logger() {
    console.log("My name is Hajj");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}
    oranges.`;
    return juice; 
}

console.log(fruitProcessor(5, 3));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


const calcAge = function (birthYear) {
    return 2025 - birthYear;
};

console.log(calcAge(2000));

console.log(calcAge(1991));


function introduce(firstName, lastName, age) {
    const intoroduction = `Hi i'm ${firstName} ${lastName} and I'm ${age} years old`;
    return intoroduction;
}
console.log(introduce("Hajj", "Macaraig", 20));

console.log(introduce("Hajj"));


function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge(birthYear);

  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}

console.log(yearsUntilRetirement(2005, "Hajj"));
console.log(yearsUntilRetirement(1950, "Mike"));

const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar); 
    console.log(localVar);
}

testScope();
console.log(globalVar);

// Coding Challenge #1
function calcAverage(score1, score2, score3) {
    const averageCalc = (score1 + score2 + score3) / 3;
    return averageCalc;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

    console.log(scoreDolphins, scoreKoalas);
    console.log(checkWinner(scoreDolphins, scoreKoalas));

 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);
 console.log(checkWinner(scoreDolphins, scoreKoalas));

function checkWinner(avgDolphine, avgKoalas) {
    if (avgDolphine >= 2 * avgKoalas) {
        return `Dolphines win (${avgDolphine} vs ${avgKoalas})`
    } else if (avgKoalas >= 2 * avgDolphine) {
        return `Koalas win (${avgDolphine} vs ${avgKoalas})`
    } else {
        return `No teams wins Dolphines ${avgDolphine}, koalas ${avgKoalas}`
        
    }
}







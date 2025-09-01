// console.log("Part 2: Functions ready!");

// // Functions - Declarations and Expressions
// console.log("=== FUNCTIONS ===");


// function logger() {
//     console.log("My name is Hajj");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges}
//     oranges.`;
//     return juice; 
// }

// console.log(fruitProcessor(5, 3));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// console.log(calcAge(2000));

// console.log(calcAge(1991));


// function introduce(firstName, lastName, age) {
//     const intoroduction = `Hi i'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return intoroduction;
// }
// console.log(introduce("Hajj", "Macaraig", 20));

// console.log(introduce("Hajj"));


// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);

//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} has already retired!`;
//   }
// }

// console.log(yearsUntilRetirement(2005, "Hajj"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar); 
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);

// // Coding Challenge #1
// function calcAverage(score1, score2, score3) {
//     const averageCalc = (score1 + score2 + score3) / 3;
//     return averageCalc;
// }

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

//     console.log(scoreDolphins, scoreKoalas);
//     console.log(checkWinner(scoreDolphins, scoreKoalas));

//  scoreDolphins = calcAverage(85, 54, 41);
//  scoreKoalas = calcAverage(23, 34, 27);
//  console.log(checkWinner(scoreDolphins, scoreKoalas));

// function checkWinner(avgDolphine, avgKoalas) {
//     if (avgDolphine >= 2 * avgKoalas) {
//         return `Dolphines win (${avgDolphine} vs ${avgKoalas})`
//     } else if (avgKoalas >= 2 * avgDolphine) {
//         return `Koalas win (${avgDolphine} vs ${avgKoalas})`
//     } else {
//         return `No teams wins Dolphines ${avgDolphine}, koalas ${avgKoalas}`
        
//     }
// }


// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = ["Rishaye", "Mar", "Gly", "RJ", "tope"];
// console.log(friends);

// const mixed = ["jonas", 27, true, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]); 
// console.log(friends[1]); 
// console.log(friends[2]); 


// console.log(friends.length);

// friends[1] = "jay";
// console.log(friends);

// const firstName = "Hajj";
// const Hajj = [firstName, "Macaraig", 2025 - 2000];

// console.log(Hajj);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };


// const ages = [calcAge(2000), calcAge(2005), calcAge(2019)];
// console.log(ages);


// // array elements method 

// const newLength = friends.push("steven");
// console.log(friends);
// console.log(newLength);

// const newLength2 = friends.push("John")
//     console.log(friends);

// friends.unshift("Maria");
// console.log(friends);


// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped2,)
// console.log(popped)
// console.log(friends)

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);


// console.log(friends.indexOf("Rishaye"));
// console.log(friends.indexOf("Rj"));

// console.log(friends.includes("Gly")); 
// console.log(friends.includes("Maria"));

// // array iteration for loops 

// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     console.log(friends[i]);
// }

// friends.forEach(
//     function(friend, index) {
//         console.log(`friend ${index}: ${friend}`)
//     }
// )

// friends.forEach((friend, index) => {
//   console.log(`Friend ${index + 1}: ${friend}`);
// });

// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     const element = grades2[i];

//     total += grades2[i];
// }

// const average = total / grades2.lenght;
// console.log(`Average grade: ${average.toFixed(2)}`);


// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);


const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades3) {
    let total = 0 
  // Your code here
  // Hint: Sum all grades, divide by length
  for (let i = 0; i < grades3.length; i++) {
    total += grades3[i]
  }
  console.log(`Sum of all grades: ${total}`)
  const average = total / grades3.length
  console.log(average)
}

// Function to find highest grade
function findHighestGrade(grades3) {
  // Your code here
  // Hint: Start with first grade, compare with each subsequent grade
  let highest = grades3[0];
  for (let i = 1; i < grades3.length; i++) {
    if (grades3[i] > highest) {
      highest = grades3[i];
    }
  }
  console.log(`Highest grade is: ${highest}`);
}

// Function to find lowest grade
function findLowestGrade(grades3) {
  // Your code here
  // Hint: Similar to highest, but use < comparison
  let loweest = grades3[0];
  for (let i = 1; i < grades3.length; i++) {
    if (loweest > grades3[i]){
      loweest = grades3[i];
    }
  }
  console.log(`Lowest grade is: ${loweest}`);
}
// Function to count passing students
function countPassing(grades3, passingGrade) {
  // Your code here
  // Hint: Counter pattern - increment when condition is met
  let passingCount = 0;
  for (let i = 0; i < grades3.length; i++) {
     if (grades3[i] >= passingGrade) {
      passingCount++;
     }    
  }
  console.log(`Number of passing students: ${passingCount} out of ${grades3.length}`);
}

// Generate complete report
const average1 = calculateAverage(grades3);
const highest = findHighestGrade(grades3);
const lowest = findLowestGrade(grades3);
const passing = countPassing(grades3, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);












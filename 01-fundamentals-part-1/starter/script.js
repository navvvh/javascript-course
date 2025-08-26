// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!

// // // let js = "amazing";
// // // console.log (40 + 30 - 45);
// // // console.log("GUMANA KA");

// // // console.log ("=== VARIABLES ===");

// // // let firstName = "Hajj"
// // // console.log (firstName)

// // // let age = 20;
// // // console.log(age);
// // // age = 50; 
// // // console.log(age);

// // // const birthYear = 2005;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = "programmer";
// // // job = "programmer"
// // // console.log(job);

// // // age = 22;

// // // let lastName = "Macaraig"
// // // console.log(lastName)

// // // console.log("=== DATATYPES ===")

// // // age = 24;
// // // console.log(age)

// // // console.log(typeof age);

// // // let userNAME = "Mark";
// // // console.log(userNAME);

// // // console.log(typeof userNAME);

// // // let javaScriptIsFun = true;
// // // console.log(javaScriptIsFun);
// // // console.log(typeof javaScriptIsFun)


// // // let year;
// // // console.log(year)
// // // console.log(typeof year);


// // // let dynamicVariable = 23;
// // // console.log(dynamicVariable, typeof dynamicVariable);

// // // dynamicVariable = true;
// // // console.log(dynamicVariable, typeof dynamicVaribale)


// // //////
// // // Basic Operators - Math Operators
// // console.log("=== MATH OPERATIONS ===")

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas *2, ageJonas)
// // console.log("Math operations:");
// // console.log("Addition", 10 + 5);
// // console.log("Subtraction", 10 - 5);
// // console.log("Multiplication", 10 * 5);
// // console.log("Division", 10 / 5);
// // console.log("Exponential", 10 ** 5);

// // // math with strings
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName)

// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old!")


// // console.log("=== ASSIGNMENT OPERATORS ===")

// // let x = 10 + 15;
// // console.log("x starts as:", x)

// // x += 10;
// // console.log("x starts as:", x)

// // x *= 4;
// // console.log("x starts as:", x)

// // x /= 2;
// // console.log("x starts as:", x)

// // x++
// // console.log("x starts as:", x)

// // x--
// // console.log("x starts as:", x)


// // ///////
// // console.log("=== COMPARISON OPERATOR ====")

// // console.log("Age comparison")
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageSarah < 30);

// // console.log("Number comparison")
// // console.log(25 > 20);
// // console.log(15 > 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);


// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge)

// // console.log("Complex Comparisson");
// // console.log(now - 1991 > now -2018)


// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z,y)

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);

// // // Test Data 1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const bmiMark = massMark / heightMark **2;
// // const bmiJohn = massJohn / heightJohn **2;

// // const markHigherBmi = bmiMark > bmiJohn;
// // console.log(markHigherBmi)

// // console.log("Mark BMI is ", bmiMark)
// // console.log("John BMI is ", bmiJohn)



// // Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew); 


// console.log(`i'm ${2037 - 1991} years old`)
// console.log(`Math works: ${2+3} equals five`)
// console.log(`Comparisons too: ${5 > 3}`)

// console.log(`Just a regular sting...`)

// const myName = "Hajj"; // Your name
// const myAge = 20; // Your age
// const myJob = "3rd year student"; // Your job/student status
// const currentYear = 2025;

// console.log(`Hi, I'm ${myName}, a ${myAge} years old, and I am a ${myJob}. The current year is ${currentYear}.`);

// let Pagkabuhay = currentYear - myAge
// console.log(`Born in ${Pagkabuhay}, 10*5 = ${10 * 5 }, Adult: ${myAge >= 18}`);


// /// Taking desisyons: if / else statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

const birthYear = 2005;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`You are born in the ${century}th century`);


/// Real-World Decision Making 

const score = 20

if (score >= 60) {
  console.log(`You passed with ${score} points! 🎉`);
  console.log("Congratulations!");
} else {
  const pointsNeeded = 60 - score;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
}

const testScore = 94; // Change this to test different scores

if (testScore >= 90) {
  console.log(`You passed with ${testScore} points! 🎉`);
  console.log("Exellent! Grade A");
} else if (testScore >= 80 &&  testScore <= 89) {
  console.log(`You passed with ${testScore} points! 🎉`);
  console.log("Good Job! Grade B");
} else if (testScore >= 70 && testScore <= 79) {
  console.log(`You passed with ${testScore} points! 🎉`);
  console.log("Not bad! Grade C");
} else if (testScore >= 60 && testScore <= 69) {
  console.log(`You passed with ${testScore} points! 🎉`);
  console.log("You passed! Grade D");
} else {
  const pointsNeeded = 60 - testScore;
  console.log(`You failed. Need ${pointsNeeded} more points.`);
  console.log("Failed! Grade F");
}


/// Exercise 2 

const userAge = 12; 

if (userAge >= 18) {
  console.log("Welcome! You can access all content.");
} else if (userAge >= 13 && userAge <= 17) {
  console.log("Welcome! Restricted content only.");
} else {
  console.log("Sorry, you are too young to access this content.");
}

///truthy and Falsy Values

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true (empty object)
console.log(Boolean("")); // false (empty string)

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0; // This is a valid height!
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); 
}


if (height !== undefined) {
  console.log("Height is defined");
}


const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

console.log("Value:", 0);
console.log("Boolean:", Boolean(0));
if (0) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} 


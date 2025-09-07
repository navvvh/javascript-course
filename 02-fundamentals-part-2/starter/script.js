// // // // // console.log("Part 2: Functions ready!");

// // // // // // Functions - Declarations and Expressions
// // // // // console.log("=== FUNCTIONS ===");


// // // // // function logger() {
// // // // //     console.log("My name is Hajj");
// // // // // }

// // // // // logger();
// // // // // logger();
// // // // // logger();

// // // // // function fruitProcessor(apples, oranges) {
// // // // //     console.log(apples, oranges);
// // // // //     const juice = `Juice with ${apples} apples and ${oranges}
// // // // //     oranges.`;
// // // // //     return juice; 
// // // // // }

// // // // // console.log(fruitProcessor(5, 3));

// // // // // const appleJuice = fruitProcessor(5, 0);
// // // // // console.log(appleJuice);

// // // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // // console.log(appleOrangeJuice);


// // // // // const calcAge = function (birthYear) {
// // // // //     return 2025 - birthYear;
// // // // // };

// // // // // console.log(calcAge(2000));

// // // // // console.log(calcAge(1991));


// // // // // function introduce(firstName, lastName, age) {
// // // // //     const intoroduction = `Hi i'm ${firstName} ${lastName} and I'm ${age} years old`;
// // // // //     return intoroduction;
// // // // // }
// // // // // console.log(introduce("Hajj", "Macaraig", 20));

// // // // // console.log(introduce("Hajj"));


// // // // // function yearsUntilRetirement(birthYear, firstName) {
// // // // //   const age = calcAge(birthYear);

// // // // //   const retirement = 65 - age;

// // // // //   if (retirement > 0) {
// // // // //     return `${firstName} retires in ${retirement} years`;
// // // // //   } else {
// // // // //     return `${firstName} has already retired!`;
// // // // //   }
// // // // // }

// // // // // console.log(yearsUntilRetirement(2005, "Hajj"));
// // // // // console.log(yearsUntilRetirement(1950, "Mike"));

// // // // // const globalVar = "I am global";

// // // // // function testScope() {
// // // // //     const localVar = "I am local";
// // // // //     console.log(globalVar); 
// // // // //     console.log(localVar);
// // // // // }

// // // // // testScope();
// // // // // console.log(globalVar);

// // // // // // Coding Challenge #1
// // // // // function calcAverage(score1, score2, score3) {
// // // // //     const averageCalc = (score1 + score2 + score3) / 3;
// // // // //     return averageCalc;
// // // // // }

// // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // let scoreKoalas = calcAverage(65, 54, 49);

// // // // //     console.log(scoreDolphins, scoreKoalas);
// // // // //     console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // //  scoreDolphins = calcAverage(85, 54, 41);
// // // // //  scoreKoalas = calcAverage(23, 34, 27);
// // // // //  console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // function checkWinner(avgDolphine, avgKoalas) {
// // // // //     if (avgDolphine >= 2 * avgKoalas) {
// // // // //         return `Dolphines win (${avgDolphine} vs ${avgKoalas})`
// // // // //     } else if (avgKoalas >= 2 * avgDolphine) {
// // // // //         return `Koalas win (${avgDolphine} vs ${avgKoalas})`
// // // // //     } else {
// // // // //         return `No teams wins Dolphines ${avgDolphine}, koalas ${avgKoalas}`
        
// // // // //     }
// // // // // }


// // // // // const student1Grade = 85;
// // // // // const student2Grade = 92;
// // // // // const student3Grade = 78;

// // // // // const grades = [85, 92, 78, 96, 88];
// // // // // console.log(grades);

// // // // // const friends = ["Rishaye", "Mar", "Gly", "RJ", "tope"];
// // // // // console.log(friends);

// // // // // const mixed = ["jonas", 27, true, friends];
// // // // // console.log(mixed);

// // // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // // console.log(years);

// // // // // console.log(friends[0]); 
// // // // // console.log(friends[1]); 
// // // // // console.log(friends[2]); 


// // // // // console.log(friends.length);

// // // // // friends[1] = "jay";
// // // // // console.log(friends);

// // // // // const firstName = "Hajj";
// // // // // const Hajj = [firstName, "Macaraig", 2025 - 2000];

// // // // // console.log(Hajj);

// // // // // const calcAge = function (birthYear) {
// // // // //     return 2025 - birthYear;
// // // // // };


// // // // // const ages = [calcAge(2000), calcAge(2005), calcAge(2019)];
// // // // // console.log(ages);


// // // // // // array elements method 

// // // // // const newLength = friends.push("steven");
// // // // // console.log(friends);
// // // // // console.log(newLength);

// // // // // const newLength2 = friends.push("John")
// // // // //     console.log(friends);

// // // // // friends.unshift("Maria");
// // // // // console.log(friends);


// // // // // const popped = friends.pop();
// // // // // const popped2 = friends.pop();
// // // // // console.log(popped2,)
// // // // // console.log(popped)
// // // // // console.log(friends)

// // // // // const shifted = friends.shift();
// // // // // console.log(shifted);
// // // // // console.log(friends);


// // // // // console.log(friends.indexOf("Rishaye"));
// // // // // console.log(friends.indexOf("Rj"));

// // // // // console.log(friends.includes("Gly")); 
// // // // // console.log(friends.includes("Maria"));

// // // // // // array iteration for loops 

// // // // // for (let i = 0; i < friends.length; i++) {
// // // // //     const element = friends[i];
// // // // //     console.log(friends[i]);
// // // // // }

// // // // // friends.forEach(
// // // // //     function(friend, index) {
// // // // //         console.log(`friend ${index}: ${friend}`)
// // // // //     }
// // // // // )

// // // // // friends.forEach((friend, index) => {
// // // // //   console.log(`Friend ${index + 1}: ${friend}`);
// // // // // });

// // // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // // let total = 0;

// // // // // for (let i = 0; i < grades2.length; i++) {
// // // // //     const element = grades2[i];

// // // // //     total += grades2[i];
// // // // // }

// // // // // const average = total / grades2.lenght;
// // // // // console.log(`Average grade: ${average.toFixed(2)}`);


// // // // // let passedCount = 0;
// // // // // grades.forEach((grade) => {
// // // // //   if (grade >= 70) passedCount++;
// // // // // });
// // // // // console.log(`${passedCount} out of ${grades.length} students passed`);


// // // // const grades3 = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // // Function to calculate average
// // // // function calculateAverage(grades3) {
// // // //     let total = 0 
// // // //   // Your code here
// // // //   // Hint: Sum all grades, divide by length
// // // //   for (let i = 0; i < grades3.length; i++) {
// // // //     total += grades3[i]
// // // //   }
// // // //   console.log(`Sum of all grades: ${total}`)
// // // //   const average = total / grades3.length
// // // //   console.log(average)
// // // // }

// // // // // Function to find highest grade
// // // // function findHighestGrade(grades3) {
// // // //   // Your code here
// // // //   // Hint: Start with first grade, compare with each subsequent grade
// // // //   let highest = grades3[0];
// // // //   for (let i = 1; i < grades3.length; i++) {
// // // //     if (grades3[i] > highest) {
// // // //       highest = grades3[i];
// // // //     }
// // // //   }
// // // //   console.log(`Highest grade is: ${highest}`);
// // // // }

// // // // // Function to find lowest grade
// // // // function findLowestGrade(grades3) {
// // // //   // Your code here
// // // //   // Hint: Similar to highest, but use < comparison
// // // //   let loweest = grades3[0];
// // // //   for (let i = 1; i < grades3.length; i++) {
// // // //     if (loweest > grades3[i]){
// // // //       loweest = grades3[i];
// // // //     }
// // // //   }
// // // //   console.log(`Lowest grade is: ${loweest}`);
// // // // }
// // // // // Function to count passing students
// // // // function countPassing(grades3, passingGrade) {
// // // //   // Your code here
// // // //   // Hint: Counter pattern - increment when condition is met
// // // //   let passingCount = 0;
// // // //   for (let i = 0; i < grades3.length; i++) {
// // // //      if (grades3[i] >= passingGrade) {
// // // //       passingCount++;
// // // //      }    
// // // //   }
// // // //   console.log(`Number of passing students: ${passingCount} out of ${grades3.length}`);
// // // // }

// // // // // Generate complete report
// // // // const average1 = calculateAverage(grades3);
// // // // const highest = findHighestGrade(grades3);
// // // // const lowest = findLowestGrade(grades3);
// // // // const passing = countPassing(grades3, 70);

// // // // console.log("=== GRADE REPORT ===");
// // // // console.log(`Average: ${average.toFixed(2)}`);
// // // // console.log(`Highest: ${highest}`);
// // // // console.log(`Lowest: ${lowest}`);
// // // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // // const minhoArray = [
// // //     "Hajj",
// // //     "Macaraig",
// // //     2025 - 2005,
// // //     "singer",
// // //     ["gly", "glu", "gle", "gli"],
// // // ];

// // // console.log(minhoArray[0]);
// // // console.log(minhoArray[1]);
// // // console.log(minhoArray[2]);

// // // // ^ the problem with this approach is it's difficult to remember because there are no descriptive names for the data

// // // ////////////////////////////////////
// // // // objects - creation with object literal syntax
// // // console.log("=== OBJECTS ===");

// // // // object literal syntax - curly braces create objects
// // // const minhoObject = {
// // //     firstName: "Vhan",
// // //     lastName: "Almario",
// // //     age: 2025 - 2005,
// // //     job: "singer",
// // //     friends: ["denese", "ronald", "jamaine", "aisle"],
// // // };
// // // console.log(minhoObject);

// // // // property access methods

// // // // dot notation - clean and readable and most common
// // // console.log(minhoObject.firstName);
// // // console.log(minhoObject.lastName);
// // // console.log(minhoObject.age);

// // // // bracket notation - uses strings and more flexible
// // // console.log(minhoObject["firstName"]);
// // // console.log(minhoObject["job"]);
// // // console.log(minhoObject["friends"]);

// // // // advantage of bracket notation - can compute property names
// // // const nameKey = "Name";
// // // console.log(minhoObject["first" + nameKey]);
// // // console.log(minhoObject["last" + nameKey]);

// // // // modifying existing properties
// // // minhoObject.job = "actor";
// // // minhoObject["age"] = 33;
// // // console.log(minhoObject);

// // // // adding new properties
// // // minhoObject.location = "Philippines";
// // // minhoObject["Facebook"] = "Hajima_123";
// // // minhoObject.hasDriverLicense = true;
// // // console.log(minhoObject);

// // // // when to use bracket notation
// // // const property = "job";
// // // console.log(minhoObject[property]);

// // // // 1. property name is a variable
// // // // 2. property name has spaces or special characters
// // // // 3. property name is computed/dynamic
// // // // otherwise, use dot notation

// // // // object vs arrays decision making

// // // // arrays
// // // const listOfYears = [1991, 1988, 2005, 2025];
// // // const shoppingList = ["takoyaki", "waffles", "milktea", "bread"];
// // // const testScores = [85, 92, 78, 96];

// // // // objects
// // // const person = {
// // //     name: "Lala",
// // //     age: 50,
// // //     occupation: "Nurse",
// // // }

// // // const car = {
// // //     brand: "Mitsubishi",
// // //     model: "Mirage",
// // //     year: 2020,
// // //     color: "silver"
// // // };

// // // // objects can contain arrays, arrays can contain objects
// // // const student = {
// // //     name: "John Doe",
// // //     grades: [85, 92, 78],
// // //     address: {
// // //         street: "123 Main St",
// // //         city: "Metropolis",
// // //     },
// // // };
// // // console.log(student.grades[0]);
// // // console.log(student.address.city);

// // // ////////////////////////////////////
// // // // object methods

// // // const jaja = {
// // //     firstName: "Jaja",
// // //     lastName: "Santiago",
// // //     birthYear: 1991,
// // //     job: "Volleyball Player",
// // //     friends: ["Alyssa", "Jia", "Jasmine", "Urdas"],
// // //     hasDriverLicense: true,

// // // // method - function iside object
// // //     calcAge: function(birthYear) {
// // //         return 2025 - birthYear;
// // //     },
// // // };

// // // console.log(jaja.calcAge(1991));

// // // // this keyword
// // // const jajaImproved = {
// // //     firstName: "Jaja",
// // //     lastName: "Santiago",
// // //     birthYear: 1991,
// // //     job: "Volleyball Player",
// // //     friends: ["Alyssa", "Jia", "Jasmine", "Urdas"],
// // //     hasDriverLicense: true,

// // //     calcAge: function() {
// // //         console.log(this);
// // //         return 2025 - this.birthYear;
// // //     },
// // // };

// // // console.log(jajaImproved.calcAge());

// // // // advanced storing calculated values in objects
// // // const jajaAdvanced = {
// // //     firstName: "Jaja",
// // //     lastName: "Santiago",
// // //     birthYear: 1991,
// // //     job: "Volleyball Player",
// // //     friends: ["Alyssa", "Jia", "Jasmine", "Urdas"],
// // //     hasDriverLicense: true,

// // //     calcAge: function() {
// // //         this.age = 2025 - this.birthYear;
// // //         return this.age;
// // //     },

// // //     getSummary: function() {
// // //         return `${this.firstName} is a ${this.calcAge()}-year old
// // //     ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
// // //     },
// // // };

// // // console.log(jajaAdvanced.calcAge());
// // // console.log(jajaAdvanced.age);
// // // console.log(jajaAdvanced.getSummary());

// // // // complex object with multiple methods (show real world pattern)
// // // const bankAccount = {
// // //     owner: "JAJA SANTIAGO",
// // //     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// // //     interestRate: 1.2,
// // //     pin: 1111,

// // //     // method to calculate balance
// // //     calcBalance: function() {
// // //     this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
// // //     return this.balance;
// // //     }, 

// // //     // method to add movement
// // //     deposit: function(amount) {
// // //     this.movements.push(amount);
// // //     this.calcBalance();
// // //     },

// // //     withdraw: function(amount) {
// // //     this.movements.push(-amount);
// // //     this.calcBalance();
// // //     },

// // //     // method for account summary
// // //     getStatement: function() {
// // //         return `${this.owner}'s account balance: ${this.calcBalance()}`;
// // //     },
// // // };

// // // console.log(bankAccount.getStatement());
// // // bankAccount.deposit(500);
// // // console.log(bankAccount.getStatement());

// // // ////////////////////////////////////
// // // // coding challenge #3 - user profile system

// // // const user = {
// // //     firstName: "Jaja",
// // //     lastName: "Santiago",
// // //     birthYear: 1991,
// // //     location: "Philippines",
// // //     interests: ["dogs", "singing", "photography"],
// // //     friends: [
// // //         {name: "Alyssa", status: "active"},
// // //         {name: "Jia", status: "inactive"},
// // //         {name: "Jasmine", status: "active"},
// // //         {name: "Urdas", status: "active"},
// // //     ],
// // //     isActive: true,

// // //     // calculate age method
// // //     calcAge: function () {
// // //         this.age = new Date().getFullYear() - this.birthYear;
// // //         return this.age;
// // //     },

// // //     // add friend method
// // //     addFriend: function (name, status = "active") {
// // //         this.friends.push({name, status: status});
// // //         return this.friends.length;
// // //     },

// // //     // get active friends count
// // //     getActiveFriends: function () {
// // //         const activeFriends = this.friends.filter(friend => friend.status === "active").length;
// // //         return activeFriends;
// // //     },

// // //     // toggle active status
// // //     toggleStatus: function () {
// // //         this.isActive = !this.isActive;
// // //         return this.isActive;
// // //     },

// // //     // generate profile summary
// // //     getSummary: function () {
// // //         const age = this.calcAge();
// // //         const activeFriends = this.getActiveFriends();
// // //         const status = this.isActive ? "active" : "away";

// // //         return `${this.firstName} ${this.lastName} (${age}) from ${this.location}
// // //         Currently ${status}
// // //         ${activeFriends} active friends out of ${this.friends.length} total
// // //         Interests: ${this.interests.join(", ")}
// // //         Japan | Volleyball | INF232`;

// // //     }
// // // };

// // // // test your user profile system
// // // console.log(user.getSummary());
// // // user.addFriend("Belen", "active");
// // // user.toggleStatus();
// // // console.log(`\nAfter updates:`);
// // // console.log(user.getSummary());


// // // // test your user profile system
// // // console.log(user.getSummary());
// // // user.addFriend("Celesse", "active");
// // // user.toggleStatus();
// // // console.log(`\nAfter updates:`);
// // // console.log(user.getSummary());


// // // querySelector - works with any CSS selector

// // const message = document.querySelector(".message");
// // console.log(message);


// // const button = document.querySelector("#btn");
// // console.log(button);


// // const heading = document.querySelector("h1");
// // console.log(heading);

// // console.log(message.textContent);
// // console.log(button.id)
// // console.log(heading.tagName);

// // // textContent - get and set text inside element
// // console.log(message.textContent);
// // message.textContent = "Hello World!";
// // console.log(message.textContent); 

// // // getElementById - only works with IDs
// // const buttonID = document.getElementById("btn");
// // console.log(button);
// // console.log(buttonID === button); // true

// // // querySelectorAll - returns a NodeList of all matching elements
// // const allParagraphs = document.querySelectorAll("p");
// // console.log(allParagraphs);
// // console.log(allParagraphs[0]);

// // modifying elements content

// const message = document.querySelector(".message");

// console.log(message.textContent); 
// message.textContent = "Hello From Javascript!";
// console.log(message.textContent);

// // innerHTML - get and set HTML inside element
// message.innerHTML = "<strong>Hello From Javascript!</strong>";
// console.log(message.innerHTML);

// // innertext - similar to textContent but more aware of styling
// console.log(message.innerText);
// message.innerText = "Hello from innerText!";
// console.log(message.innerText);

// // input elements values 

// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text"

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "blue";
// heading.style.fontSize = "3rem";

// const button = document.querySelector("#btn");
// button.style.borderRadius = "10px";
// button.style.padding = "10px 20px";
// button.style.fontSize = "1.5rem";


// // event listeners and handlers
// button.addEventListener("click", function() {
//     console.log("Button clicked!");
//     message.style.color = "green";
// });

// let clickCount = 0;
// button.addEventListener("click", function() {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 20}, 70%, 50%)`;
// });

// const display = document.querySelector(".message");

// input.addEventListener("input", function() {
//   const userText = input.value;
//   display.textContent = `You typed: ${userText}`;
//   display.style.fontSize = `${userText.length + 10}px`;
// });


// // keyboard events
// input.addEventListener("keydown", function(event) {
//     console.log(`Key pressed ${event.key}`);
//     if (event.key === "Enter") {
//         display.textContent = `You pressed Enter! Text was ${input.value}`;
//         input.value = ""; // clear input field
//     }
// // });


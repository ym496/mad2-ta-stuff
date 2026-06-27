// week1 programming assignments

// function calculateSimpleInterest(
//   principal,
//   dailyInterest,
//   startingDate,
//   endingDate
// ) {
//     const start = new Date(startingDate)
//     const end = new Date(endingDate)
//     if(start === "Invalid Date" || end === "Invalid Date" || isNaN(dailyInterest)  ) {
//         return -1
//     }

//     const days = (end.getTime()- start.getTime()) / (1000*60*60*24)

//     const interest = (Number(principal)*Number(dailyInterest)*days)/100


//     return Math.floor(interest);
// }


// // const res = calculateSimpleInterest(
// //   20000,
// //   1,
// //   "2020-12-27",
// //   "2021-08-27"
// // )
// // console.log(res)


// function calculateCompoundInterest(
//   principal,
//   dailyInterest,
//   startingDate,
//   endingDate
// ) {

// // Add your code here
//     const start = new Date(startingDate)
//     const end = new Date(endingDate)
//     if(start === "Invalid Date" || end === "Invalid Date" || isNaN(dailyInterest)  ) {
//         return -1
//     }

//     const days = (end.getTime()- start.getTime()) / (1000*60*60*24)

//     const interest = Number(principal) * (Math.pow((1 + Number(dailyInterest)/100), days) - 1)



// return Math.floor(interest);

// }

// // const res = calculateCompoundInterest(
// //   20000,
// //   1,
// //   "2020-12-27",
// //   "2021-08-27"
// // )
// // console.log(res)


// function extraAmountPercentage(
//   principal,
//   dailyInterest,
//   startingDate,
//   endingDate
// ) {

//     const simpleInterest = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate)
//     const compoundInterest = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate)

// // Add your code here
//     const extraAmount = compoundInterest - simpleInterest
//     const percentage = (extraAmount / simpleInterest) * 100

// return Math.floor(percentage);

// }

// const res = extraAmountPercentage(
//   20000,
//   1,
//   "2020-12-27",
//   "2021-08-27"
// )
// console.log(res)






// practice questions on this keyword

// const person = {
//   name: "Aditya",
//   greet() {
//     console.log(this.name);
//   }
// };

// person.greet();

// What is printed?

// const user = {
//   name: "John",
//   show() {
//     console.log(this);
//   }
// };

// user.show();

// What does this refer to?




// const car = {
//   brand: "Toyota",
//   display() {
//     console.log(this.brand);
//   }
// };

// const fn = car.display;
// fn();

// What is printed in:

// function test() {
//   console.log(this);
// }

// test();

// What does this refer to?



// const obj = {
//   name: "Laptop",
//   show: function () {
//     console.log(this.name);
//   }
// };

// obj.show();

// What is printed?



// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// person.greet();


// const person = {
//   name: "Alice",
//   greet() {
//     const inner = () => {
//       console.log(this.name);
//     };

//     inner();
//   }
// };

// person.greet();


// const person = {
//   name: "Alice",
//   greet() {
//     function inner() {
//       console.log(this);
//     }

//     inner();
//   }
// };

// person.greet();



// normal function - always look for the object that is calling the function and that will be the value of this
// arrow function - always look for the value of this in the outer scope and that will be the value of this






// setTimeout, setInterval, clearTimeout, clearInterval
// console.log("Program Started");

// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);

// console.log("Program Ended");


// console.log("Start");

// setTimeout(() => console.log("A"), 3000);

// setTimeout(() => console.log("B"), 1000);

// setTimeout(() => console.log("C"), 2000);

// console.log("End");


// Runs repeatedly.

// let count = 1;

// setInterval(() => {
//     console.log("Count:", count);
//     count++;
// }, 1000);



// clearInterval()
// let count = 1;

// let timer = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count > 5) {
//         clearInterval(timer);
//         console.log("Interval Stopped");
//     }
// }, 1000);


// clearTimeout()
// let timer = setTimeout(() => {
//     console.log("You should not see this");
// }, 3000);

// clearTimeout(timer);

// console.log("Timeout Cancelled");


// Cancel Timeout After Some Time
// let timer = setTimeout(() => {
//     console.log("Task Executed");
// }, 5000);

// setTimeout(() => {
//     clearTimeout(timer);
//     console.log("Task Cancelled");
// }, 2000);




// let progress = 0;

// let timer = setInterval(() => {
//     progress += 10;

//     console.log(`Loading... ${progress}%`);

//     if (progress === 100) {
//         clearInterval(timer);
//         console.log("Download Complete!");
//     }
// }, 500);










// Practice questions


// 1. Which of the following are iterable? (Select all that apply)

// A. Array

// B. String

// C. Set

// D. Number


// 2. Which method creates a new array by transforming every element?

// A. filter()

// B. map()

// C. find()

// D. forEach()


// 3. Which operator should be preferred for comparison?

// A. ==

// B. ===


// 4. Which data structure stores unique values?

// A. Array

// B. Map

// C. Set

// D. Object


// 5. Which object provides JSON methods?

// A. Object

// B. Data

// C. JSON

// D. JS



// 6.
// let a = [10, 20, 30];

// console.log(a[1]);

// Output?



// 7.
// let arr = [1, 2, 3];

// arr.push(4);

// console.log(arr.length);

// Output?


// 8.
// console.log(5 == "5");

// console.log(5 === "5");

// Output?


// 9.
// let x;

// console.log(x);

// x = null;

// console.log(x);

// Output?



// 10.
// let nums = [1,2,3];

// let result = nums.map(n => n * 2);

// console.log(result);

// Output?



// 11.
// let nums = [10,20,30];

// let result = nums.filter(n => n > 15);

// console.log(result);

// Output?


// 12.
// let nums = [5,10,15];

// let result = nums.find(n => n > 8);

// console.log(result);

// Output?



// 13. Predict the output.
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside");
// },0);

// console.log("End");



// 14. Predict the output.
// function first(){
//     console.log("First");
// }

// function second(){
//     console.log("Second");
// }

// first();

// second();


// const cat = {

//     key: "Whiskers",
//     age: this,
//     meow: () => {

//         console.log(this.key );
//     }

// }

// console.log(cat.age);
// cat.meow();

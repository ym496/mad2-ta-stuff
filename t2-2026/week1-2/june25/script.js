// destructuring


// const user = {
//   username: 'Alex99',
//   email: 'alex@email.com',
//   role: 'Admin'
// };

// The Old Way
// const username = user.username;
// const role = user.role;

//  The New Way
// const { username, role } = user;

// console.log(username); 
// console.log(role);



// const fruits = ['Apple', 'Banana', 'Cherry'];

// const first = fruits[0];
// const second = fruits[1];

//  The New Way (Destructuring): Clean and fast
// const [firstFruit, secondFruit] = fruits;

// console.log(firstFruit);
// console.log(secondFruit);



// const numbers = [10, 20, 30, 40];

// const [a, , c] = numbers;

// console.log(a);
// console.log(c);




// spread operator


// const numbers = [1, 2, 3];

// const newNumbers = [...numbers];

// console.log(newNumbers);


// const numbers = [1, 2, 3];

// const updated = [...numbers, 4, 5];

// console.log(updated);



// const student = {
//   name: "Vinay",
//   age: 22
// };

// const copy = { ...student };

// console.log(copy);



// const word = "Hello";

// const letters = [...word];

// console.log(letters);


// sort 


// const fruits = ["Banana", "Apple", "Mango", "Orange"];

// fruits.sort();

// console.log(fruits);



// const numbers = [10, 2, 30, 5];

// numbers.sort();

// console.log(numbers);


// const numbers = [10, 2, 30, 5];

// numbers.sort((a, b) => a - b);

// console.log(numbers);


// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 18 },
//   { name: "Charlie", age: 22 }
// ];

// students.sort((a, b) => a.age - b.age);

// console.log(students);



// const students = [
//   { name: "Charlie" },
//   { name: "Alice" },
//   { name: "Bob" }
// ];

// students.sort((a, b) => a.name.localeCompare(b.name));

// console.log(students);


// this keyword

// const obj = {
//   name: "John",
//   greet: function(){
//     console.log(this.name);
//   }
// };
// obj.greet()
// console.log(obj.name); 

// call, apply, bind

// const person1={
//   firstname: "John",
//   lastname: "Doe",
  
//   fullname: function(age, city) {
//     console.log(`${this.firstname} ${this.lastname} is ${age} years old and lives in ${city}.`);
//   }
// }

// const person2 ={
//   firstname: "Jane",
//   lastname: "Smith",
// }
// call
// person1.fullname.call(person2, 25, "New York"); 

// apply
// person1.fullname.apply(person2, [30, "Los Angeles"]);

// bind
// const boundFunction = person1.fullname.bind(person2, 35, "Chicago");
// boundFunction();



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




// Object methods

// const person = {
//   name: "John",
//   age: 30
// };

// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))





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


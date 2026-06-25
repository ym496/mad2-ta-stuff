// session link - https://drive.google.com/file/d/1DF-7p8JGTvHstlCbECSWxOF8PMQiggkU/view

// Data Types
// let age = 21;
// console.log(age);
// console.log(typeof age);

// let city = 'Mumbai';
// console.log(city);
// console.log(typeof city);

// let isLoggedIn = true;
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// let score;
// console.log(score);
// console.log(typeof score);

// let selectedCourse = null;
// console.log(selectedCourse);
// console.log(typeof selectedCourse);

// let student = {

//     name: "Rahul",

//     age: 20,

//     city: "Mumbai"

// };
// console.log(student);
// console.log(typeof student);

// let subjects = ["MAD2","DBMS","PDSA"];
// console.log(subjects);
// console.log(typeof subjects);
// console.log(Array.isArray(subjects));

// function greet(){

//     console.log("Hello");

// }

// console.log(typeof greet);



// let num = 10;

// let text = "Hello";

// let flag = true;

// let empty = null;

// let unknown;

// console.log(typeof num);

// console.log(typeof text);

// console.log(typeof flag);

// console.log(typeof empty);

// console.log(typeof unknown);

// console.log(typeof big);

// console.log(typeof sym);



// console.log(typeof 10);

// console.log(typeof "10");

// console.log(typeof true);

// console.log(typeof null);

// console.log(typeof undefined);

// console.log(typeof []);


// == vs ===

// console.log(5 == "5");
// console.log(5 === "5");


// console.log(true == 1);
// console.log(true === 1);

// console.log(false == 0);
// console.log(false === 0);

// console.log("" == 0);
// console.log("" === 0);

// console.log(null == undefined)
// console.log(null === undefined);

// console.log("1" == true);
// console.log("1" === true);

// console.log(5 == "5");
// console.log(false == 0)
// console.log(null == undefined);
// console.log("" == 0);
// console.log([] == false);


// Control Flow


// Functions
// Basic Function Declaration
// function greet(name) {

//     console.log("Hello " + name);

// }

// greet("Alice");

// greet("Bob");

// Function with Return Value
// function add(a, b) {

//     return a + b;

// }

// let result = add(10, 20);

// console.log(result);

// Function Expression
// const multiply = function(a, b) {

//     return a * b;

// }

// console.log(multiply(4, 5));

// Arrow Function
// const divide = (a, b) => {
//     return a / b;
// };

// console.log(divide(10, 2));

// const square = (num) => num * num;

// console.log(square(6));




// Arrays

// const fruits = [

//     "Apple",

//     "Banana",

//     "Orange"

// ];

// console.log(fruits);

// console.log(fruits[0]);

// console.log(fruits[1]);


// const fruits = [

//     "Apple",

//     "Banana"

// ];

// fruits.push("Orange");

// console.log(fruits);

// const subjects = [

//     "MAD2",

//     "DBMS",

//     "PDSA"

// ];

// for(const subject of subjects){

//     console.log(subject);

// }






// map/filter/find
// const marks = [

//     85,

//     92,

//     76,

//     98

// ];

// console.log(marks);

// map()

// const plusFive = marks.map(mark => mark + 5);

// filter()
// function isAbove90(mark) {

//     return mark > 90;
// }


// const above90 = marks.filter(mark => mark > 90);

// // find()

// const firstAbove90 = marks.find(mark => mark > 90);



// Objects
// const student = {

//     name: "Alice",

//     age: 20,

//     course: "MAD2"

// };

// console.log(student);

// console.log(student.name);

// console.log(student.age);

// const student = {

//     name: "Alice",

//     greet() {

//         console.log("Hello " + this.name);

//     }

// };

// student.greet();



// const student = {

//     name: "Alice",

//     age: 20,

//     city: "Mumbai"

// };

// const name = student.name;

// const age = student.age;

// console.log(name);

// console.log(age);





// Event Loop + Async

// console.log("Start");

// console.log("Middle");

// console.log("End");



// function greet() {

//     console.log("Inside greet");

// }

// function start() {

//     console.log("Start function");

//     greet();

//     console.log("End function");

// }

// start();


// console.log("1");

// setTimeout(() => {

//     console.log("2");

// }, 2000);

// console.log("3");


// console.log("A");

// setTimeout(() => {

//     console.log("B");

// },0);

// console.log("C");


// console.log("Start");

// setTimeout(() => {

//     console.log("Task 1");

// },1000);

// setTimeout(() => {

//     console.log("Task 2");

// },500);

// console.log("End");


// console.log("Start");

// for(let i=0;i<1000000000;i++){

// }

// console.log("End");


// console.log("Start");

// setTimeout(() => {

//     console.log("Timer finished");

// },0);

// for(let i=0;i<1000000000;i++){

// }

// console.log("Loop finished");


// function fetchData(callback){

//     setTimeout(() => {

//         callback("Data received");

//     },2000);

// }

// fetchData((data) => {

//     console.log(data);

// });

// console.log("Request sent");


// JSON
// const student = {

//     name: "Alice",

//     age: 20,

//     course: "MAD2"

// };

// // const jsonData = JSON.stringify(student);

// console.log(jsonData);

// console.log(typeof jsonData);




// const jsonData = '{"name":"Alice","age":20}';

// const student = JSON.parse(jsonData);

// console.log(student);

// console.log(student.name);

// console.log(typeof student);


// const response = '{"name":"Laptop","price":50000}';

// const product = JSON.parse(response);

// console.log(product.name);

// console.log(product.price);

// practice assignment


// Data Types
// == vs ===
// Control Flow
// Functions
// Arrays
// map/filter/find
// Objects
// Event Loop + Async
// JSON

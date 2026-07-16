



// let b = 10

// const d = 10

// var c = 9

// console.log(window.b)
// console.log(window.d)

// console.log(window.c)

// function abc()
// {
//     var a = 10
//     console.log(a)
// }

// let x = 10;

// function test() {
//     console.log(x);
//     let x = 20;
// }

// test();

// function addItemToCart(item) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(item);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }
// function getCartItems() {
//     return localStorage.getItem('cart') || [];
// }
// addItemToCart({ id: 1, name: 'Laptop' }.name);
// console.log(getCartItems());






// const app = new Vue({
//     el: '#app',
//     data: {
// 	    principal: 0,
//         annualInterestRate: 0,
//         duration: 0,
//         totalPayableAmount: 0
//     },

//     computed: {
//         simpleInterest() {
//             return (this.principal * this.annualInterestRate * this.duration) / 100
//         },
//     },
// })


// appData = [
// 	[2000,10,2],
// 	[3000,20,3],
// 	[5000,30,4],
// ]

// let handler = setInterval(() => {
// 	data = appData.pop()
// 	app.principal = data[0]
// 	app.annualInterestRate = data[1]
// 	app.duration = data[2]
// 	app.totalPayableAmount += app.simpleInterest
// }, 1000)


// const course = { courseName: 'Modern Application Development 2', courseCode: 'mad2' };

// const student = { __proto__: course, studentName: 'Rakesh', studentCity: 'Delhi' };

// const { courseName:vc } = student;

// const vc = student.courseName;

// console.log(vc);




// let x=2;
// function op(x) {
//      x*=3;
//      x+=4;
//      x-=1;
// }

// op(x);
// op(x);

// console.log(x);


// const MyComp = {
//     name: 'my-comp',
//     props: ['tech'],
//     template: `
//         <div class="container">
//             <slot name="complete">
//                 <h3>Learned DBMS</h3>
//             </slot>
//             <slot>
//                 Exploring Frontend
//             </slot>
//             <slot name="last"></slot>
//         </div>
//     `
// };

// const app = new Vue({
//     el: "#app",
//     components: {
//         MyComp
//     }
// });


// function createCounter (start) {
//     let count = start;
//     return function (step) {
//         if (typeof step === "number") { count += step; return count; }
//         return (function () {
//             let temp = count; //5
//             return function (reset = false) {
//                 if (reset) { count = start; } else { count++; }
//                 return temp + count;
//             };
//         })();
//     };
// }
// const counter = createCounter(3); // count = 3
// let a = counter(2); //5
// let d = counter()(true); // 8
// console.log(a + d)





// class Device {
//     constructor(type) {
//         this.type = type;
//     }

//     info() {
//         return `${this.type} device`;
//     }
// }

// class Mobile extends Device {
//     constructor(type, brand) {
//         super(type);
//         this.brand = brand;
//     }

//     info(brand = "type") {
//         return `${this.brand} is a ${this.type} device`;
//     }
// }

// let d = new Device("Electronic");
// let m = new Mobile("Electronic", "Samsung");

// let x = m.info();

// console.log(x);


// new Vue({
//     el: "#app",
//     data: {
//         message: "Start"
//     },
//     beforeMount() {
//         this.message = this.message + " A";
//         console.log("beforeMount message:", this.message);
//     },
//     mounted() {
//         const el = document.getElementById("text");
//         if (el) {
//             el.innerText = el.innerText + " DOM";
//             console.log("DOM text after manipulation:", el.innerText);
//         }
//     }
// });





















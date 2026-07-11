// Computed Properties in Vue

// new Vue({
//     el: "#app",

//     data: {
//         firstName: "Virat",
//         lastName: "Kohli"
//     },

//     methods: {
//         fullName() {
//             console.log("Method Executed");
//             return this.firstName + " " + this.lastName;
//         }
//     },

//     computed: {
//         fullName() {
//             console.log("Computed Executed");
//             return this.firstName + " " + this.lastName;
//         }
//     }
// });

// Computed Getter and Setter

// computed: {
//     fullName: {

//         get() {
//             return this.firstName + " " + this.lastName;
//         },

//         set(value) {

//             let names = value.split(" ");

//             this.firstName = names[0];
//             this.lastName = names[1];
//         }
//     }
// }

// new Vue({
//     el: "#app",

//     data: {
//         price: 100,
//         quantity: 2
//     },

//     computed: {
//         total() {
//             return this.price * this.quantity;
//         }
//     }
// });

// Filtering Data

// new Vue({
//     el: "#app",

//     data: {
//         search: "",
//         students: [
//             "Vinay",
//             "Rahul",
//             "Priya",
//             "Amit"
//         ]
//     },

//     computed: {
//         filteredStudents() {
//             return this.students.filter(student =>
//                 student.toLowerCase()
//                 .includes(this.search.toLowerCase())
//             );
//         }
//     }
// });

// Watchers in Vue

// new Vue({
//     el: "#app",

//     data: {
//         count: 0
//     },

//     watch: {
//         count(newValue, oldValue) {

//             console.log("Old:", oldValue);

//             console.log("New:", newValue);
//         }
//     }
// });


// Search Box Example

// new Vue({
//     el:"#app",

//     data:{
//         search:""
//     },

//     watch:{
//         search(newValue){

//             console.log(
//                 "Searching for:",
//                 newValue
//             );

//         }
//     }
// });

// Watching Multiple Properties

// watch:{

//     firstName(value){
//         console.log(
//             "First Name Changed",
//             value
//         );
//     },

//     lastName(value){
//         console.log(
//             "Last Name Changed",
//             value
//         );
//     }

// }

// Watching Nested Objects

// data:{
//     user:{
//         name:"Vinay",
//         age:21
//     }
// }


// Incorrect
// watch:{
//     user(newValue){

//     }
// }


// Deep Watcher

// watch:{
//     user:{
//         handler(newValue){

//             console.log(
//                 "User Changed"
//             );

//         },

//         deep:true
//     }
// }






// Components in Vue
// first component

// Vue.component("hello-world", {
//     template: `
//         <h2>Hello from Component</h2>
//     `
// });

// new Vue({
//     el: "#app",
//     data: {
//         studentName: "Rahul"
//     }
// });


// Vue.component("student-card", {

//     template: `
//         <div>
//             <h3>Vinay Maurya</h3>
//             <p>Age: 21</p>
//         </div>
//     `
// });

// First Props Example

// Vue.component("student-card", {

//     props: ["name"],

//     template: `
//         <h3>{{ name }}</h3>
//     `
// });


// data: {
//     student: {
//         name: "Vinay",
//         age: 21
//     }
// }

// In Vue 2 components, data must be a function
// Vue.component("counter-button", {

//     data() {
//         return {
//             count: 0
//         };
//     },

//     template: `
//         <button @click="count++">
//             {{ count }}
//         </button>
//     `
// });

// Why Must Data Be a Function?
// All component instances would share the same object



// Mini Project Demo

// Vue.component("student-card", {

//     props: ["name", "age"],

//     template: `
//         <div style="border:1px solid black;
//                     margin:10px;
//                     padding:10px;">
//             <h3>{{ name }}</h3>
//             <p>Age: {{ age }}</p>
//         </div>
//     `
// });

// new Vue({

//     el:"#app",

//     data:{
//         students:[
//             {
//                 id:1,
//                 name:"Vinay",
//                 age:21
//             },
//             {
//                 id:2,
//                 name:"Rahul",
//                 age:22
//             },
//             {
//                 id:3,
//                 name:"Priya",
//                 age:20
//             }
//         ]
//     }
// });

// Child Component
// Vue.component("child-component", {

//     template: `
//         <button @click="sendMessage">
//             Send Message
//         </button>
//     `,

//     methods: {
//         sendMessage() {

//             this.$emit("message-sent");

//         }
//     }
// });


// Parent Component
// new Vue({
//     el:"#app",

//     methods: {
//         handleMessage() {
//             alert("Message Received!");
//         }
//     }
// });


// Passing Data with $emit()

// Vue.component("child-component", {

//     template: `
//         <button @click="sendData">
//             Send Name
//         </button>
//     `,

//     methods: {

//         sendData() {

//             this.$emit(
//                 "student-selected",
//                 "Vinay Maurya"
//             );

//         }

//     }

// });


// new Vue({
//     el:"#app",
//     methods: {
//         showStudent(name) {
//             alert(name);
//         }
//     }
// });



// What is a Slot?
// A placeholder inside a component where the parent can inject content.

// Basic Slot Example
// Vue.component("my-card", {
//     template: `
//         <div style="border:1px solid black;padding:10px;">
//             <slot></slot>
//         </div>
//     `
// });

// Default Slot Content

// Vue.component("my-card", {
//     template: `
//         <div>
//             <slot>
//                 No Content Provided
//             </slot>
//         </div>
//     `
// });



// Named Slots
// Vue.component("my-card", {
//     template: `
//         <div class="card">

//             <header>
//                 <slot name="header"></slot>
//             </header>

//             <main>
//                 <slot></slot>
//             </main>

//             <footer>
//                 <slot name="footer"></slot>
//             </footer>

//         </div>
//     `
// });



// Vue 2 Lifecycle Hooks

// beforeCreate
//       ↓
// created
//       ↓
// beforeMount
//       ↓
// mounted
//       ↓
// beforeUpdate
//       ↓
// updated
//       ↓
// beforeDestroy
//       ↓
// destroyed



new Vue({

    el: "#app",

    data: {
        message: "Hello Vue"
    },

    methods: {
        changeMessage() {
            this.message = "Updated";
        }
    }

});

// 1. beforeCreate()

// Vue Instance Created
// ↓
// beforeCreate
// ↓
// Data NOT available yet

beforeCreate() {
    console.log("beforeCreate");
    console.log(this.message);
}

// 2. created()

// Data Initialized
// ↓
// created
// ↓
// DOM not rendered yet

created() {

    console.log("created");

    console.log(this.message);

}


// 3. beforeMount()

// Template Compiled
// ↓
// beforeMount
// ↓
// DOM not inserted yet

beforeMount() {
    console.log("beforeMount");
    document.getElementById("title")
}

// 4. mounted()

// Template Rendered
// ↓
// DOM Inserted
// ↓
// mounted

mounted() {

    console.log(
        console.log("mounted");
        document.getElementById("title")
    );

}

// 5. beforeUpdate()
// beforeUpdate
// ↓
// DOM Updates
// ↓
// updated

beforeUpdate() {

    console.log(
        "beforeUpdate"
    );

}

// 6. updated()

updated() {

    console.log(
        "updated"
    );

}

// 7. beforeDestroy()

mounted() {

    this.timer =
        setInterval(() => {

            console.log("Running");

        },1000);

}

beforeDestroy() {

    clearInterval(this.timer);
    

}

destroyed() {

    console.log(
        "Component Destroyed"
    );

}


// beforeupdate and updated example
new Vue({

    el:"#app",

    data:{
        count:0
    },

    beforeUpdate(){
        console.log(
            "beforeUpdate"
        );

        console.log(this.count);
    },

    updated(){
        console.log(
            "updated"
        );

        console.log(this.count);
    }

});


// | Hook          | Data Available?     | DOM Available? |
// | ------------- | ------------------- | -------------- |
// | beforeCreate  | ❌                   | ❌              |
// | created       | ✅                   | ❌              |
// | beforeMount   | ✅                   | ❌              |
// | mounted       | ✅                   | ✅              |
// | beforeUpdate  | ✅                   | ✅              |
// | updated       | ✅                   | ✅              |
// | beforeDestroy | ✅                   | ✅              |
// | destroyed     | ❌ Component Removed | ❌              */



// var my_var_1 = 10;

// {
//     const my_var = 20;
    
    
// }
// console.log(my_var);

// Functions

 

// function my_func(a) {
//     console.log(a);

// }

// my_func(10);

// const my_func_2 = function(a) {
//     console.log(a);
// } 

// my_func_2(20);

// const my_func_3 = (a) => {

// }

// const my_func_4 = (a) => console.log(a);

// Objects

let obj = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

obj.greet();

obj.greet = (name) => {
    console.log("Hello, my name is " + name);
}

obj.greet("Pradeep")





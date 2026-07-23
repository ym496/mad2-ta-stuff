// promises

// Why Do We Need Promises?

// Synchronous Code

console.log("Start");

console.log("Learning JavaScript");

console.log("End");



// Asynchronous Example
console.log("Start");

setTimeout(() => {
    console.log("Downloaded");
}, 3000);

console.log("End");

// JavaScript is single-threaded.


// Real-Life Problem
downloadUser(function(user){

    downloadPosts(user.id,function(posts){

        downloadComments(posts[0].id,function(comments){

        });

    });

});

// What is a Promise?

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// promise states => pending fullfilled rejected



// Creating a Promise

const promise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Downloaded Successfully");
    }else{
        reject("Download Failed");
    }

});


promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});



// Complete Example

function downloadFile(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve("File Downloaded");

        },3000);

    });

}

downloadFile()
.then(result=>{
    console.log(result);
});


// Error Example

function login(){

    return new Promise((resolve,reject)=>{

        let passwordCorrect=false;

        if(passwordCorrect){
            resolve("Login Successful");
        }
        else{
            reject("Wrong Password");
        }

    });

}

login()
.then(result=>console.log(result))
.catch(error=>console.log(error));

// finally()

login()
.then(result=>console.log(result))
.catch(error=>console.log(error))
.finally(()=>{
    console.log("Request Finished");
});


// Promise Chaining

function step1(){

    return Promise.resolve("Step 1");

}

function step2(previous){

    console.log(previous);

    return Promise.resolve("Step 2");

}

step1()
.then(step2)
.then(console.log);


// Promise Methods

Promise.resolve("Hello")
.then(console.log);

Promise.reject("Error")
.catch(console.log);


Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
])
.then(console.log);


Promise.race([
    new Promise(resolve=>setTimeout(()=>resolve("A"),3000)),
    new Promise(resolve=>setTimeout(()=>resolve("B"),1000))
])
.then(console.log);


Promise.any([
    Promise.reject(),
    Promise.resolve("Success"),
    Promise.resolve("Another")
])
.then(console.log);



Promise.allSettled([
    Promise.resolve("Done"),
    Promise.reject("Error")
])
.then(console.log);


// all => if one reject all will reject 
// allsettle => always return response of all promises even if reject 
// race => first promise will settle which will get settled first will return 
// any => first promise will resolve which will get resolved first will return



fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));



// async await

p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("promise1 resolved")
    },5000);
})


p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("promise2 resolved")
    }, 3000);
})


p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("promise3 resolved")
    }, 3000);
})

// function fun1(){
//     p2.then((data)=>console.log(data))


//     console.log("after promise")
// }

// fun1()

async function fun(){
    console.log("start")
    let b = await p1;
    console.log(b);
    console.log("hello")
    

    let a = await p2;
    console.log(a);
}

fun()


// async function

async function myFunction(){
    return "Hello";
}

myFunction()
.then(console.log);


// example 2

async function getData(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    console.log(data);

}

getData();





// fetch

// Basic Fetch

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
});


// Converting Response to JSON


fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data);
});


// Display First User

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    console.log(users[0].name);
});

// Display All Users

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {

    users.forEach(user => {
        console.log(user.name);
    });

});


// Error Handling

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => {
    console.log("Something went wrong");
    console.log(error);
});


// POST Request

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "JavaScript",
        body: "Learning Fetch API",
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log(data));


// PUT Request

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Updated Title"
    })
})
.then(response => response.json())
.then(console.log);

// DELETE Request

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE"
})
.then(response => {
    console.log(response.status);
});

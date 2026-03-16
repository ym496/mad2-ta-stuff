# Promise

## Introduction Example

```javascript

console.log("1. Script starts");

const myPromise = new Promise((resolve, reject) => {

    console.log("2. Inside the Promise executor (This runs synchronously!)");

    let success = true;

    if (success) {

        resolve("Promise Data"); 

        console.log("This line might be skipped or behave unexpectedly depending on context based on MAD 2 rules.");

    } else {

        reject("Error Data");

    }

});

myPromise.then((data) => {
    console.log("4. Promise Resolved with:", data);
}).catch((error) => {

    console.log("Promise Rejected with:", error);
});

console.log("3. Script ends (Notice how this prints BEFORE the .then() block!)");
```

---

## Question 1

```javascript
const myPromise = new Promise((resolve, reject) => {
    reject("Failed!");
});

myPromise.then(
    (data) => console.log("Success:", data),
    (err) => console.log("Caught:", err)
);
```

---

## Question 2

```javascript
console.log("1. Starting app");

const p1 = new Promise((resolve, reject) => {
    console.log("2. Inside promise executor");
    
    for (let i = 0; i < 3; i++) {
        console.log("3. Loop iteration:", i);
        if (i === 1) {
            resolve("Resolved at 1");
            console.log("4. Will this print?"); 
        }
    }
    console.log("5. End of executor"); 
});

p1.then(val => {
    console.log("6. Promise result:", val);
});

console.log("7. Ending app");
```

---

## Question 3

```javascript
console.log("A. Initialization");

const p2 = new Promise((resolve, reject) => {
    console.log("B. Processing data");
    reject("Failed in step 1");
    console.log("C. This line is here to trick you"); 
});

p2.then((data) => {
    console.log("D. Success:", data);
}).catch((err) => {
    console.log("E. Error caught:", err);
    return new Promise((res, rej) => res("Recovered data"));
}).then((data) => {
    console.log("F. After recovery:", data);
});

console.log("G. Done with synchronous script");
```

---

## Question 4

```javascript
console.log("Start");

const p3 = new Promise((resolve, reject) => {
    console.log("Setting up timer");
    
    setTimeout(() => {
        console.log("Timer finished");
        resolve("Timer Data");
        console.log("After resolve inside timer callback"); 
    }, 0);
    
    console.log("Timer setup complete");
});

p3.then(res => {
    console.log("Received:", res);
});

console.log("End");
```

---

## Question 5

```javascript
console.log("1. Script Start");

const p = new Promise((resolve, reject) => {
    console.log("2. Inside Outer Promise");
    resolve("Initial Data");
    console.log("3. After Outer Resolve"); 
});

p.then((data) => {
    console.log("4. First .then() received:", data);
    
    return new Promise((resolve, reject) => {
        console.log("5. Inside Inner Promise");
        reject("Inner Failure");
        console.log("6. After Inner Reject");
    });
})
.then((data) => {
    console.log("7. Second .then() received:", data);
})
.catch((err) => {
    console.log("8. Catch block caught:", err);
    return "Recovered State";
})
.finally(() => {
    console.log("9. Finally block executed");
})
.then((data) => {
    console.log("10. Final .then() received:", data);
});

console.log("11. End of Main Script");
```

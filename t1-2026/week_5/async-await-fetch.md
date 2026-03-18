# async/await and fetch

## Example 1

```javascript
console.log("1. Main thread starts");

async function loadUserData() {
    console.log("2. Inside async function");
    
    let p = new Promise((resolve, reject) => {
        console.log("3. Inside Promise executor");
        resolve("User Data Loaded");
        console.log("4. This line will trick you."); 
    });
    
    console.log("5. Promise created, waiting for it...");
    let result = await p; 
    console.log("6. Await finished with:", result);
}

loadUserData();
console.log("7. Main thread ends");
````

---

## Example 2

```javascript
console.log("A. Initiating Fetch");

fetch('https://httpstat.us/404') 
    .then(response => {
        console.log("B. Inside .then() block!");
        console.log("C. Response OK status is:", response.ok);
    })
    .catch(error => {
        console.log("D. Inside .catch() block! Error:", error);
    });

console.log("E. Moving on with script");
```

---

## Example 3

```javascript
console.log("Start");

async function calculateValue(isValid) {
    if (!isValid) {
        throw new Error("Invalid Input");
        console.log("Will I run?");
    }
    return 42;
}

// Scenario 1
calculateValue(true).then(val => console.log("Success 1:", val));

// Scenario 2
calculateValue(false)
    .then(val => console.log("Success 2:", val))
    .catch(err => console.log("Caught:", err.message));

console.log("End");
```

---

## Example 4

### Old Way (Using Promises)

```javascript
function getUserData() {
    console.log("1. Requesting data...");
    fetch('/api/user')
        .then(response => {
            if (!response.ok) throw new Error("HTTP Error");
            return response.json();
        })
        .then(data => {
            console.log("2. User data parsed:", data.name);
            return fetch(`/api/posts/${data.id}`);
        })
        .then(postsResponse => postsResponse.json())
        .then(posts => {
            console.log("3. User posts loaded:", posts.length);
        })
        .catch(error => {
            console.log("Error caught:", error);
        });
    console.log("4. Function end (prints before data!)");
}
```

### Modern Way (Async/Await)

```javascript
async function getUserData() {
    try {
        console.log("1. Requesting data...");
        const response = await fetch('/api/user'); 
        if (!response.ok) throw new Error("HTTP Error");
        
        const data = await response.json();
        console.log("2. User data parsed:", data.name);
        
        const postsResponse = await fetch(`/api/posts/${data.id}`);
        const posts = await postsResponse.json();
        console.log("3. User posts loaded:", posts.length);
        
    } catch (error) {
        console.log("Error caught:", error);
    }
}
```

---

## Example 5

```javascript
console.log("A");

async function doWork() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

doWork();
console.log("D");
```

---

## Example 6

```javascript
async function process() {
    console.log("1");
    let p = new Promise((resolve, reject) => {
        console.log("2");
        resolve("Done");
        console.log("3"); 
    });
    
    let res = await p;
    console.log("4. Result:", res);
}

process();
```

---

## Example 7

```javascript
async function fetchNumber() {
    return 99;
}

function display() {
    const num = fetchNumber();
    console.log("Number is:", num);
}

display();
```

---

## Example 8

```javascript
async function riskyTask() {
    console.log("Start task");
    throw new Error("Boom");
    return "Success";
}

riskyTask()
    .then(val => console.log(val))
    .catch(err => console.log("Caught:", err.message));
```

---

## Example 9

```javascript
async function checkServer() {
    try {
        let response = await fetch('/api/crash'); 
        console.log("Fetch Finished!");
    } catch (err) {
        console.log("Fetch Failed!");
    }
}
checkServer();
```

---

## Example 10

```javascript
async function timerTest() {
    console.log("1");
    setTimeout(() => console.log("2"), 0);
    console.log("3");
}
timerTest();
console.log("4");
```

---

## Example 11

```javascript
async function pause(ms, id) {
    await new Promise(res => setTimeout(res, ms));
    console.log("Finished", id);
}

async function runSequential() {
    console.log("Start");
    await pause(1000, "A");
    await pause(1000, "B");
    console.log("End");
}
```

---

## Example 12

```javascript
async function fetchData() {
    try {
        const p = new Promise((resolve, reject) => reject("Bad Data"));
        return p; 
    } catch (e) {
        console.log("Caught inside function");
    }
}

fetchData().catch(e => console.log("Caught outside function"));
```

---

## Example 13

```javascript
async function stepOne() {
    return "Hello";
}

async function stepTwo() {
    const word = await stepOne();
    return word + " World";
}

console.log(stepTwo());
```

---

## Example 14

```javascript
console.log("A");

async function boss() {
    console.log("B");
    
    await new Promise((resolve) => {
        console.log("C");
        setTimeout(() => {
            console.log("D");
            resolve();
            console.log("E");
        }, 0);
    });
    
    console.log("F");
}

boss();
console.log("G");
```

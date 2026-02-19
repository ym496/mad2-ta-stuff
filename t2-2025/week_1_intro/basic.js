let heading = document.querySelector('#heading');
console.log(heading);

heading.innerText = "Not " + heading.innerText;

const counter = document.getElementById('counter');

let count = setInterval(()=> {
    counter.innerText = parseInt(counter.innerText) + 1;

}, 1000)

// clearInterval(count);

let timeout = setTimeout(() => {
    clearInterval(count);
    counter.textContent = "Timeout just happended";
    
}, 5000);

const btn = document.getElementById('btn');




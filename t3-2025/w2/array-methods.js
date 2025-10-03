const numbers = [1, 2, 3, 4];

const doubledArrow = numbers.map(num => num * 2);
const fil = numbers.filter(num => num > 2);

const sum = numbers.reduce((accumulator, currentItem) => {
  return accumulator + currentItem;
}, 0);

// console.log(doubledArrow);
// console.log(fil);
// console.log(sum);


const users = [
  { id: 1, name: 'Alice', role: 'user' },
  { id: 2, name: 'Bob', role: 'ad' },
  { id: 3, name: 'Charlie', role: 'admin' }
];

const firstAdmin = users.find(user => user.role === 'admin');

// console.log(firstAdmin);



const num = [1, 30, 4, 21, 100000];
// num.sort();
// console.log(num);

// num.sort((a, b) => a - b);
num.sort((a, b) => b - a);

console.log(num);






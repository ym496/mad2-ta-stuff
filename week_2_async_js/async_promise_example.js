// A function that returns a Promise
function resolveAfter2Seconds(value) {
    return new Promise((r, rej) => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  }
  
  // An async function using await
  async function example() {
    console.log('Waiting for promise...');
    const result = await resolveAfter2Seconds('Promise resolved!');
    console.log(result); // Output after 2 seconds: Promise resolved!
  }
  
  example();
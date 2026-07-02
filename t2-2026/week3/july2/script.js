class Product {

  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

}

class CustomerProducts {

  constructor(customer_id, product, count) {
    this.customer_id = customer_id;
    this.product = product;
    this.count = count;
  }

}

class Cafe {

  constructor(products, balance) {
    this.products = products;
    this.balance = balance;
    //Maintain the customer history
    this.customer_products = [];
  }


  buyProduct(customer_id, product, count){

    // Add your code here
    const productinstance = this.products.find(p => p.name === product.name);

    if(!productinstance || productinstance.stock < count) {
      return false;
    }

    productinstance.stock -= count;
    this.balance += productinstance.price * count;

    const customerProduct = new CustomerProducts(customer_id, product, count);
    this.customer_products.push(customerProduct);

    return true;
  }


  returnProduct(customer_id, product, count){

    // Add your code here
    const customerProduct = this.customer_products.find(cp => cp.customer_id === customer_id && cp.product.name === product.name);

    if(!customerProduct || customerProduct.count < count) {
      return false;
    }

    customerProduct.count -= count;
    this.balance -= customerProduct.product.price * count;

    const returnProduct = this.products.find(p => p.name === product.name);
    returnProduct.stock += count;


    if(customerProduct.count === 0) {
      const index = this.customer_products.indexOf(customerProduct);

      this.customer_products.splice(index, 1);
    }

    return true;

  }


  getCurrentBalance(){

    // get the current balance at cafe
    return this.balance;
  }

}



const coffee = new Product("Coffee", 50, 20);

const tea = new Product("Tea", 30, 10);
const chai = new Product("Chai", 25, 15);



const cafe = new Cafe([ tea,coffee, chai], 1000);
// const cafe1 = new Cafe([coffee, tea], 1500);

console.log(cafe)
// console.log(cafe1)



console.log(cafe.buyProduct(1, coffee, 15));
console.log(cafe.returnProduct(1, coffee, 15));




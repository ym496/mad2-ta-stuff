
// 'this' keyword in arrow and normal functions

const obj1 = {
    name: "MAD2",
    class:"fourth",
    printNormal: function() { 
        // this = obj1
        console.log(this.class);
        }
};

const obj2 = {
    name: "MAD2",
    printArrow: () => { 
        // this = global this
        console.log(this.name); 
        
    }
};

const obj5 = {
    name: "Outer",
    outerMethod: function() {
        // this = obj5
        const inner = () => { 
           // this = obj5 
            console.log(this.name); 
        }
        inner(); 
    }
};

// obj5.outerMethod();

// this.name = 'Mad1'
// // console.log(this)
// obj2.printArrow();
// // obj1.printNormal();


const obj4 = {
    name: "Outer",
    outerMethod: function() {
        // this = obj4
        function inner() { 
            // this = global object
            console.log(this.name); 
        }
        inner(); 
    }
}; 
// obj4.outerMethod();

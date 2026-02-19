// this.hero = "Batman"; 
// global.hero = "Batman";

const comic = {
    hero: "Superman",
    
    getHeroNormal: function() {
        return this.hero;
    },
    
    getHeroArrow: () => {
        // this = {}
        return this.hero;
    },
    
    nested: {
        hero: "Flash",
        getNestedNormal: function() {
            // this = nested
            return this.hero;
        },
        getNestedArrow: () => {
            // this = {}
            return this.hero;
        }
    },
    
    complexChallenge: function() {
        // this = comic
        const innerArrow = () => {
            // this = comic
            return this.hero;
        };
        
        function innerNormal() {
            // this = global object called global
            // console.log(global)
            return this.hero;
        }
        
        console.log("C: ", innerArrow());
        console.log("D: ", innerNormal());
    }
};

// console.log("A: ", comic.getHeroNormal());
// console.log("B: ", comic.getHeroArrow());
// comic.complexChallenge();

// const stoleContext = comic.nested.getNestedNormal();
// console.log(stoleContext);

// const stoleContext = comic.nested.getNestedArrow();
// console.log(stoleContext);



// function test() {
    
//     console.log(this)
// }

// test()

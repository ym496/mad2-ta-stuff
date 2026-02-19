const normal_func = function (a) {
    console.log(a);
    
}

const normal_func_2 = function (a) {
    console.log(a);
    
}



const async_func = async function (a) {
    setTimeout(() => {
        console.log("Done after awaiting", a)
    }, 2000)

    
    
}

const async_func_2 = async function (a) {
    console.log(a);
    
}
async function execute() {
await async_func(10)
async_func_2(20)

async_func(30);

async_func_2(40)

}

execute()


// old function syntax
function printName(name){
    return name
}

console.log(printName("Vishal"))

// new function syntax
const printName1 = (name) =>{
    return name
}

console.log(printName1("Vishal"))

// modification
const printName2 = name => name // one liner

console.log(printName2("Vishal"))
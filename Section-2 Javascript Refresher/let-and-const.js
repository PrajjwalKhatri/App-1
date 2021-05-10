// const -> limited scope (inside the {})
const name1 = "Vishal" // can't be reassigned or re-initialised
console.log(name1)

// let -> limited scope (inside the {})
let name2 = "Vishal"
name2 = "Kamra" // can be reassigned but can't be re-initialised
console.log(name2)

// var -> global scope 
var name3 = "Vishal" // can be reassigned and re-initialised
console.log(name3)
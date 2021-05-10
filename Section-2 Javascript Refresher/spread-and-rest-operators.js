const numbers = [1,2,3,4]
const newNumbers = [...numbers, 5,6,7,8] // spread operator

console.log(newNumbers)

// same for objects

const Data = {
    name: "Vishal"
}

const newData = {
    ...Data,
    age: 21
}

console.log(newData)

// rest operator

const printNumbers = (...args) => {
    args.map(el => console.log(el))
}

printNumbers(1,2,3,4)
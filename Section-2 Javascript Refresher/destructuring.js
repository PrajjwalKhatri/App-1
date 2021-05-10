// destructuring arrays

const numbers = [1,2,3,4,5]
const [num1, num2] = numbers;
console.log(num1, num2)
const [, , num3, num4] = numbers
console.log(num3, num4)

// destructuring objects

const person = {
    name: "Vishal",
    age: 21,
    degree: "B.tech"
}

const {name, age, degree} = person
console.log(name, age, degree)
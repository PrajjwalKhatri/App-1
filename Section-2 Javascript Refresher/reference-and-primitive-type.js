const num = [1,2,3,4]
const num1 = num
num.push(5)
console.log(num1)

const num2 = [...num]
num.push(6)
console.log(num2)

// same for objects

const person = {name: "vishal"}

const person1 = {...person}
person.age = 21
console.log(person1)
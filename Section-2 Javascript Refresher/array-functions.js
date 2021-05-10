var num = [1,2,3,4]

// map
var doubleNumArray = num.map(el => {
    return el*2
})

console.log(doubleNumArray)

// find
const num1 = num.find(el => el === 1)

console.log(num1)

// concat
console.log(num.concat(doubleNumArray))

// filter
var filteredContent = num.filter(el => el < 4)

console.log(filteredContent)

// splice
num.splice(0,0,0)
console.log(num)

// slice
console.log(num.slice(2,4,1))
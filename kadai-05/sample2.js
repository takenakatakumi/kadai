const obj1 = { a: 10, b: 20 }
console.log(obj1.a)
const obj2 = obj1
console.log(obj2.a)

obj1.a = 999
console.log(obj1.a)
console.log(obj2.a)


const animals =['dog', 'cat', 'penguin', 'lion']

console.log(animals.length)
animals.push('fish', 'bird')
console.log(animals)

const last = animals.pop()
console.log(last)
console.log(animals)

const removed = animals.splice(2, 2, 'frog')
console.log(animals)
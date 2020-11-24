const cat = {
    name: 'tama',
    age: 2,
    sex: 'male',
    isStray: false,
    meow: () => {console.log('Meow!') }
}

console.log(cat)
cat.meow()
console.log(JSON.stringify(cat))
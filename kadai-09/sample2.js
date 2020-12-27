const fs = require('fs')
fs.writeFileSync('./kadai-09/hello.txt', 'こんにちは！')
const file = fs.readFileSync('./kadai-09/hello.txt')
console.log(file)
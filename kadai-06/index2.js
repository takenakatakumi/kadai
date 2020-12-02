try {
    const str1 = "abc"
    JSON.parse(str1)
} catch (error) {
   console.log(error) 
}

const str3 = '"abc"'
const str6 = '{ a: 123 }'
JSON.parse(str6)
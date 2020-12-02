console.log(1)
try {
    JSON.parse('{a : 1')
} catch (error) {
    console.log(error)
    console.log("異常なJSONです")
}
console.log(2)
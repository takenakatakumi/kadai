const profile = {
    name: 'takenaka',
    age: 20,
    hobby: 'travel',
    major: 'history'
}
const keys = Object.keys(profile)
console.log(keys)
for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index];
    console.log('私の'　+ key + 'は' + profile[key] + 'です。')
}
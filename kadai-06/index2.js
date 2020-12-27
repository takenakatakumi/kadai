try {
    const str1 = "abc"
    JSON.parse(str1)
} catch (error) {
  //正しいJSONではないのでパースできない
  //文字列だけのJSONは、ダブルクオテーションで囲む必要がある
}

try {
    const str2 = "'abc'"
    JSON.parse(str2)
} catch (error) {
//文字列はダブルクオテーションで囲まなければならないため
}

const str3 = '"abc"'
JSON.parse(str3)

try {
    const str4 = '{"a": undefined}' 
    JSON.parse(str4)
} catch (error) {
    //undefinedは使えないから
}

const str5 = '{"a": 123}'
JSON.parse(str5)

try {
    const str6 = '{ a: 123 }'
    JSON.parse(str6)
} catch (error) {
    //文字列はダブルクオテーションで囲む必要があるから
}

try {
    const str7 = '{"func":() => console.log("Hi!") }'
    JSON.parse(str6)
} catch (error) {
    //関数は使用できないから
}

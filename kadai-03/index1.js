//生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 0) {
  console.log('あなたは怒りっぽい性格です')  
} else if (day % 3 === 1) {
    console.log('あなたは浮き沈みの激しい性格です')
} else if (day === 8) {
    console.log('あなたはとても優しく慈悲深い性格です')
} else {
    console.log('あなたは責任感の強い性格です')
}
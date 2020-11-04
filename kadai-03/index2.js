const max = parseInt(orocess.argv[2])

//3の倍数に特別なメッセージを出力する
for(let n=1; n <= max;n = n + 1){
    if(n% 3===0){
        console.log('表示させたいメッセージ')
    }else{
        console.log(n)
    }
}
// 3秒まってHelloと表示し、２秒まってByeと表示する
setTimeout(() => { 
    console.log('hello')
    setTimeout(() => { 
        console.log('bye')
    }, 2000);
}, 3000);


//　setTimeoutを二つ連続で書くだけでは、すぐ次の行を実行してしまう
// 2秒後に Bye その1秒後にHelloと表示するようになるので、要注意
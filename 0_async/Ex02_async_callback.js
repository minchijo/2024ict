//Ex02_async_callback.js

function order(coffee, callback){
    console.log(`${coffee}주문`)
    //console.log(coffe + "주문")과 같은 코드

    setTimeout( () => {
        callback(coffee); //콜백이지만 실은 픽업함수 부르는 것
    }, 2000);

}

function pickup(result){
    console.log(`${result} 준비완료`)
}

order("cafe latte", pickup);

console.log("다른 작업 진행 중")
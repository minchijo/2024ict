//Ex03_promise

/*
Promise 객체가 생성되면 대기 상태가 된다
    -resolve()함수가 실행되면 이행으로 변경
    -reject()함수가 실행되면 거절로 변경
*/

const likeCoffee = true;

const coffee = () => {    //인자
    return new Promise( (resolve,reject) => {
        if(likeCoffee) resolve("order coffee");
        else reject("do not order coffee");
    }); //대기 상태로 빠짐
}

function order(message){
    console.log(message);

    return new Promise( (resolve,reject)=>{
        setTimeout(()=> {
            console.log("preparing coffee")
        }, 2000);
    });
}
                                //변수명
coffee().then( (result) => order(result));

console.log("다른 작업");
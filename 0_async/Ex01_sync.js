//동기방식

function orderA(){
    console.log("A 작업")
}

function orderB(){
    console.log("B작업")
    //만일 시간 소요가 길어진다면? 해당 함수 처리가 끝날 때까지 C함수가 불리지 않음
}

function orderC(){
    console.log("C작업")
}

orderA();
orderB();
orderC();
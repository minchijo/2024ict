//App1.js 


const express=require("express");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("서버 실행") //vscode 터미널
});

//요청(request)가 들어오면 지정된 함수 호출(=콜백함수)

app.get("/", (req, res)=>{ // "/"인자 없는 기본값 요청이 들어왔을 때 함수호출 "req, res"는 인자 이름 짓기 나름
    res.send("노드 헬로우 성공");
}); 

app.get("/func1", (req, res)=>{  //브라우저에서 포트번호 뒤에 "/func1" 추가해서 실행해보기
    res.send("hello -1");
})

app.get("/func2", (req, res)=>{
    res.send("hello -2");
})

//콜백함수 다음에 미들웨어 함수 추가
app.get("/func3", (req, res, next)=>{
    console.log("첫번째 호출");
    next();
}, function(req, res){
    res.send("두번째 호출"); //브라우저에 func3을 입력하면 터미널에 "첫번째호출"이라고 뜸
})

//콜백함수를 배열로 라우터 처리
const method1 = function(req, res, next){
    console.log("첫번째 호출 11111");
    next();
}
const method2 = function(req, res){
    res.send("두번째 호출");
}

app.get("/func4", [method1, method2]);

//[기존 포폴 어디에서 노드를 사용했는지 확인]
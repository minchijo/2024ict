//App2.js

const express=require("express");
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("서버 실행") 
});

//요청(request)가 들어오면 지정된 함수 호출(=콜백함수)
//app.get("/", (req, res)=>{ 
//    res.send("노드 헬로우 성공");
//}); 

//위 패턴과 동일
app.route("/").get(function (req, res){
    res.send("노드 헬로우 성공 2222");
})

app.route("/member")
    .get(function (req, res){
        res.send("고객정보조회");
    })
    .post(function (req, res){
        res.send("입력");
    })
    .put(function (req, res){
        res.send("수정");
    })
    .delete(function (req, res){
        res.send("삭제");
    });
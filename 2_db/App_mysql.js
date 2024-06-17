// 2_db / App_mysl.js

const express = require("express"); //module
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("server's running~")
});

const mysql = require("./mysql"); //기본값 : index.js 실행

//emp
//[1]데이터 검색
app.get("/api/employee", async(req, res) => {
    const employees = await mysql.query("employeeList");
    console.log(employees);
    res.send(employees);
})

//[2]데이터 입력
app.use(
    express.json({limit : "50mb"})
); //제이슨으로 값을 받을 건데 리밋을 걸겠다

app.post("/api/employee/insert", async(req, res) => {
    console.log("입력");
    console.log(req.body);

    const result = await mysql.query("employeeInsert", req.body.param);
    res.send(result);
});

app.put("/api/employee/update", async(req, res)=> {
    console.log("수정");

    const result = await mysql.query("employeeUpdate", req.body.param);
    res.send(result);
});
                                //:id=>restful 방식 (간단한 경우에 사용)
app.delete("/api/employee/delete/:id", async(req, res)=> {
    console.log("삭제");

    const{ id } = req.params; //여기의 params는 정해져 있는 이름 , {} 이 표시는 여러개란뜻

    const result = await mysql.query("employeeDelete", id); //id : 삭제할 값 가져가기
    res.send(result);
});

//dept
//[1]데이터 검색
app.get("/api/dept", async(req, res) => {
    const depts = await mysql.query("deptList");
    console.log(depts);
    res.send(depts);
})
//[2]데이터 입력
app.post("/api/dept/insert", async(req, res) => {
    console.log("입력");
    console.log(req.body);

    const result = await mysql.query("deptInsert", req.body.param);
    res.send(result);
});

app.put("/api/dept/update", async(req, res)=> {
    console.log("수정");

    const result = await mysql.query("deptUpdate", req.body.param);
    res.send(result);
});
                                //:id=>restful 방식 (간단한 경우에 사용)
app.delete("/api/dept/delete/:id", async(req, res)=> {
    console.log("삭제");

    const{ id } = req.params; //여기의 params는 정해져 있는 이름 , {} 이 표시는 여러개란뜻

    const result = await mysql.query("deptDelete", id); //id : 삭제할 값 가져가기
    res.send(result);
});
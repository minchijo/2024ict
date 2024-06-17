const express = require("express");

const app = express();

app.listen(3000, ()=>{
    console.log("서버 구동 중 ...")
});

const mongodb = require("./3_mongodb");
mongodb.connect();

const Emp = require("./3_mongodb/schemas/emp");

//[0]전체 검색
app.get("/emp", async (req, res)=>{
    const employees = await Emp.find(); //몽구스와 연결됐다면 연결된 몽구스를 통해 find() 사용, 즉 내가 아니라 몽구스가 가지고 있는 것
    console.log(employees);
    res.send(employees);
});

//[1]입력
app.get("/empInsert", async (req, res) => {
    const emp1 = await Emp.create({
        empno : 1111,
        ename : "김광야",
        job : "개발",
        sal : 5000
    });
    console.log(emp1);

});

app.get("/empInsert2", async (req, res) => {
    const emp1 = await Emp.create([
        {
            empno : 1113,
            ename : "김엣파",
            job : "개발",
            sal : 4000
        },
        {
            empno : 1112,
            ename : "김엣셈",
            job : "개발",
            sal : 6000

        }
    ]);
    console.log(emp1);

});

//[2]검색
app.get("/empTest", async(req, res)=>{
    //전체 검색
    //const employees = await Emp.find({}); //인자 안 주면 전체검색

    //월급 5000 이상 검색
    //const employees = await Emp.find({sal : {$gte : 5000}});

    //월급 5000 이상이면서 성명이 김광야
    //const employees = await Emp.find({ 
    //    sal : {$gte : 5000},
    //    ename : "김광야"
    //});

    //이름에 "엣"이 포함된 !문서! 검색 
    //const employees = await Emp.find({ename : /엣/})
    const employees = await Emp.find({ename : /엣/}, "ename sal")//select 문장처럼 ename sal만 검색하기
    console.log(employees);
    res.send(employees);
});

//[3]수정
app.get("/empUpdate1", async (req, res)=> {
    const emp1 = await Emp.updateOne({empno : 1113},{job : "마케팅"});
    console.log(emp1);
});
app.get("/empUpdate2", async (req, res)=> {
    const emp1 = await Emp.updateMany({sal : {$gte : 5000}} , {job : "디자인"}); //조건,바꿀 것
    console.log(emp1);
});

//[4]삭제
app.get("/delete1", async (req, res)=> {
    const emp1 = await Emp.deleteOne({ename : "김엣파"}) //조건
    console.log(emp1);
});

app.get("/delete2", async (req, res)=> { 
    const emp1 = await Emp.deleteMany({sal : {$gt: 5000}}) //조건(sal 5000보다 큰 2명)
    console.log(emp1);
});

//[과제]dept CRUD 하기
const Dept = require("./3_mongodb/schemas/dept");
//[0]전체 검색
app.get("/dept", async (req, res)=>{
    const depts = await Dept.find(); //몽구스와 연결됐다면 연결된 몽구스를 통해 find() 사용, 즉 내가 아니라 몽구스가 가지고 있는 것
    console.log(depts);
    res.send(depts);
});

//[1]입력
app.get("/deptInsert", async (req, res) => {
    const dept1 = await Dept.create({
        deptno : 10,
        dname : "개발",
        location : "서울 마포구"
    });
    console.log(dept1);
});

app.get("/deptInsert2", async (req, res) => {
    const dept1 = await Dept.create([
        {
            deptno : 20,
            dname : "영업",
            location : "서울 서대문구"
        },
        {
            deptno : 30,
            dname : "유지보수",
            location : "경기도 김포시"
        },
        {
            deptno : 40,
            dname : "회계",
            location : "서울 강서구 "
        }
    ]);
    console.log(dept1);

});

//[2]검색
app.get("/deptTest", async(req, res)=>{
    //전체 검색
    const select_all_depts = await Dept.find({}); //인자 안 주면 전체검색
    console.log(select_all_depts);
    res.send(select_all_depts);
    //location에 서울 포함된 거(2개 나와야됨)
    //const loc_contain_seoul = await Dept.find({location : /서울/});
    //console.log(loc_contain_seoul);
    //res.send(loc_contain_seoul);
});

//[3]수정
app.get("/deptUpdate1", async (req, res)=> {
    const dept1 = await Dept.updateOne({deptno : 20},{dname : "인사"});//조건,바꿀 것
    console.log(dept1);
});

app.get("/deptUpdate2", async (req, res)=> { //지역이 서울인 부서들을 경기도 김포로 변경
    const dept1 = await Dept.updateMany({location : /서울/} , {location : "경기도 김포시"}); 
    console.log(dept1);
});


//[4]삭제
app.get("/deptDelete1", async (req, res)=> { //부서번호가 10보다 작거나 같은 거 삭제 
    const dept1 = await Dept.deleteOne({deptno : {$eq: 10}}) //조건
    console.log(dept1);
});

app.get("/deptDelete2", async (req, res)=> { //부서번호가 30과 같거나 작은 거
    const dept1 = await Dept.deleteMany({deptno : {$lte: 30}}) //조건
    console.log(dept1);
});


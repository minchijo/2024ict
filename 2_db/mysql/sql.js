//2_db // mysql / sql.js

module.exports = {

    //emp
    //[1]검색
    employeeList : `select * from emp`

    //[2]입력
    //실제입력=> insert into emp set empno = 9912, ename= "Hong", job = "IT"
    , employeeInsert : `insert into emp set ?`

    //[3]수정
    //실제수정=> update emp set ename="JOO", job ="SW" where empno=9912
    ,employeeUpdate : `update emp set ? where empno =?`

    //[4]삭제
    ,employeeDelete : `delete from emp where empno=?`

    //dept
    //[1]검색
    ,deptList : `select * from dept`
     //[2]입력
    //실제입력=> insert into dept set deptno = 60, dname= "Marketing", loc = "Taipei"
    ,deptInsert : `insert into dept set ?`
     //[3]수정
    //실제수정=> update dept set dname="기획", loc ="Hongkong" where deptno=60
    ,deptUpdate : `update dept set ? where deptno = ?`
     //[4]삭제
     ,deptDelete : `delete from dept where deptno = ?`

}
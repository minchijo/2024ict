//2_db // mysql / index.js

const mysql = require("mysql"); //패키지
const sql = require("./sql") 

//ConncectionPool 생성
const pool = mysql.createPool({
    host : "127.0.0.1",
    port : 3306,
    user : "scott",
    password : "tiger",
    database : "basic",
    connectionLimit : 10
})

//쿼리 실행 및 결과 반영하는 함수 만들기
const query = async (alias, value) => {
    return new Promise( (resolve, reject) => {
        pool.query(sql[alias], value, (error, results)=>{
            if(error){
                console.log("에러발생");
                reject(error);
            }else{
                resolve(results);
            }
        })
    });
}

module.exports = {query} //다른 파일에서도 쿼리 함수를 사용할 수 있게 
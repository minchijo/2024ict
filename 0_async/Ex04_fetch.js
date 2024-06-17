//Ex04_fetch.js

fetch("http://jsonplaceholder.typicode.com/users") // 응답받은 body데이터의 form을 직접 변환해야 하
.then(response => response.json() ) //response는 선생님이 정한 변수명, 문자열을 제이슨으로 변환
.then( users => console.log(users))

console.log("다른 작업")
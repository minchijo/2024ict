//Ex99_practice.js

async function init(){      //서버에 접속해서 값을 가져오는 동안 다른 작업 진행하는 연습
    const response = await fetch("http://dummyjson.com/quotes")
    const users = await response.json();
    const quotes = users.quotes;

    const ran = parseInt(Math.random() * 30)
    console.log(quotes[ran].quote)
}

init();
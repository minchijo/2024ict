//Ex05_async_await

//Ex04와 같은 코딩이다
async function init(){
    const response = await fetch("http://jsonplaceholder.typicode.com/users")
    const users = await response.json();
    console.log(users);
}

init();

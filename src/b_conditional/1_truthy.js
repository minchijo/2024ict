function MemberGreeting(props){
    return <h1>오늘도 반갑습니다</h1>
}

function GuestGreeting(props){
    return <h2>회원가입을 해주세요</h2>
}
function Greeting(props){
    //const isLoggedIn = true;
    //const isLoggedIn = false;
    //const isLoggedIn = 'false';
    //const isLoggedIn = '';
    //const isLoggedIn = 1;
    //const isLoggedIn = 0;
    //const isLoggedIn = -1; //0이 아닌 숫자는 참으로 취급
    //const isLoggedIn = undefined;
    //const isLoggedIn = null;
    //const isLoggedIn = NaN;
    //const isLoggedIn = [];
    const isLoggedIn = {}; //빈 객체

    if(isLoggedIn) return <MemberGreeting/>
    else return <GuestGreeting/>
}

function App(){
    return<Greeting/>
}

export default App;
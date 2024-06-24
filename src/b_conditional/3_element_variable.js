import { useState } from "react";

function LoginBtn(props){
    return <button onClick={props.onClick}>로그인</button>
}//이게 진짜 화면에 띄는 애

function LogoutBtn(props){
    return <button onClick={props.onClick}>로그아웃</button>
} //이게 진짜 화면에 띄는 애

function LoginControl(props){
    const[isLogged, setIsLogged]=useState(false);
    let button;
    if(isLogged)
        button =<LogoutBtn onClick={()=>{setIsLogged(false)}}/>
    else
        button=<LoginBtn onClick={()=>{setIsLogged(true)}}/>
    return button;
} {/* onClick={()=>{setIsLogged(true)}} 이걸 속성으로 봐서 data를 통해 넘겨줌 */}

function App(){
    return <LoginControl/>
}

export default App;
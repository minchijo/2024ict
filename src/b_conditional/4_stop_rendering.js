//4_stop_rendering

import { useState } from "react";

/*
컴포넌트 렌더링 막기
return null
*/

function Banner(props){
    if(!props.show) return null;
    return <div>광고</div>
}

function MainPage(props){

    const[show, setShow]=useState(false);
    const toggleHandler =()=>{
        setShow(!show);
    }
    return(
        <div>
            <Banner show={show}/>
            <hr/>
            <button onClick={()=>{setShow(!show)}}>{show?"감추기":"보이기"}</button>
            <br/>
            <button onClick={toggleHandler}>{show?"감추기2":"보이기2"}</button>
        </div>
    );
}

function App(){
    return <MainPage/>
}

export default App;
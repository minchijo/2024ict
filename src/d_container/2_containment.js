import "./temp.css";
import { useState } from "react";
/*
App
 |
WelcomDialog
 |
TextPart
 |
FancyBorder

*/ 
function FancyBorder(props){
    return(
        <div className="FancyBorder">
            {props.children                                                                                                                                                                              }
        </div>
    );
}

function TextPart(props){
    return(
        <FancyBorder>
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {/**********************/}
            {props.children}
        </FancyBorder>
    );
}

function WelcomDialog(props){
    return(
        <TextPart title="환영합니다" message="당신은 행운아!"/>
    );
}

function MorningDialog(props){
    const [nickname, SetNickname] = useState("");

    const handlenickname = (event)=> {
        SetNickname(event.target.value);
    } 

    return(
        <TextPart title="좋은 아침" message="오늘도 출근한 당신은 행운아!">
            <input type="text" value={nickname}
                    onChange={handlenickname}/>
            <button onClick={(event) => {
                alert(`어세오세요 ${nickname}`)}}>등록</button>    
        </TextPart>
    );
}

function App(){
    return(
        <div>
            <WelcomDialog/>
            <hr/>
            <MorningDialog/>
        </div>
    );
}

export default App;
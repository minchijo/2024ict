import { useCallback, useState } from "react";
import "./temp.css";
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
             <h1 className="Dialog-title">{props.title}</h1>
             <p className="Dialog-message">{props.message}</p>
        </div>
    );
}

function TextPart(props){
    return(
        <FancyBorder title={props.title} message={props.message}>
           
        </FancyBorder>
    );
}

function WelcomDialog(props){

    

    return(
        <TextPart title='환영합니다' message='당신은 행운아!'/>
      
    );
}



function App(){
    return(
        <div>
            <WelcomDialog/>
          
        </div>
    
    );
}

export default App;
/*
App
 |
 WelcomPart
 |
 FancyBorder

*/ 
import "./temp.css";

function FancyBorder(props){
    return(
        <div className="FancyBorder">
            <div>{props.data}</div> {/*속성 받으려면 props를 통해서 */}
            {props.children}
        </div>
    );
}

function WelcomePart(props){
    return(
        <FancyBorder data="중요한 부분">
            <h1 className="Dialogue-title">환영</h1>
            <p className="Dialogue-message">당신을 환영~</p>

        </FancyBorder>
    );
}

function App(){
    return(
        <WelcomePart/>
    );
}

export default App;
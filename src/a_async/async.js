import { useState } from "react";


function Counter(props){

    let[count, setCount] = useState(100);
    const sync_increment = ()=>{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
    }
    const async_increment = ()=>{
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }
    return(
        <div>
            <div>{count}</div>
            <button onClick={sync_increment}>동기식</button><br/>
            <button onClick={async_increment}>비동기식(리액트권장)</button>
        </div>
    );

}

function App(){
    return <Counter/>
}

export default App;
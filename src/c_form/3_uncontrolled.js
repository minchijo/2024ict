import { useRef, useState } from "react";

const App = ()=>{

    const[result, setResult] = useState(0);

    const add = ()=>{
        let x1 = parseInt(eleX.current.value);
        let y1 = parseInt(eleY.current.value);
        setResult(x1+y1);
    }
    //html DOM에 접근하기 위해 useRef() 이용
    const eleX  = useRef(null);
    const eleY = useRef(null);

    return(
        <div>
            <h2>비제어 컴포넌트</h2>
            X값: <input type="text" ref={eleX}/>
            <br/>
            Y값: <input type="text" ref={eleY}/> {/*html DOM에 직접 접근해서 값을 가져와야 한다 리액트가 아님*/}
            <hr/>
            <button onClick={add}>계산하기</button>
            결과 : {result}
        </div>
    );
}

export default App;
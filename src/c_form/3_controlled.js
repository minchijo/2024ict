
/*
제어 컴포넌트 :  입력필드의 값이 state나 props에 의해 제어되는 컴포넌트
                리액트에서 이벤트 핸들러를 이용하여 상태를 변경해서 화면 UI가 변경됨

비제어 컴포넌트 : 상태(state)나 속성(props)에 의해 제어되지 않아서 화면이 변경되지 않음
                 HTML 요소에 의해 직접 접근해야 한다
*/

import { useState } from "react";

const App= ()=> {

const [x, setX] = useState(0);
const [y, setY] = useState(0);

    return(
        <div>
            <h2>제어 컴포넌트</h2>
            X값: <input type="text" value={x}
                onChange={(event) => {
                setX(parseInt(event.target.value));
                        }}/>
            <br/>
            Y값: <input type="text" value={y}
                 onChange={(event) => {
                 setY(parseInt(event.target.value));
                        }}/>
            <hr/>
            결과 : {x+y}
        </div>
    );
}

export default App;
/*
immer :  불변성 라이브러리

 '불변성을 지킨다' 라는 것은 기존의 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 말한다.

*/

import { useState } from "react";
import produce from "immer";

const App= ()=>{

    const [todo, setTodo] = useState([
        {item: "밥먹기", done: true},
        {item:"잠자기" , done: false},
        {item: "놀기", done: true}
    ]);  //배열 안에 객체

    const listData= ()=> {
        console.log("0>", todo);
    }
    //******************************* */
    //2nd 아이템에 "공부하기"로 수정
    const modifyData= ()=> {
        setTodo(()=>{todo[2].item="공부하기"})
    } //배열값이 다 "공부하기"로 복사됨

    const modifyData1 = ()=> {
        const temp = todo.map((datum, idx)=>{//2번째 인자로 인덱스가 들어오는 건 map 특성
            return (idx===2)? {...datum, item: "공부하기2"} : datum;
        }); 
        setTodo(temp);
    }

    //위에 게 너무 중복되는 거 같다면
    const modifyData2 = ()=> {
        const temp = produce(todo, (data)=>{//1st 인자가 집합 , 하나하나 뽑아서의 그 하나를 data라고 명명함
            data[2].item = "공부하기3";
        }); 
        setTodo(temp);
    }

    return(
        <div>
            <button onClick={listData}>확인</button>
            <hr/>
            <button onClick={modifyData}>수정0</button>
            <button onClick={modifyData1}>수정1</button>
            <button onClick={modifyData2}>수정2</button>
        </div>
    );
}

export default App;
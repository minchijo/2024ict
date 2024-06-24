import { useState } from "react";
import produce from "immer";

const App = () => {

    let [student, setStudent] = useState({
        names: ["홍길동", "김곽자", "박두팔"],
        major: [
            {dept: "컴공", title: "자바", score: 3},
            {dept: "소공", title: "파이썬", score: 3},
            {dept: "기공", title: "리액트", score: 3},
            {dept: "보안", title: "스프링", score: 3}
        ]
    });
    
    const handleList = ()=>{
        console.log("[확인]: ", student);
    }
    
    /*일반방식 버튼 클릭 시 리액트 대신 "DB"로 변경 */
    const normalWay = ()=> {
        const temp = {...student, 
                    major: student.major.map((m, idx)=>{
            return (idx ===2)? {...m, title: "DB"} : m
        })};
        setStudent(temp);
    }
    /* immer 방식 버튼 킅릭 시 리액트 대신 "ES6"으로 변경*/
    const immerWay = ()=>{
        const temp = produce(student, (students)=>{
            students.major[2].title = "ES6";
        });
        setStudent(temp);
    }
    

    return(
        <div>
            <button onClick={handleList}>확인</button>
            <hr/>
            <button onClick={normalWay}>일반방식</button>
            <br/>
            <button onClick={immerWay}>immer 방식</button>
        </div> // 일반/immer 방식 누르고 확인을 눌러야 한다!!!! hahahaha
    );
}

export default App;
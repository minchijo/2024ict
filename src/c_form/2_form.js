import { useState } from "react";



function MyForm(props){

    const [nameValue, setNameValue] = useState("");
    const [msgValue, setMsgValue] = useState("");
    const [tripValue, setTripValue] = useState("대만"); //""이걸 주면 값이 안 나온다..왜지?
    const [sex, setSex] = useState("");

    // const handleName = (event) => {
    //     setNameValue(event.target.value);
    // } //하는 일이 이거밖에 없다면 밑에서 바로 써라

    const handleForm = (event)=> {
        event.preventDefault();
        let message = `이름: ${nameValue} 메세지: ${msgValue} 여행 갈 나라: ${tripValue} 성별: ${sex}`;
        alert(message);
    }

    return(
        <form onSubmit={handleForm}>
            <button type="submit">전송</button>
            <hr/>
            <label>이름</label>
            <input type="text" value={nameValue} 
            onChange={(event) => {
                setNameValue(event.target.value);
                                }}/>
            <br/>
            <label>메세지</label>
            <textarea value={msgValue} 
            onChange={(event) => {
                setMsgValue(event.target.value);
                                }}/>
            <br/>
            <label>여행 갈 나라</label>
            <select value={tripValue} 
                    onChange={(event) => {
                    setTripValue(event.target.value);
                                         }}>
                <option value="대만">대만</option>
                <option value="국내">국내</option>
                <option value="태국">태국</option>
                </select>
                <br/>
                <label>성별</label>
                <input type="radio" name="sex" value="남자" 
                    onChange={(event) => {
                    setSex(event.target.value);
                                }}/>남자
                <input type="radio" name="sex" value="여자" 
                        onChange={(event) => {
                        setSex(event.target.value);
                                }}/>여자 {/*onClick으로도 줘보자!! */}
            
        </form>
    );
}



function App(){
    return <MyForm/>
}

export default App;
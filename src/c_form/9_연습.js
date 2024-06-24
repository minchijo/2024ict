import { useState } from "react";


const App= ()=> {

    const [won, setWon] = useState(0);
    const [dollar, setDollar] = useState(0);
    const [wonToDollar, setWonToDollar] = useState('');
    const [dollarToWon, setDollarToWon] = useState('');

    const handleWon = (event)=> {
        const value = event.target.value;
        setWon(value);
        setWonToDollar(value ? (parseFloat(value) / 1300).toFixed(1) : '');
    } //toFixed : 소수점 뒤에 나타날 자릿수

    const handleDollar = (event)=> {
        const value = event.target.value;
        setDollar(value);
        setDollarToWon(value ? (parseFloat(value) * 1300).toFixed(1) : '');
    }

    return(
        <div>
            <form>
            <h2>처음 화면</h2>
            
                <div>원화 금액을 입력하세요</div>
                <input type="text" value={won} onChange={handleWon}/>
                <div>달러 금액을 입력하세요</div>
                <input type="text" value={dollar} onChange={handleDollar}/>

            <h2>원화의 금액이 변동되면 달러 금액이 자동 계산되는 화면</h2>
                <div>원화 금액을 입력하세요</div>
                <input type="text" value={won} onChange={handleWon}></input>
                <div>달러 금액</div>
                <input type="text" value={wonToDollar} readOnly/>

            <h2>달러의 금액이 변동되면 금액이 자동 계산되는 화면</h2>
                <div>달러 금액을 입력하세요</div>
                <input type="text" value={dollar} onChange={handleDollar}/>
                <div>원화 금액</div>
                <input type="text" value={dollarToWon} readOnly/>
            </form>
        </div>
    );
}

export default App;
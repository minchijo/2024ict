
function MyComp(){

    const handleSubmit = (event)=> {
        event.preventDefault();
        alert("submit");
    }

    const bunttonClick = (event)=> {
        event.preventDefault(); //button 태그는 폼의 submit 기능이 있어서 이거 안 하면 submit 알럿도 같이 뜬다
        alert("button click");
    }

    const buttonInput = ()=> {
        alert("button input");
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                {/* button 태그는 폼의 submit 기능이 있다 */}
                <button onClick={bunttonClick}>눌러1</button>
                <input onClick={buttonInput} type="button" value="눌러2"/>
                <hr/>
                <input type="submit"></input>
            </form>
        </>
    );
}

function App(){
    return <MyComp/>
}

export default App;
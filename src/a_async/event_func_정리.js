import { useState } from "react";


function Toggle(props){
   const [isToggleOn, setIsToggleOn] = useState(true);

   //[1]
   function handleClick(){
    //setIsToggleOn(!isToggleOn);
    setIsToggleOn((isToggleOn)=>!isToggleOn);
   }

   //[2]
   const handleClick2=()=> {
    setIsToggleOn((isToggleOn)=> !isToggleOn);
   }

   return(
    <div>
        <button onClick={handleClick}>{isToggleOn?"켜짐1":"꺼짐1"}</button>
        <hr/>
        <button onClick={handleClick2}>{isToggleOn?"켜짐2":"꺼짐2"}</button>
    </div>
   );
}

function App(){
    return <Toggle/>
}

export default App;
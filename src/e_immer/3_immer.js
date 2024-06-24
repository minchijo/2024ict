import { useRef, useState } from "react";
import produce from "immer";

const App= ()=> {

    const [formData, setFormData] = useState({userid: "", username: ""});
    const [data, setData] =useState({ array: [], uselessValue: null});

    //+++++++++++++++++++++++++++++++++++++++++++++++++++
    const nextId = useRef(1);

    const onChange= (evt)=> {
        const {name, value} = evt.target;
        //console.log(name, ":", value);
                                    //밑의 userid랑 username이고, 텍스트에리어에 입력한 값이 value 
        //setFormData({...formData, [name]:[value]}); //formData 기존의 값 복사해서 userid 또는 username 중에서 달라진 값만 업데이트해준다 달라지지 않은 건 다시 복사
        setFormData(produce(formData, draft => {draft[name]=value;}))
    }
    const onSubmit= (evt)=>{
        evt.preventDefault();
        const info = {
            id :  nextId.current, //current에 1 들어있음
            userid: formData.userid,
            username: formData.username
        }
        //++++++++++++++++++++++++++++++++++
        nextId.current +=1;

        //배열에 항목 등록
        //setData({...data, array:data.array.concat(info) });
        setData(produce(data, draft => {
            draft.array.push(info)
        }));
        //폼 데이터 초기화
        setFormData({userid: "", username: ""})
    }

    //항목 삭제 함수
    const onRemove= (id)=>{
        //alert(id);                                            //같지 않으면 false 걔네들만 걸러서 배열에 넣는다 id가 같은 애들은 뺀다
        //setData({...data, array: data.array.filter(info => info.id !== id)}); //li에서 누른 키값이 id, 이거랑 실제 info에 있는 id랑 같지 않는 것만 화면에 보여준다=> 같은 건 삭제한다
        setData(produce(data, (draft) => {
            draft.array.splice(draft.array.findIndex( info => info.id === id), 1); //해당하는 애를 찾으면 걔만 1개 자른다
        }))    
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="userid" placeholder="아이디" 
                        onChange={onChange}/><br/>
                <input name="username" placeholder="이름"
                          onChange={onChange}/><br/>
                <button type="submit" >등록</button>
            </form>
            <hr/><hr/>
            <ul>
                {
                    data.array.map( info => 
                        <li key={info.id} test={info.id}
                            onClick={()=> onRemove(info.id)}
                        >{info.userid} : {info.username}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default App;
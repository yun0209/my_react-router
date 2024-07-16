import React , {useState ,useEffect} from 'react'


function Entery() {
   
    const [count,setcount] = useState(0);
    const bgcolor = ["red", "blue", "green", "yellow", "black","white"];
    useEffect(()=>{
        document.body.style.backgroundColor = bgcolor[count]

    },[count])
// style 은 랜더링이 아니다     

    return (
        <div >
            <button onClick={()=>{
                setcount(count < bgcolor.length -1 ? count +1 : 0);
            }}>
                {bgcolor[count]}인디</button>

        </div>
        
    )
}

export default Entery

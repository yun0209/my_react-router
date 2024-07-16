import React , {useState ,useEffect} from 'react'


function Entery() {
    let count = 0;

    const bgcolor = ["red", "blue", "green", "yellow", "black"];
// style 은 랜더링이 아니다     

    return (
        <div >
            {bgcolor.map((v,i)=>{

            })}
            
        </div>
        
    )
}

export default Entery

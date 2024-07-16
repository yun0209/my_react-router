import React , {useState ,useEffect} from 'react'


function Entery() {
    let count = 0;

    const [num,setnum] = useState(0);//랜더링

    useEffect(()=>{
        document.querySelector('button').addEventListener('click',()=>{
            setnum(num + 1);
        })
    },[num]);//랜더링 끝나고 나서 html태그로 이해 //num 이 바뀔때 계속 돈다

    useEffect(()=>{
        document.body.style.backgroundColor ='red'
            
        
    },[]);

    return (
        <div >
            <button>일반변수 count 하나씩 증가 </button>
            <h1>나는 일반변수 count : {`${count = num}`}</h1>

        </div>
        
    )
}

export default Entery

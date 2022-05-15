import React,{useEffect,useState} from 'react'

function Ue3() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('Pushan')
    useEffect(()=>{
        document.title =`This is my Title ${count} ${name}`
    },[count,name])
  return (
    <div>
    <h1>This is a counter {count}</h1>
    <button onClick={()=>setCount(count+1)}>+1</button>
    <button onClick={()=>setName('PushanVerma')}>CHANGE NAME</button>
    </div>
  )
}

export default Ue3
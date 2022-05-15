import React, { useState } from 'react'

function Task() {
    const[inputItem,setInputItem]=useState('')
    const[itemArray,setItemArray]=useState([])

  let addItem=(item)=>{
      setItemArray([...itemArray,item])
      setInputItem('')
  }
  
    return (
    <div>
    <input type='text' value={inputItem} onChange={(e)=>setInputItem(e.target.value)}/>
    <button onClick={()=>addItem(inputItem)}>AddItem</button>

    <ul>
        {
            itemArray.map((item)=>{
                return <li>{item}</li>
            })
        }
    </ul>
    </div>
  )
}

export default Task
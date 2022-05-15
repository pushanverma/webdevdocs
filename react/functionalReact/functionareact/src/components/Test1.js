import React, { useState } from 'react'

function Test1() 
{
    const[text,setText]=useState('')
  return (
    <div>
        <input type='text' onChange={(e)=>setText(e.target.value)}/>
        <h1>{text}</h1>
    </div>
  )
}

export default Test1
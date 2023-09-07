import React, { useState } from 'react'
import Header from './Header'


export default function Contact() {
  const [num, setNum]=useState(0);
  function test(){
    setNum(num+1)
}
  
  return (
    <>

    <div>Contact</div>
    <Header />
    <p>{num}</p>
    <button onClick={test}>Click here</button>
    </>
  )
}

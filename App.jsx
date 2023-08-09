import React, { useState } from 'react'

const App = () => {
    const[city,setCity]=useState(null);
    const[search,setSerach]=useState("");
 

  return (
    <>
    <div className='box'>App
    <div className='inputdata'>
        <input type="search" className='inputfield' onChange={(event)=>{}}></input>
    </div>
    

    <div className='info'>
        <h2 className='location'></h2>
        <h3 classname="tempim_max">

        </h3>
    </div>
    </div>
    </>
  )
}

export default App
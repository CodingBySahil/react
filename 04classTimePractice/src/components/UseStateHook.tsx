import { useState } from 'react'

const UseStateHook = () => {
    
    function addOne() {
        age++
        setAge(age)
        
    }
    let [age,setAge]=useState(15)
  return (
    
    <div>
        <button onClick={addOne} id='age'>Asif Age is : {age}</button>
    </div>
  )
}

export default UseStateHook
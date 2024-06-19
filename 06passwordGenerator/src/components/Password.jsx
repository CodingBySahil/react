import React from 'react'
import { useState, useEffect } from 'react'

const Password = () => {
    let genPassword
    const [password, setPassword] = useState('I am password')
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
    useEffect(passwordGenerator,[third])
    
    const passwordGenerator= ()=>{
        let pass = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
        if (numberAllowed) {
            pass+= '0123456789'
        }
        if (specialCharAllowed) {
            pass+='!#$%^&*()_+{},.?'
        }
        for (let i = 0; i < pass.length; i++) {
            genPassword += pass.charAt(i)
        }
        console.log(genPassword);
    }
  return (
    <div>
        <h3>Password Generator</h3>
        <input type="text" readOnly value={password}/>
        <br />
        <input type="range" min={8} max={20} id='range' />
        <label htmlFor="range">Range</label>
        <br />
        <input type="checkbox"  id="numberCheck" onClick={(prev)=>setNumberAllowed(!prev)}/>
        <label htmlFor="numberCheck">Number Allowed </label>
        <br />
        <input type="checkbox"  id="specailCharCheck" onClick={(prev)=>setSpecialCharAllowed(!prev)}/>
        <label htmlFor="specailCharCheck">Speacial Character Allowed</label>
        
    </div>
  )
}

export default Password
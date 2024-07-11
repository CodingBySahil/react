import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    let {userId} = useParams()
  return (
    <div className='bg-slate-700 p-6 w-full text-white  text-center'>User : {userId = 123}</div>
  )
}

export default User
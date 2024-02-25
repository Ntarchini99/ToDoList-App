import React from 'react'
import { useState } from 'react'

const IsEditing = ({item,taskEditing}) => {

    const [input,setInput] = useState(item.value) 


  return (

    <form onSubmit={e=>e.preventDefault()} className='p-4'>
        <input value={input} onChange={e=>setInput(e.target.value)}  placeholder='add' className='bg-gray-200 text-black font-semibold border-2 border-gray-200 shadow-black/50 shadow-sm p-2 rounded-l-xl w-[80%] focus:outline-none' type="text" />
        <button onClick={()=>taskEditing(item.id,input)} className='border-2 border-black p-2 rounded-r-xl w-[20%] text-black font-semibold'>Update</button>
    </form>

  )
}
    
export default IsEditing
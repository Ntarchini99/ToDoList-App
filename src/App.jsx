import React from 'react'
import { useState } from 'react'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import IsEditing from './Component/IsEditing'


const App = () => {
const [input,setInput] = useState('')
const [task,setTask] = useState([])


const addTodo = () => {
  if (input.length > 1) {

  const todo = {

    id:Math.floor((Math.random()) * 1000),
    value:input,
    iscompleted:false,
    isediting:false,
  }
  setTask([...task,todo])
  setInput('')
  }


  }

  
const HandleDelete = (id) =>{
const afterdelete = task.filter((item)=>item.id !== id )
setTask(afterdelete)  
}


const HandleToggle = (id) =>{
const afterToggling = task.map((item)=>item.id === id ? {...item,iscompleted : !item.iscompleted} : item)
setTask(afterToggling)
}


const HandleEditing = (id) => {
const afterEditing = task.map((item)=>item.id === id ? {...item,isediting: !item.isediting} : item)
setTask(afterEditing)
}

const TaskEditing = (id,value) =>{
const taskEditing = task.map((item)=>item.id === id ? {...item,isediting: !item.isediting ,value } : item )  
setTask(taskEditing)
}

console.log(task);

  return (
    <div className='w-full h-screen bg-gray-400'>
     <div className='max-w-5xl mx-auto pt-[100px]'>
      <div className='max-w-[500px] sm:w-[50%] h-full pb-4 bg-white rounded-xl mx-auto shadow-black/50 shadow-xl'>
        <h3 className='text-2xl uppercase text-center p-6 font-semibold'>Get Things Done !</h3>
        <div className='flex flex-col'>
          <form onSubmit={e=>e.preventDefault()} className='p-4'>
            <input value={input} onChange={e=>setInput(e.target.value)} className='bg-black focus:outline-none border-2 border-black p-2 shadow-2xl rounded-l-xl w-[80%] text-white ' type="text" placeholder='add' />
            <button onClick={addTodo} className='border-2 border-black p-2 rounded-r-xl w-[20%] text-black font-semibold'>add todo</button>
          </form>
                
                {task.map((item,index)=>{

                  return (
                    <div key={index}>

                      <div className='w-full'>
                        
                     {item.isediting ? <IsEditing  item={item} taskEditing={TaskEditing}/> : '' }  
                    </div>
                            
                    <div className='flex justify-between items-center w-[93%] h-10 bg-gray-200 my-4 mx-auto rounded-md text-black font-semibold shadow-black/50 shadow-sm'>
   
                  {item.iscompleted ?  
                  <h4 className='p-2 line-through decoration-4 decoration-red-700'>{item.value}</h4>
                  : 
                  <h4 className='p-2'>{item.value}</h4>}

                 <div className='flex'>
                  {item.iscompleted ?  <MdDone onClick={()=>{HandleToggle(item.id)}} className='mx-2' size={20} color='green'/>: <MdDone onClick={()=>{HandleToggle(item.id)}} className='mx-2' size={20} color='red'/> }
                 
                  <AiFillEdit onClick={()=>HandleEditing(item.id)} className='mx-2' size={20}/>
                  <BsFillTrashFill onClick={()=>HandleDelete(item.id)} className='mx-2' size={20}/>

                </div>
        </div>                
    </div>          
               )
              })}   
              
             
           <h5 className='text-black text-xl text-center font-semibold'>You have {task.length} Task To To</h5>

        </div>
      </div>
     
     </div>
    </div>
  )
}

export default App
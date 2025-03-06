import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearInput, setInput, setTodo } from './TodoSlice'
import { Link } from 'react-router-dom'

const Todo = () => {
  const Addtodo=()=>{
    if(setValues.includes(inputValues)){
      alert("Data already exists")
      dispatch(setInput(" "))
    }else
    if(inputValues.trim() !==''){
    dispatch(setTodo(inputValues))
    dispatch(setInput(" "))
    }
  }
  const dispatch=useDispatch()
  const inputValues = useSelector((state)=>state.todo.inputValue);
  const setValues = useSelector((state)=>state.todo.todouser);
  return (
    <div className='flex items-center justify-center w-full h-screen  bg-gray-600'>
      <div className='bg-white p-5 rounded-lg h-80 w-85 ' >
      <h1 className='text-xl font-extrabold mb-3'>Todo </h1> 
      <div className=' mb-3 flex'>
         <input placeholder='Enter your Tasks' className='outline-none border-2 p-1 rounded-lg  text-xl font-bold' type="text" value={inputValues} onChange={(e)=>dispatch(setInput((e.target.value)))}/>
      <button className='bg-blue-600 text-white  p-1 rounded-lg text-xl font-bold hover:bg-blue-800' onClick={Addtodo}>Add</button>
      </div>
     <div>
      <h2 className='text-xl font-extrabold mb-3'>Your Tasks</h2>
      <div className='p-1 rounded-lg overflow-y-scroll h-35 mb-5 scrolls'>
      {setValues.map((item,index)=>(
        <div  key={index}>
          <div className=' flex m-3 bg-blue-600 pl-2 w-fit text-xl items-center justify-center text-white font-bold rounded-lg '><p className=''>{item} </p><button className='bg-red-600 ml-3 h-5 w-5 flex items-center justify-center text-white  font-bold rounded-full hover:bg-red-800 ' onClick={()=>dispatch(clearInput(item))}>x</button></div>
        </div>
      ))}
       </div>
       <Link to='/' className='  bg-blue-600  text-white font-bold rounded-lg p-2'>Home</Link>
     </div>
     </div>
    </div>
   
  )
}

export default Todo
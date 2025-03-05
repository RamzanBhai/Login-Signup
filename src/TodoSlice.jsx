import { createSlice } from "@reduxjs/toolkit";
const todouser =JSON.parse(localStorage.getItem("user")) || [];
const TodoSlice =createSlice({
  name:"todo",
  initialState:{
    todouser:todouser,
    inputValue:'',
  },
  reducers:{
    setTodo(state,action){
      state.todouser=[...state.todouser,action.payload]
      localStorage.setItem("user" , JSON.stringify(state.todouser))
    },
    setInput(state,action){
      state.inputValue=action.payload
    },
    clearInput(state,action){
      state.todouser=state.todouser.filter((user)=> user !== action.payload)
      localStorage.setItem("user" , JSON.stringify(state.todouser))
    }
  }
})
export const {setTodo,setInput,clearInput}=TodoSlice.actions;
export default TodoSlice.reducer;
 
import {createSlice, nanoid } from '@reduxjs/toolkit';
// create karega slice  
//nanoid for new unique id 


const initialState = {   //intial state first
    todos: [{
        id: 1,
        text: "Hello world"
    }]
}
//starting me kya ho 

// ab slice bnyenge

//createContext me ham defination likhte hai declartion nhi 
//yaha both kar skte hai

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {     //property or function aate hai
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            } //bnaya hai state me update krdo
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer


//sare reducer do kispr karna hai operation

//add todo function me do chize milegi

//  1 state(acces abhi us state me kya kya values hai vo degi) 

//  2 action (action values aaye jese remove id lagegi vo value action me se milti hai)
// action . payload me value mielgi object hai





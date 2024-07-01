import { createSlice } from "@reduxjs/toolkit";


export const cartslice=createSlice({
    name:"cart",
    initialState:[ ],
    reducers:{
        add:(state,action)=>{
           state.push(action.payload);
        //    action.payload->implies the input parameter sent in addfunc
        },
        remove:(state,action)=>{
             //to remove u can use filter
               return state.filter((item)=>item.id!==action.payload);
        }
    }
})

export  const {add,remove} =cartslice.actions;
export  default cartslice.reducer;
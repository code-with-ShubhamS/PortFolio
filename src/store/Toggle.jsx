import { createSlice } from "@reduxjs/toolkit";


const Toggle= createSlice(
    {
    name:"toggle",
    initialState:true,
    reducers:{
        toggle:(state)=>{ return !state}   
    }
  }
)

export const ToggleAction= Toggle.actions;
export default Toggle;


import {createSlice} from "@reduxjs/toolkit"


const initialState={
    value:JSON.parse(localStorage.getItem('nameList'))||[ ],
};



export const clientsNameSlice=createSlice({
    name:"clientsName",
    initialState,
    reducers:{
        addName:(state,action)=>{
        state.value.push(action.payload )
        console.log(action.payload)
        
        
    },
    
     removeItem:(state,action)=>{
        state.value.splice(action.payload,1)
    },
    
   
    }});
 export const {addName}= clientsNameSlice.actions
 export const {removeItem}= clientsNameSlice.actions

 export default clientsNameSlice.reducer;



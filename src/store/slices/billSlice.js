import { createSlice } from "@reduxjs/toolkit";
const billSlice=createSlice({
    name:"bill",
    initialState:[],
    reducers:{
        addBill:(state,action)=>{
            let exist=state.find((state)=>state.id===action.payload.id)
            if(exist){
                exist.quantity=action.payload.quantity
                exist.total=action.payload.total
                
            }else{
               state.push(action.payload)
            }
        },
        removeFromBill:(state,action)=>{
            // console.log("remove "+action.payload)
            return state=state.filter((state)=>state.id!==action.payload)
        }
    }
})
export const {addBill,removeFromBill}=billSlice.actions;
export default billSlice.reducer;
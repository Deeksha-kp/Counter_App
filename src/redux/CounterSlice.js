import {createSlice} from "@reduxjs/toolkit"



const counterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        increament(state){
            state.counter++
        },
        decreament(state){
            state.counter--
        },
        reset(state){
            state.counter=0
        },
        countWithNum(state,action){
            state.counter+=Number(action.payload)
        }
    }
})
export default counterSlice.reducer
export const {increament,decreament,reset,countWithNum}=counterSlice.actions
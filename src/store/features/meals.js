import { createSlice } from "@reduxjs/toolkit";

const mealStore=createSlice({
    name:"mealStore",
    initialState:{
        dataLoaded:false,
        mealscategorylist:[],
        mealtypeslist:[],
        mealrecepie:{},
        error:""
    },
    reducers:{
        fetchMealsCategoryList:(state,action)=>{
            state.dataLoaded=false;
            state.error=""
        },
        fetchMealTypesList:(state,action)=>{
            state.dataLoaded=false;
            state.error=""
        },
        fetchMealRecepie:(state,action)=>{
            state.dataLoaded=false;
            state.error=""
        },
        SuccessAction:(state,action)=>{
            state.dataLoaded=true;
            state[action.payload.updateField]=action.payload.response
        },
       FailedAction:(state,action)=>{
            state.dataLoaded=true;
            state.error=action.payload
        },
        resetDataLoaded:(state,action)=>{
          state.dataLoaded=action.payload
        }
    }
})

export default mealStore.reducer
export const {fetchMealsCategoryList,
    fetchMealTypesList,
    fetchMealRecepie,
    SuccessAction,
    FailedAction,
    resetDataLoaded}=mealStore.actions
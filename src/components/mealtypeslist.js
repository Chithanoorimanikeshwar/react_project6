import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsCategoryList, resetDataLoaded } from "../store/features/meals";
import Loading from "./loading";
import Mealtype from "./mealtypes";

const MealTypesList=()=>{
    const dispatch=useDispatch()
    const loaded=useSelector((state)=>state.mealStore.dataLoaded)
    const error=useSelector((state)=>state.mealStore.error)
    const mealdata=useSelector((state)=>state.mealStore.mealscategorylist)

    useEffect(()=>{
        return ()=>{
            dispatch(resetDataLoaded(false))
        }
    },[dispatch])
    useEffect(()=>{
    if(!loaded){
        if(mealdata.length>0){
            dispatch(resetDataLoaded(true));
        } else{
            console.log('fetching...')
            dispatch(fetchMealsCategoryList("http://localhost:3000/categories"))
        }
    }
        
    },[dispatch,mealdata,loaded])
 
    if(loaded){
        if(!(error==="")){
            return <h1>{error}</h1>
        }

            if(mealdata.length>0){
                return <div className="container p-2">
                    <h1>select Food categories</h1>
                    <hr/>
                    {mealdata.map((data)=>{
                        return <Mealtype mealtype={data} key={data.idCategory} />
                    })}
                </div>
            }
        

    }else{
       
             return <Loading/>
        
        
       
    }

    
  
}

export default MealTypesList
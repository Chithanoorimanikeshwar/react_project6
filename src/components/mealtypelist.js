import React from "react";
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealTypesList, resetDataLoaded } from "../store/features/meals";
import Loading from "./loading";
import Mealtype from "./mealtype";
import { useParams } from "react-router-dom";

const MealTypeList=()=>{
    const {foodtype}=useParams()
    const loaded=useSelector((state)=>state.mealStore.dataLoaded)
    const error=useSelector((state)=>state.mealStore.error)
    const mealdata=useSelector((state)=>state.mealStore.mealtypeslist)
    const dispatch=useDispatch()

    useEffect(()=>{
        return ()=>dispatch(resetDataLoaded())
    },[dispatch])

    // useEffect(()=>{
    //     if(!loaded){
    //         if(mealdata.length>0){
    //             dispatch(resetDataLoaded(true));
    //         } else{
    //             console.log('fetching...')
    //             dispatch(fetchMealTypesList(`http://localhost:3000/${foodtype}`))
    //         }
    //     }
            
    //     },[dispatch,mealdata,loaded])

    // console.log(mealscategory)
    console.log(mealdata)
    if(loaded){
        console.log(1)
       if(!(error=="")) return <h1>{error}</h1>
       else if(mealdata.length>0){
            // console.log(mealdata)
            return <div className="container">
                <h1>{foodtype} Recepies</h1>
                <hr/>
                <div className="row">
                    {mealdata.map((res)=><Mealtype fooditem={res} key={res.idMeal}/>)}
                </div>
               
            </div>
            }
            else{
                return <h1>hello</h1>
            } 
    }
    else{
        dispatch(fetchMealTypesList(`http://localhost:3000/${foodtype}`))
        return <Loading/>
    }
    

}

export default MealTypeList
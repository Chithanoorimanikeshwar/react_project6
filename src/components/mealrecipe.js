import React from "react";
import Youtube from "react-youtube"
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealRecepie, resetDataLoaded } from "../store/features/meals";
import Loading from "./loading";
import { useParams } from "react-router-dom";

const MealRecipe=()=>{
    const dispatch=useDispatch();
    const {id}=useParams();
    const mealrecipe=useSelector((state)=>state.mealStore.mealrecepie)
    const loaded=useSelector((state)=>state.mealStore.dataLoaded)

    useEffect(()=>{
        return ()=>dispatch(resetDataLoaded(false))
    },[])
    function displayInstructions(data){
        const steps=data.split('.');
        return steps.map((step,index)=>{
            if(step.length>0){
                return <li key={index}>{step}</li>
            }
           
        })
    }
    function setupVideo(link){
        const id=link.split('v=')
        console.log(id)
        return <Youtube videoId={id[0]}/>
    }
    

    if(loaded){
        if(mealrecipe.length>0){
            console.log(mealrecipe);
                return <div className="container"><div className="card mb-3 p-2">
                        <h1></h1>
                            <img src={mealrecipe[0].strMealThumb} className="card-img-top " alt={mealrecipe[0].strMeal}

                            style={{width:100+"%",height:40+'vh',overFlow:'hidden'}}/>
                            <div className="card-body">
                            <h3 className="card-title">{mealrecipe[0].strMeal}</h3>
                            <hr/>
                            <h5>Prepare Now</h5>

                            <ol className="card-text">{displayInstructions(mealrecipe[0].strInstructions)}</ol>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                            {setupVideo(mealrecipe[0].strYoutube)}
                        </div></div>
        }
    }
    else{
        dispatch(fetchMealRecepie(`http://localhost:3000/meals?idMeal=${id}`))
        return <Loading/>
    }
}
export default MealRecipe
import React from "react";
import { Link } from "react-router-dom";

const MealType=(props)=>{
    return <div className="card border p-2" style={{width: 18+"rem"}} >
                <img src={props.fooditem.strMealThumb || props.fooditem.strCategoryThumb} className="card-img-top" alt={props.fooditem.strMeal}/>
                <div className="card-body">
                    <h5 className="card-title">{props.fooditem.strMeal}</h5>

                   <Link to={`/foodrecipe/${props.fooditem.idMeal}`}
                   className="btn btn-info">
                    get Recepie
                   </Link>
                </div>
            </div>
}

export default MealType
import React from "react";
import { Link } from "react-router-dom";

const Mealtype=(props)=>{

    return <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={props.mealtype.strCategoryThumb} className="img-fluid rounded-start" alt={props.mealtype.strCategory}/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.mealtype.strCategory}</h5>
                        <p className="card-text">{props.mealtype.strCategoryDescription}</p>
                        <p className="card-text"><small className="text-body-secondary"><Link to={`/foodtypes/${props.mealtype.strCategory}`}>click here for more details</Link></small></p>
                    </div>
                    </div>
                </div>
            </div>
}

export default Mealtype
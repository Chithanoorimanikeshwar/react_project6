import React from "react";

const Loading=()=>{
    return <div className="container-fluid" >
        <div className="d-flex justify-content-center align-items-center" style={{width:100+'vw',height:100+'vh'}} >
            <div className="spinner-border " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
                <span className="ms-1"> loading...</span>
            </div>
        </div>
}
export default Loading
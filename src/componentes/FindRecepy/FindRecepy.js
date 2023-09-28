import React from "react";
import './FindRecepy.css'
const FindRecepy = ()=> {
    return(
        <>
        <div className="main">
            <div className="heading">
                <h1>Find the recipe here</h1>
            </div>
            <div className="searchbox">
                <input placeholder="Ask for recepys here" type="search" className="search-bar"/>

            </div>
        </div>
        </>
    )
};

export default FindRecepy;
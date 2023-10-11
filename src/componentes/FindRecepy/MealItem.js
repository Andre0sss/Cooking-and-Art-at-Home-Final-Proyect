import React from "react";
import { useNavigate } from "react-router-dom";
import './MealItem.css'
const MealItem=({data})=>{
    console.log(data);
    let navigate = useNavigate();
    return(
        <>  
            {
                (!data) ?<h2 className="textNotFound">Coming soon recipes with this letter</h2>: data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal} onClick={()=>navigate(`/${item.idMeal}`)}>
                        
                        <img src={item.strMealThumb} alt="" />
                        <h3 className="recepyName">{item.strMeal}</h3>
                        <div className="recepyButton">
                            <h4 className="recepyTextButton">Recipe</h4>
                        </div>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;
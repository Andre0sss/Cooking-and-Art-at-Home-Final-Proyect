import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
import './Meal.css'
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
   }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
        <div className="main">
                <h1 className="text-recepy">Search for your next recipe</h1>
            
            <div className="searchBox">
                <input placeholder="Discover your next recipe here" type="search" 
                className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
            <div className="container">
                
                    {
                        show ?<MealItem data={item} /> :"Recipe not Found"
                
                    }
    
            </div>
        </div>
    </>
)
}
export default Meal;
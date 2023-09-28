import React from "react";
import Meal from "./Meal";
import Recipe from "./Recepy";
import { Route, Routes } from 'react-router-dom';

const AppFindRecepy = () => {
 return(
    <>
        <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<Recipe/>}/>
      </Routes>
    </>
 )
}
export default AppFindRecepy
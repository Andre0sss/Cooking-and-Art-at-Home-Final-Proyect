import React from 'react';
import { Route,Routes } from 'react-router-dom';
import AboutUs from './componentes/AboutUs/AboutUs';
import Recipe from './componentes/FindRecepy/Recepy';
import Meal from './componentes/FindRecepy/Meal';
import ContactUs from './componentes/ContacInfo/ContactUs';
import NavLanding from './componentes/FindRecepy/Navs/NavLanding/NavLangin';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={< NavLanding/>}>
          <Route path='/createRecepy' element={<Meal/>}/>
          <Route exact path="/:recipeId" element={<Recipe/>}/>
          <Route path='/contacUs' element={<ContactUs/>}/>
          <Route path='/' element={<AboutUs/>}/>
          </Route>
      </Routes>
    </div>
  );
};

export default App;

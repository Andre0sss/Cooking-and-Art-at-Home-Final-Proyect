import React from 'react';
import AboutUs from './componentes/AboutUs/AboutUs';
import AppFindRecepy from './componentes/FindRecepy/AppFindRecepy';
import ContactUs from './componentes/ContacInfo/Contact';

function App() {
  return (
    <div className="App">
      <AboutUs />
      <AppFindRecepy/>
      <ContactUs /> 
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Helpsignup from './components/pages/Helpsignup';
import Services from './components/pages/Services';
import FAQs from './components/pages/FAQs';

function App() {
  return (
    <>
    
    <Navbar />

  
     
<Routes>


  <Route exact path ='/'  element = {<Home/>} />
  <Route  path ='/fAQs'  element = {<FAQs/>} />
  <Route  path ='/services'  element = {<Services/>} />
  <Route  path ='/help-sign-up'  element = {<Helpsignup/>} />
</Routes>


   
    

  
  
  </>
  );
}

export default App;

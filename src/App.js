import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';

function App() {
  return (
    <>
    
    <Navbar />

  
     
<Routes>


  <Route exact path ='/'  element = {<Home/>} />
</Routes>


   
    

  
  
  </>
  );
}

export default App;

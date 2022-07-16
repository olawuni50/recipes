import './App.css';
import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Recipe from './components/Recipe';





function App() {
  

  return (
  <BrowserRouter>
  <Routes>
   
    <Route path='/'  element={<Recipe />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;

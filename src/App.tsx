import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';



function App() {
  return (
    <div>
      <BrowserRouter basename='/MyPortfolio'>
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

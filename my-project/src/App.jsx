import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import { Home } from './Pages/Home'; 
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Buy } from './Pages/Buy';
import { Product } from './Pages/Product';
import Setup from './Pages/Setup';
import Feature from './Pages/Feature';

function App() {
  return (
    <Router>
     
      <Header/>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/products" element={<Product />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/features" element={<Feature />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;

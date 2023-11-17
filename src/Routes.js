import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
// import Requestforquote from './components/Requestforquote';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        {/* <Route path="/Requestforquote" element={<Requestforquote/>} /> */}
       
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
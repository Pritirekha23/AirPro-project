import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AppRoutes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

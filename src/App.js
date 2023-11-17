import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AppRoutes from './Routes';
import Navbar from './components/Navbar'



function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes/>
      
    </div>
  );
}

export default App;

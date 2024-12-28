import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Hero from './Hero';
import Cards from './Cards';
import Navbar from './Navbar';
import Register from './Register';
import Table from './Table';
import Main from './Main';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/cards" element={<Cards />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        <Route path="/reg" element={<Register />} />
        <Route path="/table" element={<Table />} />

        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;

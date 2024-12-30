import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Hero from './Hero';
import Cards from './Cards';
import Navbar from './Navbar';
import Register from './Register';
import Table from './Table';
import Main from './Main';
import Upload from './Upload_file';
import Contact from './Contact';
import List from './List';
import SamplePage from './SamplePage'



function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* <Route path="/hero" element={<Hero />} />
        <Route path="/cards" element={<Cards />} /> */}
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        {/* <Route path="/table" element={<Table />} /> */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/home" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        <Route path="/sample" element={<SamplePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

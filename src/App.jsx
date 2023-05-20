import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navb from './Navbar/Nav';
import './App.css';
export default function App() {
  return (
    <div>
        <Navb  />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/fav" element={} /> */}
        </Routes>
      </Router>
      
    </div>
  );
}
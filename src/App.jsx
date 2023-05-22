import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Home/Home';
import FavList from '../src/FavList/favList'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navb from './Navbar/Nav';
import './App.css';

export default function App() {
  return (
    <div>
      <Navb />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<FavList />} /> {/* Render FavList component for /fav route */}
        </Routes>
      </Router>
    </div>
  );
}
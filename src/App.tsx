import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CarSearch from './pages/CarSearch';
import LoginPage from "./pages/LoginPage";
import Community from './pages/Community';
import Register from './pages/Register';
import Read from './pages/Read';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/search" element={<CarSearch/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/read/:bno" element={<Read/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

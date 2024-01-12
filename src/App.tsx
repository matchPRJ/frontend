import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CarSearch from './pages/CarSearch';
import Community from './pages/Community';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/search" element={<CarSearch/>} />
        <Route path="/community" element={<Community/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CarSearch from './pages/CarSearch';
import LoginPage from "./pages/LoginPage";
import AccidentPage from './pages/AccidentPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/search" element={<CarSearch/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/accident" element={<AccidentPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

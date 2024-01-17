import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CarSearch from './pages/CarSearch';
import LoginPage from "./pages/LoginPage";
import Community from './pages/Community';
import Register from './pages/Register';
import Read from './pages/Read';
import AccidentPage from './pages/AccidentPage';
import Modify from './pages/Modify';
import ReplyModify from './pages/ReplyModify';
import MapPage from './pages/MapPage';



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
        <Route path="/accident" element={<AccidentPage/>} />
        <Route path="/modify/:bno" element={<Modify/>} />
        <Route path="/replyModify" element={<ReplyModify/>} />
        <Route path="/map" element={<MapPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Zoologicos from "./pages/Zoologicos";
import Recintos from "./pages/Recintos";
import Animales from "./pages/Animales";
import Cuidadores from "./pages/Cuidadores";
import Asignaciones from "./pages/Asignaciones";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
 return (
 <Router>
   <Navbar />
   <div className="container mt-4">
     <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/zoologicos" element={<Zoologicos/>} />
      <Route path="/recintos" element={<Recintos/>} />
      <Route path="/animales" element={<Animales/>} />
      <Route path="/cuidadores" element={<Cuidadores/>} />
      <Route path="/asignaciones" element={<Asignaciones/>} />
        </Routes>
    </div>
  </Router>
 );
}
export default App;
    
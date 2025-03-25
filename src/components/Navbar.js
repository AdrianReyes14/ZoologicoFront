import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Gestión Zoológico</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/zoologicos">Zoológicos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/recintos">Recintos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/animales">Animales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cuidadores">Cuidadores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/asignaciones">Asignaciones</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {user ? (
              <li className="nav-item">
                <span className="nav-link">Bienvenido, {user.role}</span>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Iniciar Sesión</NavLink>
              </li>
            )}
            {user && (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Cerrar Sesión</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

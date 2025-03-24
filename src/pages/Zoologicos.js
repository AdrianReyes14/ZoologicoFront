import React, { useEffect, useState } from "react";
import axios from "axios";

const Zoologicos = () => {
  const [zoologicos, setZoologicos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/zoologicos")
      .then(response => {
        setZoologicos(response.data);
      })
      .catch(error => {
        console.error("Error al obtener zoológicos:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Zoológicos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {zoologicos.length > 0 ? (
            zoologicos.map((zoo) => (
              <tr key={zoo.id}>
                <td>{zoo.id}</td>
                <td>{zoo.nombre}</td>
                <td>{zoo.ubicacion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No hay zoológicos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Zoologicos;

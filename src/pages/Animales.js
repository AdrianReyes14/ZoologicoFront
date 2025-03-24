import React, { useEffect, useState } from "react";
import axios from "axios";

const Animales = () => {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/animales")
      .then(response => {
        setAnimales(response.data);
      })
      .catch(error => {
        console.error("Error al obtener animales:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Animales</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {animales.length > 0 ? (
            animales.map((animal) => (
              <tr key={animal.id}>
                <td>{animal.id}</td>
                <td>{animal.nombre}</td>
                <td>{animal.especie}</td>
                <td>{animal.edad}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No hay animales disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Animales;

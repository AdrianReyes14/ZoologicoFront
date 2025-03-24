import React, { useEffect, useState } from "react";
import axios from "axios";

const Cuidadores = () => {
  const [cuidadores, setCuidadores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/cuidadores")
      .then(response => {
        setCuidadores(response.data);
      })
      .catch(error => {
        console.error("Error al obtener cuidadores:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Cuidadores</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {cuidadores.length > 0 ? (
            cuidadores.map((cuidador) => (
              <tr key={cuidador.id}>
                <td>{cuidador.id}</td>
                <td>{cuidador.nombre}</td>
                <td>{cuidador.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No hay cuidadores disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cuidadores;

import React, { useEffect, useState } from "react";
import { getCuidadores } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

const CuidadoresList = () => {
  const [cuidadores, setCuidadores] = useState([]);

  useEffect(() => {
    cargarCuidadores();
  }, []);

  const cargarCuidadores = async () => {
    try {
      const response = await getCuidadores();
      setCuidadores(response.data);
    } catch (error) {
      console.error("Error al obtener los cuidadores:", error);
    }
  };

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
          {cuidadores.map((cuidador) => (
            <tr key={cuidador.id}>
              <td>{cuidador.id}</td>
              <td>{cuidador.nombre}</td>
              <td>{cuidador.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CuidadoresList;

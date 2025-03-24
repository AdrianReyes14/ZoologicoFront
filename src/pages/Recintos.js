import React, { useEffect, useState } from "react";
import axios from "axios";

const Recintos = () => {
  const [recintos, setRecintos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/recintos")
      .then(response => {
        setRecintos(response.data);
      })
      .catch(error => {
        console.error("Error al obtener recintos:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Recintos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {recintos.length > 0 ? (
            recintos.map((recinto) => (
              <tr key={recinto.id}>
                <td>{recinto.id}</td>
                <td>{recinto.nombre}</td>
                <td>{recinto.tipo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No hay recintos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Recintos;

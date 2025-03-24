import React, { useEffect, useState } from "react";
import axios from "axios";

const Asignaciones = () => {
  const [asignaciones, setAsignaciones] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/asignaciones")
      .then(response => {
        setAsignaciones(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error al obtener asignaciones:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Asignaciones</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal</th>
            <th>Cuidador</th>
          </tr>
        </thead>
        <tbody>
          {asignaciones.length > 0 ? (
            asignaciones.map((asignacion) => (
              <tr key={asignacion.id}>
                <td>{asignacion.id}</td>
                <td>{asignacion.animal_id}</td>
                <td>{asignacion.cuidador_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No hay asignaciones disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Asignaciones;
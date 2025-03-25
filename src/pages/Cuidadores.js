import React, { useEffect, useState } from "react";
import  { getCuidadores }  from "../services/cuidadorService";
console.log("getCuidadores", getCuidadores);

const Cuidadores = () => {
  const [cuidadores, setCuidadores] = useState([]);

  useEffect(() => {
    const fetchCuidadores = async() =>{
      try{ 
         const data = await getCuidadores();
         console.log("Datos obtenidos", data);
        setCuidadores(data);
    
    } catch (error){
      console.error("Error obteniendo los cuidadores", error);
    }
  }
    fetchCuidadores();
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
        {cuidadores?.length > 0 ? (
    cuidadores.map((cuidador) => (
      <tr key={cuidador?.id || Math.random()}>
        <td>{cuidador?.id || "N/A"}</td>
        <td>{cuidador?.nombre || "Desconocido"}</td>
        <td>{cuidador?.email || "No disponible"}</td>
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

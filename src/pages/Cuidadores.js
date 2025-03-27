import React, { useEffect, useState } from "react";
import  { getCuidadores, getCuidadorById, createCuidador, updateCuidador, deleteCuidador }  from "../services/cuidadorService";

const Cuidadores = () => {
  const [cuidadores, setCuidadores] = useState([]);
  const [cuidador, setCuidador] = useState({ nombre: "", email: "" });
  const [searchId, setSearchId] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchCuidadores();
  }, []);

  const fetchCuidadores = async() =>{
    try{ 
       const data = await getCuidadores();
       console.log("Datos obtenidos", data);
      setCuidadores(data);
    } catch (error) {
      console.error("Error obteniendo los cuidadores", error);
    }
  };
   
  const handleSearch = async () => {
    if(!searchId) return;
    try {
      const data = await getCuidadorById(searchId);
      setCuidadores([data]);
    } catch (error){
      console.error("Error buscando el cuidador", error);
    }
  };

  const handleEdit = (cuidador) => {
      setCuidador({ nombre: cuidador.nombre, email: cuidador.email});
      setEditingId(cuidador.id);
  };

  const handleCreate = async () => {
    try {
      await createCuidador(cuidador);
      setCuidador({ nombre: "", email: ""})
      fetchCuidadores();
    } catch (error) {
      console.error("Error creando el cuidador", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateCuidador(editingId, cuidador);
      setEditingId(null);
      setCuidador({ nombre: "", email: ""});
    }catch (error){
      console.error("Error actualizando el cuidador", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCuidador(id);
      fetchCuidadores();
    }catch (error) {
      console.error("Error eliminando cuidador", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Lista de Cuidadores</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Buscar por ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cuidadores.length > 0 ? (
            cuidadores.map((cuidador) => (
              <tr key={cuidador.id}>
                <td>{cuidador.id}</td>
                <td>{cuidador.nombre}</td>
                <td>{cuidador.email}</td>
                <td>
                  <button onClick={() => handleEdit(cuidador)}>Editar</button>
                  <button onClick={() => handleDelete(cuidador.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No hay cuidadores disponibles</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-4">
        <h3>{editingId ? "Actualizar Cuidador" : "Crear Cuidador"}</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={cuidador.nombre}
          onChange={(e) => setCuidador({ ...cuidador, nombre: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={cuidador.email}
          onChange={(e) => setCuidador({ ...cuidador, email: e.target.value })}
        />
        {editingId ? (
          <button onClick={handleUpdate}>Actualizar</button>
        ) : (
          <button onClick={handleCreate}>Crear</button>
        )}
      </div>
    </div>
  );
};

export default Cuidadores;
import axios from "axios";

const API_URL = "http://localhost:8080/api/cuidadores"; // Asegúrate de que sea la URL correcta

export const getCuidadores = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCuidadorById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// 🔹 Agregar función para CREAR cuidador
export const createCuidador = async (cuidador) => {
  const response = await axios.post(API_URL, cuidador);
  return response.data;
};

// 🔹 Agregar función para ACTUALIZAR cuidador
export const updateCuidador = async (id, cuidador) => {
  const response = await axios.put(`${API_URL}/${id}`, cuidador);
  return response.data;
};

// 🔹 Agregar función para ELIMINAR cuidador
export const deleteCuidador = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

import axios from "axios";

const API_URL = "http://localhost:8080"; // URL del backend en Spring Boot

// Zoológicos

export const getZoologicos = () => axios.get(`${API_URL}/zoologicos`);
export const createZoologico = (data) => axios.post(`${API_URL}/zoologicos`, data);
export const updateZoologico = (id, data) => axios.put(`${API_URL}/zoologicos/${id}`, data);
export const deleteZoologico = (id) => axios.delete(`${API_URL}/zoologicos/${id}`);

//Recintos
export const getRecintos = () => axios.get(`${API_URL}/recintos`);
export const getRecintosByZoologico = (zoologico) => axios.get(`${API_URL}/recintos?zoologicoId=${zoologicoid}`);
export const createRecinto = (data) => axios.post(`${API_URL}/recintos`, data);
export const updateRecinto = (id, data) => axios.put(`${API_URL}/recintos/${id}`, data);
export const deleteRecinto = (id) => axios.delete(`${API_URL}/recintos/${id}`);

//Animales
export const getAnimales = () => axios.get(`${API_URL}/animales`);
export const getAnimalesByRecinto = (recintoId) => axios.get(`${API_URL}/animales?recintoId=${recintoId}`);
export const createAnimal = (data) => axios.post(`${API_URL}/animales`, data);
export const updateAnimal = (id, data) => axios.put(`${API_URL}/animales/${id}`, data);
export const deleteAnimal = (id) => axios.delete(`${API_URL}/animales/${id}`);

//Cuidadores
export const getCuidadores = () => axios.get(`${API_URL}/cuidadores`);
export const createCuidador = (data) => axios.post(`${API_URL}/cuidadores`, data);
export const updateCuidador = (id, data) => axios.put(`${API_URL}/cuidadores/${id}`, data);
export const deleteCuidador = (id) => axios.delete(`${API_URL}/cuidadores/${id}`);

//Asignaciones
export const getAsignaciones = () => axios.get(`${API_URL}/asignaciones`);
export const assignCuidador = (data) => axios.post(`${API_URL}/asignaciones`, data);
export const deleteAsignacion = (id) => axios.delete(`${API_URL}/asignaciones/${id}`);
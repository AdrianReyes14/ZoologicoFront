import axios from "axios";

const API_URL = "http://localhost:8080/cuidadores";

 export const getCuidadores = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener cuidadores:", error);
    return [];
  }
};


 export const getCuidadorById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el cuidador con ID ${id}:`, error);
    return null;
  }
};


import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api"
});

// Get All Houses
export const getAllHouses = () => {
  return API.get("/get-properties");
};

// Add House
export const addHouse = (formData) => {
  return API.post("/add-properties", formData);
};

// Update House
export const updateHouse = (id, formData) => {
  return API.put(`/add-properties/${id}`, formData);
};

// Delete House
export const deleteHouse = (id) => {
  return API.delete(`/add-properties/${id}`);
};
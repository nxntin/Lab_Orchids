import axios from 'axios';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

console.log('API_URL:', API_URL); // Kiểm tra URL

export const fetchOrchids = () => axios.get(API_URL);
export const fetchOrchidById = (id) => axios.get(`${API_URL}/${id}`);
export const createOrchid = (orchidData) => axios.post(API_URL, orchidData);
export const updateOrchid = (id, orchidData) => axios.put(`${API_URL}/${id}`, orchidData);
export const deleteOrchid = (id) => axios.delete(`${API_URL}/${id}`);

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user';

export const getUsers = () => axios.get(`${API_URL}/list`);
export const addUser = (user) => axios.post(`${API_URL}/add`, user);
export const updateUser = (id, user) => axios.put(`${API_URL}/edit/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/delete/${id}`);
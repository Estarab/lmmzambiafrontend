


import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/mauritius/auth`;


export const loginUser = (data) =>
  axios.post(`${API_URL}/login`, data);

export const signupUser = (data) =>
  axios.post(`${API_URL}/signup`, data);

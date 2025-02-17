import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel backend URL
  headers: { 'Content-Type': 'application/json' },
});

// Add request interceptor to include tokens
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
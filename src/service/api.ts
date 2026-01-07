import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:3001/api';

export const api = axios.create({
    baseURL: API_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers!.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('API Error:', error);
        
        if (error.response?.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                
                if (window.location.pathname !== '/login') {
                    window.location.href = '/login';
                }
            }
        }
        
        return Promise.reject(error);
    }
);

export default api;
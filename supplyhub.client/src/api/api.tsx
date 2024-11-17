import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:7155/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('JwtToken');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

export const handleApiError = (error: any, context: string) => {
    console.error(`${context}:`, error);
    if (error.response) {
        console.error('API Error:', error.response.data);
        console.error('API Error:', error.response.status);
        console.error('API Error:', error.message);
    }
}; // utility function for errors

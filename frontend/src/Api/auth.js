import axios from 'axios';
import { API_URL } from './config';

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password
    });

    return response.data;
};
export const register = async (user) => {
    console.log("Estoy en register", "user: ", user);
    try {
        const response = await axios.post(`${API_URL}/register`, user);
        return response.data;
    } catch (error) {
        console.error('Error al registrar el usuario', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('authToken');
};


import axios from 'axios';
import { API_URL } from './config';

export const getNotes = async (token) => {
    console.log("Estoy en getNotes", "token: ", token);
    const response = await axios.get(`${API_URL}/notes`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response.data);
    return response.data;
};

// export const getNote = async (id, token) => {
//     const response = await axios.get(`${API_URL}/notes/${id}`, {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     });
//     return response.data;
// }

export const createNote = async (note, token) => {
    console.log("Estoy en createNote", "note: ", note, "token: ", token);
    const response = await axios.post(`${API_URL}/notes`, note, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const updateNote = async (id, updatedNote, token) => {
    const currentNoteResponse = await axios.get(`${API_URL}/notes/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const currentNote = currentNoteResponse.data;

    currentNote.IsArchived = updatedNote.archived;

    const response = await axios.put(`${API_URL}/notes/${id}`, currentNote, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export const deleteNote = async (id, token) => {
    const response = await axios.delete(`${API_URL}/notes/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};
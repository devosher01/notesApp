import axios from 'axios';

const API_URL = 'http://localhost:3000/notes'; 

export const getNotes = async () => {
    const response = await axios.get(`${API_URL}`);
    // console.log(response.data);
    return response.data;
};

export const createNote = async (note) => {
    const response = await axios.post(`${API_URL}`, note);
    console.log(response.data);
    return response.data;
};

export const updateNote = async (id, updatedNote) => {
    // Obtén la nota actual
    const currentNoteResponse = await axios.get(`${API_URL}/${id}`);
    const currentNote = currentNoteResponse.data;

    currentNote.IsArchived = updatedNote.archived;

    console.log("Nota a actualizar", currentNote);
    const response = await axios.put(`${API_URL}/${id}`, currentNote);
    console.log("Respuesta de la API", response.data);
    return response.data;
};

export const deleteNote = async (id) => {
    console.log("Eliminando nota con id: " + id);
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};


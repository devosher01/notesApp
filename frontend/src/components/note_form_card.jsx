import React, { useEffect, useState } from "react";
import { createNote, getNotes } from "../Api/notes";

export default function NoteFormCard({ onNoteCreated}) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const token = localStorage.getItem('authToken');
            const fetchedNotes = await getNotes(token);
            setNotes(fetchedNotes);
        };

        fetchNotes();
    }, []);
  
    const categories = [
        { id: 1, name: "Trabajo", color: "bg-blue-200 text-blue-800" },
        { id: 2, name: "Personal", color: "bg-green-200 text-green-800" },
        { id: 3, name: "Ideas", color: "bg-yellow-200 text-yellow-800" },
        { id: 4, name: "Recordatorios", color: "bg-red-200 text-red-800" },
        { id: 5, name: "Estudio", color: "bg-purple-200 text-purple-800" },
        { id: 6, name: "Proyectos", color: "bg-indigo-200 text-indigo-800" },
        { id: 7, name: "Salud", color: "bg-pink-200 text-pink-800" },
        { id: 8, name: "Finanzas", color: "bg-orange-200 text-orange-800" },
        { id: 9, name: "Viajes", color: "bg-teal-200 text-teal-800" },
        { id: 10, name: "Compras", color: "bg-gray-200 text-gray-800" },
    ];



const handleSubmit = () => {
    console.log("Creating note...");
    const note = {
        Title: title,
        Description: content,
        Categories: selectedCategories,
        UserID : parseInt(localStorage.getItem('userID'))
    };
    console.log(note);
    const token = localStorage.getItem('authToken');
    createNote(note, token)
        .then(newNote => {
            onNoteCreated(newNote);
        })
        .catch(error => {
            console.error('Error creating note:', error);
        });
};
    
    
    const handleAddCategory = (event) => {
        const categoryId = parseInt(event.target.value);
        if (categoryId && !selectedCategories.includes(categoryId)) {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleRemoveCategory = (categoryId) => {
        setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    };

        return (
            <div className="border border-gray-300 rounded  bg-white">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Create/Edit Note</h3>
                </div>
                <div className="space-y-2 p-6">
                    <div className="space-y-1">
                        <label htmlFor="title" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Title
                        </label>
                        <input defaultValue="" id="title" onChange={handleTitleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="content" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Content
                        </label>
                        <textarea defaultValue="" id="content" onChange={handleContentChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="categories" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Categories
                        </label>
                        <select
                            value={selectedCategories.length > 0 ? selectedCategories[0] : ""}
                            id="categories"
                            onChange={handleAddCategory}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                            <option value="">Selecciona una categoría</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <div>
                            {selectedCategories.map((categoryId, index) => {
                                const category = categories.find(cat => cat.id === categoryId);
                                return (
                                    <span key={index} className={`inline-block px-2 py-1 rounded-full text-xs font-medium tracking-widest m-1 ${category.color}`}>
                                        {category.name} <button onClick={() => handleRemoveCategory(category.id)}>X</button>
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-6">
                    <button onClick={handleSubmit} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500">Save Note</button>
                </div>
            </div>
        );
    }
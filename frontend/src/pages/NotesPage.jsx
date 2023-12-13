import React, { useState, useEffect } from "react";
import NoteFormCard from "../components/note_form_card";
import FilterCategories from "../components/filter_categorie";
import Tabs from "../components/tabs";
import NoteCard from "../components/note_card";
import { getNotes, updateNote, deleteNote } from "../Api/notes";

export default function NotesPage() {
    const [activeTab, setActiveTab] = useState("active");

    const [selectedCategories, setSelectedCategories] = useState([]);

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const notesFromServer = await getNotes();
            const transformedNotes = notesFromServer.map(note => ({
                id: note.ID,
                title: note.Title,
                content: note.Description,
                archived: note.IsArchived,
                category: note.Categories
            }));
            setNotes(transformedNotes);
        };

        fetchNotes();
    }, []);


    const handleEdit = () => {
        
    };

    const handleArchive = async (id) => {
        console.log("Archiving note with id", id);
        const noteToArchive = notes.find(note => note.id === id);
        const updatedNote = { ...noteToArchive, archived: !noteToArchive.archived };
        await updateNote(id, updatedNote);
        setNotes(notes.map(note => note.id === id ? updatedNote : note));
    };
    
    const handleDelete = async (id) => {
        console.log("Deleting note with id", id);
        await deleteNote(id);
        setNotes(notes.filter(note => note.id !== id));
    };
    // Filtrar las notas basándose en el activeTab y las categorías seleccionadas
    const filteredNotes = notes.filter(note => 
        (activeTab === "active" ? !note.archived : note.archived) && 
        (selectedCategories.length === 0 ? true : selectedCategories.every(catId => note.category.includes(catId)))
    );

    return (
        <div className="container mx-auto p-4 bg-white-100 min-h-screen">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                    <NoteFormCard />
                </div>
                <div className="col-span-3">
                    <FilterCategories selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} /> {}
                    <Tabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                    {filteredNotes.map(note => (
                        <NoteCard
                            key={note.id}
                            title={note.title}
                            content={note.content}
                            category={note.category}
                            archived={note.archived} 
                            onEdit={handleEdit}
                            onArchive={() => handleArchive(note.id)}
                            onDelete={() => handleDelete(note.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}